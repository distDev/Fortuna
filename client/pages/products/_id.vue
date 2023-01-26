<template>
  <div class="pt-[25px] lg:pt-[60px]">
    <div v-for="{ id, attributes } in product" :key="id"
      class="flex flex-col lg:flex-row w-full px-[15px] lg:px-[40px] lg:space-x-[30px]">
      <ProductSlider class="w-full lg:w-[60%]" :images="attributes.images.data" />
      <ProductDetails :name="attributes.name" :price="attributes.price" :inStock="attributes.inStock"
        :options="attributes.options" :totalCount="attributes.totalCount" :attributes="attributes.attributes"
        :description="attributes.description" :images="attributes.images.data" :id="id" />
    </div>
    <div class="bg-black w-full h-[40px] lg:h-[60px] mt-[80px] lg:mt-[130px]"></div>
  </div>
</template>

<script>
import ProductSlider from "@/components/ProductSlider.vue";
import ProductDetails from "@/components/product-page/ProductDetails.vue";
import { realProducts } from "../../assets/data";

export default {
  data() {
    return {
      data: realProducts,
    };
  },
  computed: {
    product() {
      return realProducts.filter((e) => e.id === this.$route.params.id)
    }
  },

  components: { ProductSlider, ProductDetails },
};
</script>

<style lang="scss" scoped>

</style>
