<template>
  <div
    class="lg:w-[57%] w-full px-[15px] lg:px-0 py-[30px] lg:py-auto lg:h-[90vh] bg-[#FAF9FF] flex lg:justify-end lg:pt-[60px]"
  >
    <OrderFormInfo
      v-show="step === 'info'"
      @get-info="(info) => handleGetContactInfo(info)"
    />
    <OrderFormConfirm
      v-if="step === 'confirm'"
      @back="handleReturn"
      @order-payment="changeVisiblePaymentForm"
      :contact-info="contactInfo"
    />
    <OrderPay
      v-if="payFormIsVisible"
      @form-submit="handleSubmit"
      :totalCost="totalCost"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Input from "../../UI/Input.vue";
import OrderFormConfirm from "./order-form-confirm/OrderFormConfirm.vue";
import OrderFormInfo from "./OrderFormInfo.vue";
import OrderPay from "./OrderPay.vue";

export default {
  data() {
    return {
      contactInfo: null,
      payFormIsVisible: false,
      step: "info",
      api: this.$config.apiPath,
    };
  },
  methods: {
    // Отправка формы в tg и на сервер
    async handleSubmit() {
      try {
        await Promise.all([
          this.orderCheckout(),
          this.changeProductCount(),
          this.tgMessage(),
        ]);

        this.changeVisiblePaymentForm();
        this.$router.push({ path: "/order-success" });
        this.clearCart();
      } catch (error) {
        console.error(error);
      }
      // this.$toast.warning("В данный момент нельзя сделать заказ");
    },

    // Отправка данных на сервер
    async orderCheckout() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.$config.authToken}`,
        },
      };

      const body = {
        data: {
          name: this.contactInfo.name,
          phone: String(this.contactInfo.phone),
          region: this.contactInfo.region,
          city: this.contactInfo.city,
          apart: this.contactInfo.apart,
          postalCode: this.contactInfo.postal,
          address: this.contactInfo.address,
          shippingMethod: this.shippingMethod,
          totalPrice: this.totalCost,
          products: this.orderProducts,
        },
      };

      try {
        await this.$axios.post(`${this.api}/api/orders`, body, config);
      } catch (error) {
        console.error(error);
        throw new Error("Ошибка при отправке заказа на сервер");
      }
    },

    // Изменение количества товара на сервере
    async changeProductCount() {
      const authConfig = {
        headers: {
          Authorization: `Bearer ${this.$config.authToken}`,
        },
      };

      try {
        await Promise.all(
          this.orderProducts.map(async (product) => {
            const { id, totalCount, countInCart } = product;
            const newCount = totalCount - countInCart;
            await this.$axios.$put(
              `${this.api}/api/products/${id}`,
              { data: { totalCount: newCount } },
              authConfig
            );
          })
        );
      } catch (error) {
        console.error(error);
        throw new Error("Ошибка при изменении количества товара на сервере");
      }
    },

    // Отправка данных в telegram
    async tgMessage() {
      try {
        await this.$axios.$post(
          `https://api.telegram.org/bot${this.$config.tgApiKey}/sendMessage?chat_id=${this.$config.tgChatId}&text=Тип заявки: Заказ%0AИмя: ${this.contactInfo.name}%0AНомер телефона: ${this.contactInfo.phone}%0AСумма заказа: ${this.totalCost} ₽%0AГород: ${this.contactInfo.city}%0AОбласть: ${this.contactInfo.region}%0AАдрес: ${this.contactInfo.address}%0AКвартира: ${this.contactInfo.apart}%0AИндекс: ${this.contactInfo.postal}%0AМетод доставки: ${this.shippingMethod}%0AТовары: ${this.producrsForTelegram}`
        );
      } catch (error) {
        console.error(error);
        throw new Error("Ошибка при отправке сообщения в Telegram");
      }
    },

    changeVisiblePaymentForm() {
      this.payFormIsVisible = !this.payFormIsVisible;
    },

    // Получение данных 1 этапа формы и переход к следующему шагу
    handleGetContactInfo(info) {
      this.contactInfo = info;
      this.step = "confirm";
    },

    // Возврат к 1 шагу
    handleReturn() {
      this.step = "info";
    },

    ...mapMutations({
      clearCart: "cart/clearCart",
    }),
  },

  computed: {
    shippingCost() {
      return this.$store.state.cart.shippingInfo.cost;
    },
    shippingMethod() {
      return this.$store.state.cart.shippingInfo.company;
    },
    totalCost() {
      return this.totalPrice + this.shippingCost;
    },
    producrsForTelegram() {
      return this.orderProducts.map((e) => e.name).join(", ");
    },
  },

  props: {
    orderProducts: Array,
    totalPrice: Number,
  },

  components: { Input, OrderFormInfo, OrderFormConfirm, OrderPay },
};
</script>
