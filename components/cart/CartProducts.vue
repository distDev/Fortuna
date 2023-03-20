<template>
  <div
    class="space-y-[15px] mt-[15px] lg:max-h-[380px] overflow-y-scroll cart-body"
  >
    <CartProductsItem
      v-for="{ name, price, size, countInCart, image, id } in products"
      :key="id"
      :id="id"
      :price="price"
      :name="name"
      :size="size"
      :count-in-cart="countInCart"
      :products="cartData.data"
      :image="image"
    />
  </div>
</template>

<script>
import CartProductsItem from "./CartProductsItem.vue";

export default {
  computed: {
    products() {
      return this.$store.state.cart.list;
    },
  },

  components: { CartProductsItem },
  
  props: {
    cartData: Array,
  },
};
</script>

<style scoped>
.cart-body::-webkit-scrollbar {
  width: 0px;
}
</style>
