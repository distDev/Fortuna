<template>
  <div class="pt-[25px] lg:pt-[60px]">
    <div
      v-for="{ id, attributes } in product"
      :key="id"
      class="flex flex-col lg:flex-row w-full px-[15px] lg:px-[40px] lg:space-x-[30px]"
    >
      <ProductSlider
        class="w-full lg:w-[60%]"
        :images="attributes.images.data"
      />
      <ProductDetails
        :name="attributes.name"
        :price="attributes.price"
        :inStock="attributes.inStock"
        :totalCount="attributes.totalCount"
        :attributes="attributes.attributes"
        :description="attributes.description"
        :images="attributes.images.data"
        :id="id"
        :size="attributes.size"
      />
    </div>
    <ProductTicker />
    <PopularPoducts :data="popularProducts" title="может понравиться" />
  </div>
</template>

<script>
import ProductSlider from "@/components/ProductSlider.vue";
import ProductDetails from "@/components/product-page/ProductDetails.vue";
import PopularPoducts from "../../components/PopularPoducts.vue";
import ProductTicker from "../../components/product-page/ProductTicker.vue";
import { realProducts } from "../../assets/data";

export default {
  data() {
    return {
      data: realProducts,
    };
  },
  computed: {
    product() {
      return realProducts.filter((e) => e.id === this.$route.params.id);
    },
    popularProducts() {
      return this.data
        .filter((e) => e.id !== this.$route.params.id)
        .slice(0, 3);
    },
  },

  components: { ProductSlider, ProductDetails, PopularPoducts, ProductTicker },
};
</script>

<style scoped>
@media (max-width: 768) {
  .ticker-item {
    animation: ticker 5s linear infinite;
  }

  @keyframes ticker {
    0% {
      transform: translateZ(0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
}
</style>
