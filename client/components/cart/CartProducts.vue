<template>
  <div
    class="space-y-[15px] mt-[15px] lg:max-h-[380px] overflow-y-scroll cart-body"
  >
    <!-- <CartProductsItem /> -->
  </div>
</template>

<script>
import CartProductsItem from "./CartProductsItem.vue";

export default {
  data() {
    return {
      cartData: [],
    };
  },
  computed: {
    fetchParams() {
      if (process.browser && this.products) {
        return this.products
          .map((e, i) => `filters[id][$in][${i}]=${e.id}`)
          .join("&");
      }
    },

    products() {
      return this.$store.state.cart.list;
    },
  },
  async fetch() {
    this.cartData = await this.$axios.$get(
      `http://localhost:1337/api/products?${this.fetchParams}`
    );
  },
  components: { CartProductsItem },
};
</script>

<style scoped>
.cart-body::-webkit-scrollbar {
  width: 0px;
}
</style>
