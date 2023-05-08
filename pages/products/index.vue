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
import { prodApi } from "../../assets/api";
export default {
  data() {
    return {
      products: [],
      api: prodApi
    };
  },
  async fetch() {
    this.products = await this.$axios.$get(
      `${prodApi}/api/products?populate=*`
    );
  },
  components: {
    ProductCards,
    MainProductsContent,
    EmptyProductsContent,
    Loader,
  },
  head: {
    title: "Магазин коллектива 'Фортуна'",
  },
};
</script>

<style scoped></style>
