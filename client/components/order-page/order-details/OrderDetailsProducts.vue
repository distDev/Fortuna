<template>
  <div
    class="space-y-5 px-[15px] py-5 lg:py-0 lg:px-[0] lg:space-y-[25px] border-b-[1px] border-b-[#ECECEC] lg:pb-[30px]"
  >
    <OrderDetailsProduct
      v-for="{ id, image, countInCart, name, price, size } in products"
      :key="id"
      :image="image"
      :countInCart="countInCart"
      :name="name"
      :price="price"
      :size="size"
    />
  </div>
</template>

<script>
import OrderDetailsProduct from "./OrderDetailsProduct.vue";

export default {
  components: { OrderDetailsProduct },
  props: {
    products: Array,
  },
};
</script>

<style lang="scss" scoped></style>
