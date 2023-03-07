<template>
  <div>
   
    <MainProductsContent :data="products.data" />
    <!-- <EmptyProductsContent v-else /> -->
  </div>
</template>

<script>
import MainProductsContent from "../../components/product-page/MainProductsContent.vue";
import EmptyProductsContent from "../../components/product-page/EmptyProductsContent.vue";
import ProductCards from "../../components/ProductCards.vue";
export default {
  data() {
    return {
      products: [],
    };
  },
  async fetch() {
    this.products = await this.$axios.$get(
      "http://localhost:1337/api/products?populate=*"
    );
  },
  components: { ProductCards, MainProductsContent, EmptyProductsContent },
};
</script>

<style scoped></style>
