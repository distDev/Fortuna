<template>
  <div class="flex flex-col-reverse lg:flex-row order">
    <OrderForm />
    <OrderDetails />
  </div>
</template>

<script>
import OrderDetails from "../components/order-page/OrderDetails.vue";
import OrderForm from "../components/order-page/order-form/OrderForm.vue";
import Input from "../components/UI/Input.vue";

export default { layout: "order", components: { Input, OrderForm, OrderDetails } };
</script>

<style scoped>
.order {
  font-family: "Roboto", sans-serif;
}
</style>
