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
      api: this.$config.apiPath
    };
  },
  async fetch() {
    this.products = await this.$axios.$get(
      `${this.$config.apiPath}/api/products?populate=*&sort=publishedAt:desc`
    );
  },
  components: {
    ProductCards,
    MainProductsContent,
    EmptyProductsContent,
    Loader,
  },
  head: {
    title: "Магазин - Коллектив 'Фортуна'",
    meta: [
        {
          hid: "description",
          name: "description",
          content: 'Купить товары ручной работы и мерч солнечного дуэта "Фортуна"',
        },
      ],
  },
};
</script>

<style scoped></style>
