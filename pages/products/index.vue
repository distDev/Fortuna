<template>
  <div>
    <Loader v-if="$fetchState.pending" />
    <MainProductsContent
      :data="products.data"
      v-if="!$fetchState.pending && products.data.length > 0"
    />
    <EmptyProductsContent v-else />
  </div>
</template>

<script>
import MainProductsContent from "../../components/product-page/MainProductsContent.vue";
import EmptyProductsContent from "../../components/product-page/EmptyProductsContent.vue";
import ProductCards from "../../components/ProductCards.vue";
import Loader from "../../components/Loader.vue";
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
  components: {
    ProductCards,
    MainProductsContent,
    EmptyProductsContent,
    Loader,
  },
};
</script>

<style scoped></style>
