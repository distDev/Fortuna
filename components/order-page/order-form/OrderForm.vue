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
import { mapGetters } from "vuex";
import Input from "../../UI/Input.vue";
import OrderFormConfirm from "./OrderFormConfirm.vue";
import OrderFormInfo from "./OrderFormInfo.vue";

export default {
  data() {
    return {
      contactInfo: null,
      step: "info",
    };
  },
  methods: {
    // Отправка формы в tg и на сервер
    handleSubmit() {
      this.tgMessage();
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

    // отправка заявки в telegram
    async tgMessage() {
      await this.$axios.$post(
        `https://api.telegram.org/bot6176433279:AAFpq3SOcEspecPhvgS4RB49WfvJxcxS1W0/sendMessage?chat_id=-631246612&text=Тип заявки: Заказ%0AИмя: ${this.contactInfo.name}%0AНомер телефона: ${this.contactInfo.phone}%0AСумма заказа: ${this.totalCost} ₽%0AГород: ${this.contactInfo.city}%0AОбласть: ${this.contactInfo.region}%0AАдрес: ${this.contactInfo.address}%0AКвартира: ${this.contactInfo.apart}%0AИндекс: ${this.contactInfo.postal}%0AМетод доставки: ${this.shippingMethod}%0AТовары: ${this.producrsForTelegram}`
      );
    },
  },

  computed: {
    ...mapGetters({
      orderTotal: "cart/getCartTotalPrice",
    }),
    shippingCost() {
      return this.$store.state.cart.shippingInfo.cost;
    },
    shippingMethod() {
      return this.$store.state.cart.shippingInfo.company;
    },
    totalCost() {
      if (typeof this.shippingCost === "number") {
        return this.orderTotal + this.shippingCost;
      }
      return this.orderTotal;
    },
    producrsForTelegram() {
      return this.orderProducts.map((e) => e.name).join(", ");
    },
  },

  props: {
    orderProducts: Array,
  },

  components: { Input, OrderFormInfo, OrderFormConfirm },
};
</script>
