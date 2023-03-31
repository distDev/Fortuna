<template>
  <div
    class="space-y-[15px] mt-[15px] lg:max-h-[380px] overflow-y-scroll cart-body"
  >
    <CartProductsItem
      v-for="{
        name,
        price,
        size,
        countInCart,
        totalCount,
        image,
        id,
      } in products"
      :key="id"
      :id="id"
      :price="price"
      :name="name"
      :size="size"
      :count-in-cart="countInCart"
      :total-count="totalCount"
      :image="image"
      :pending="pending"
    />
  </div>
</template>

<script>
import CartProductsItem from "./CartProductsItem.vue";

export default {
  components: { CartProductsItem },

  props: {
    products: Array,
    pending: Boolean,
  },
};
</script>

<style scoped>
.cart-body::-webkit-scrollbar {
  width: 0px;
}
</style>
