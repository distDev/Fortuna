<template>
  <MainProductsContent :data="data" v-if="isProducts" />
  <EmptyProductsContent v-else />
</template>

<script>
import { productsData } from "../../assets/data";
import MainProductsContent from "../../components/product-page/MainProductsContent.vue";
import EmptyProductsContent from "../../components/product-page/EmptyProductsContent.vue";
import ProductCards from "../../components/ProductCards.vue";
export default {
  data() {
    return {
      data: productsData,
    };
  },
  computed: {
    isProducts() {
      return this.data.length > 0 ? true : false;
    },
  },
  components: { ProductCards, MainProductsContent, EmptyProductsContent },
};
</script>

<style scoped></style>
