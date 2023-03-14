<template>
  <div
    class="space-y-[15px] mt-[15px] lg:max-h-[380px] overflow-y-scroll cart-body"
    v-if="!$fetchState.pending"
  >
    <CartProductsItem
      v-for="{ attributes, id } in cartData.data"
      :key="id"
      :id="id"
      :name="attributes.name"
      :size="attributes.size"
      :total-count="attributes.totalCount"
      :in-stock="attributes.inStock"
      :image="'http://localhost:1337' + attributes.images.data[0].attributes.formats.small.url"
    />
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
   if(this.fetchParams) {
    this.cartData = await this.$axios.$get(
      `http://localhost:1337/api/products?${this.fetchParams}&populate=*`
    );
   }
   else {
    this.cartData = []
   }
  },
  components: { CartProductsItem },
};
</script>

<style scoped>
.cart-body::-webkit-scrollbar {
  width: 0px;
}
</style>
