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
      @submit-form="handleSubmit"
      :contact-info="contactInfo"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { devApi } from "../../../assets/api";
import Input from "../../UI/Input.vue";
import OrderFormConfirm from "./OrderFormConfirm.vue";
import OrderFormInfo from "./OrderFormInfo.vue";

export default {
  data() {
    return {
      contactInfo: null,
      step: "info",
      api: devApi,
    };
  },
  methods: {
    // Отправка формы в tg и на сервер
    handleSubmit() {
      this.orderCheckout();
      this.changeProductCount();
      this.tgMessage();
      this.$router.push({ path: "/order-success" });

      setTimeout(() => {
        this.clearCart();
      }, 1000);

      // this.$toast.warning("В данный момент нельзя сделать заказ");
    },

    // Отправка данных в telegram
    async tgMessage() {
      await this.$axios.$post(
        `https://api.telegram.org/bot${this.$config.tgApiKey}/sendMessage?chat_id=${this.$config.tgChatId}&text=Тип заявки: Заказ%0AИмя: ${this.contactInfo.name}%0AНомер телефона: ${this.contactInfo.phone}%0AСумма заказа: ${this.totalCost} ₽%0AГород: ${this.contactInfo.city}%0AОбласть: ${this.contactInfo.region}%0AАдрес: ${this.contactInfo.address}%0AКвартира: ${this.contactInfo.apart}%0AИндекс: ${this.contactInfo.postal}%0AМетод доставки: ${this.shippingMethod}%0AТовары: ${this.producrsForTelegram}`
      );
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

      await this.$axios.post(`${this.api}/api/orders`, body, config);
    },

    // Изменение количества доступного товара на сервере
    async changeProductCount() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.$config.authToken}`,
        },
      };

      // перебираю массив товаров и возвращаю массив промисов
      let requests = () =>
        this.orderProducts.map((item) => {
          return this.$axios.$put(
            `${this.api}/api/products/${item.id}`,
            {
              data: { totalCount: (item.totalCount -= item.countInCart) },
            },
            config
          );
        });

      await Promise.all(requests());
    },

    // Получение данных и переход к следующему шагу
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
      if (typeof this.shippingCost === "number") {
        return this.totalPrice + this.shippingCost;
      }
      return this.totalPrice;
    },
    producrsForTelegram() {
      return this.orderProducts.map((e) => e.name).join(", ");
    },
  },

  props: {
    orderProducts: Array,
    totalPrice: Number,
  },

  components: { Input, OrderFormInfo, OrderFormConfirm },
};
</script>
