<template>
  <Loader v-if="$fetchState.pending" />
  <p v-else-if="$fetchState.error">Произошла ошибка :(</p>
  <div class="pt-[15px] lg:pt-[60px]" v-else>
    <div
      class="max-w-[1440px] m-auto flex flex-col lg:flex-row w-full px-[15px] lg:px-[40px] lg:space-x-[30px]"
    >
      <ProductSlider
        class="w-full lg:w-[60%]"
        :images="product.data.attributes.images.data"
      />
      <ProductDetails
        :name="product.data.attributes.name"
        :price="product.data.attributes.price"
        :inStock="product.data.attributes.inStock"
        :totalCount="product.data.attributes.totalCount"
        :attributes="product.data.attributes.attributes"
        :description="product.data.attributes.description"
        :images="product.data.attributes.images.data"
        :id="product.data.id"
        :size="product.data.attributes.size"
      />
    </div>
    <ProductTicker />
    <PopularPoducts
      :data="popularProducts.data.attributes.products.data"
      title="может понравиться"
    />
  </div>
</template>

<script>
import ProductSlider from "@/components/ProductSlider.vue";
import ProductDetails from "@/components/product-page/ProductDetails.vue";
import PopularPoducts from "../../components/PopularPoducts.vue";
import ProductTicker from "../../components/product-page/ProductTicker.vue";

export default {
  data() {
    return {
      product: {},
      popularProducts: [],
      api: this.$config.apiPath,
    };
  },

  async fetch() {
    this.product = await this.$axios.$get(
      `${this.$config.apiPath}/api/products/${this.$route.params.id}?populate=*`
    );
    this.popularProducts = await this.$axios.$get(
      `${this.$config.apiPath}/api/popular-products/1?populate[products][populate][0]=images`
    );
  },

  components: {
    ProductSlider,
    ProductDetails,
    PopularPoducts,
    ProductTicker,
  },

  head() {
    return {
      title: this.product?.data?.attributes.name + ' купить в магазине Коллектив "Фортуна"',
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.product?.data?.attributes.description,
        },
      ],
    };
  },
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
