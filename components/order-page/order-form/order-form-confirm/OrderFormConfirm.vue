<template>
  <div class="w-full lg:w-[617px] lg:mr-[50px] space-y-[50px]">
    <OrderFormConfimInfo :contact-info="contactInfo" @back="$emit('back')" />
    <OrderFormConfirmShipping />

    <div class="w-full flex lg:justify-end">
      <button
        @click="$emit('order-payment')"
        :disabled="!selectedShippingMethod"
        class="bg-black w-full lg:w-auto text-white rounded-[4px] py-[15px] lg:px-[30px] font-medium lg:text-base disabled:bg-grey"
      >
        Оплатить онлайн
      </button>
    </div>
  </div>
</template>

<script>
import Input from "../../../UI/Input.vue";
import OrderPay from "../OrderPay.vue";
import OrderFormConfimInfo from "./OrderFormConfimInfo.vue";
import OrderFormConfirmShipping from "./OrderFormConfirmShipping.vue";

export default {
  props: {
    contactInfo: Object,
  },

  computed: {
    selectedShippingMethod() {
      return this.$store.state.cart.shippingInfo.company;
    },
  },

  emits: ["back", "submit-form"],

  components: {
    Input,
    OrderPay,
    OrderFormConfimInfo,
    OrderFormConfirmShipping,
  },
};
</script>
