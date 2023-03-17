<template>
  <div
    class="lg:w-[57%] w-full px-[15px] lg:px-0 py-[30px] lg:py-auto lg:h-[90vh] bg-[#FAF9FF] flex lg:justify-end lg:pt-[60px]"
  >
    <OrderFormInfo
      v-if="step === 'info'"
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
    // отправка формы в tg и на сервер
    handleSubmit() {
      console.log(
        this.products,
        this.totalCost,
        this.name,
        this.address,
        this.phone,
        this.region
      );
    },

    handleGetContactInfo(info) {
      this.contactInfo = info;
      this.step = "confirm";
    },

    // возврат к 1 шагу
    handleReturn() {
      this.step = "info";
    },
  },

  computed: {
    ...mapGetters({
      orderTotal: "cart/getCartTotalPrice",
    }),
    products() {
      return this.$store.state.cart.list;
    },
    shippingCost() {
      return this.$store.state.cart.shippingInfo.cost;
    },
    totalCost() {
      if (typeof this.shippingCost === "number") {
        return this.orderTotal + this.shippingCost;
      }
      return this.orderTotal;
    },
  },

  components: { Input, OrderFormInfo, OrderFormConfirm },
};
</script>
