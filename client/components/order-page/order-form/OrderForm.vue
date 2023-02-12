<template>
  <div
    class="lg:w-[57%] w-full px-[15px] lg:px-0 py-[30px] lg:py-auto lg:h-[90vh] bg-[#FAF9FF] flex lg:justify-end lg:pt-[60px]"
  >
    <OrderFormInfo
      v-if="step === 'info'"
      :name="name"
      @input-name="name = $event"
      :phone="phone"
      @input-phone="phone = $event"
      :apart="apart"
      @input-apart="apart = $event"
      :city="city"
      @input-city="city = $event"
      :postal="postal"
      @input-postal="postal = $event"
      :region="region"
      @input-region="region = $event"
      :address="address"
      @input-address="address = $event"
      @next-step="handleNext"
    />
    <OrderFormConfirm
      v-if="step === 'confirm'"
      :name="name"
      :apart="apart"
      :city="city"
      :phone="phone"
      :postal="postal"
      :region="region"
      :address="address"
      @back="handleReturn"
      @submit-form="handleSubmit"
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
      name: "",
      phone: "",
      region: "",
      city: "",
      apart: "",
      postal: "",
      address: "",
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

    // возврат к 1 шагу
    handleReturn() {
      this.step = "info";
    },

    // переход к 2 шагу
    handleNext() {
      this.step = "confirm";
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
