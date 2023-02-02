<template>
  <div class="pt-[25px] lg:pt-[60px]">
    <div v-for="{ id, attributes } in product" :key="id"
      class="flex flex-col lg:flex-row w-full px-[15px] lg:px-[40px] lg:space-x-[30px]">
      <ProductSlider class="w-full lg:w-[60%]" :images="attributes.images.data" />
      <ProductDetails :name="attributes.name" :price="attributes.price" :inStock="attributes.inStock"
        :totalCount="attributes.totalCount" :attributes="attributes.attributes" :description="attributes.description"
        :images="attributes.images.data" :id="id" :size="attributes.size" />
    </div>
    <div class="bg-black w-full h-[40px] lg:h-[60px] mt-[80px] lg:mt-[130px] mb-[50px] lg:mb-[80px]"></div>
    <PopularPoducts :data="popularProducts" title="может понравиться"/>
  </div>
</template>

<script>
import ProductSlider from "@/components/ProductSlider.vue";
import ProductDetails from "@/components/product-page/ProductDetails.vue";
import { productsData } from '../../assets/data'
import { realProducts } from "../../assets/data";
import PopularPoducts from "../../components/PopularPoducts.vue";

export default {
  data() {
    return {
      productsData,
      data: realProducts,
    };
  },
  computed: {
    product() {
      return realProducts.filter((e) => e.id === this.$route.params.id)
    },
    popularProducts() {
      return this.productsData.slice(0, 4);
    },
  },

  components: { ProductSlider, ProductDetails, PopularPoducts },
};
</script>

<style lang="scss" scoped>

</style>
