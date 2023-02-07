<template>
  <div
    class="lg:w-[57%] w-full px-[15px] lg:px-0 py-[30px] lg:py-auto lg:h-[90vh] bg-[#FAF9FF] flex lg:justify-end lg:pt-[60px]"
  >
    <OrderFormInfo
      v-if="step === 'info'"
      :name="name"
      :apart="apart"
      :city="city"
      :phone="phone"
      :postal="postal"
      :region="region"
      :address="address"
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
    />
  </div>
</template>

<script>
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
      step: "confirm",
    };
  },
  
 
  components: { Input, OrderFormInfo, OrderFormConfirm },
};
</script>
