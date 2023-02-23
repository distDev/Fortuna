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
    <div
      class="flex items-center justify-between lg:px-[130px] text-white bg-black w-full h-[40px] lg:h-[60px] mt-[80px] lg:mt-[130px] mb-[50px] lg:mb-[80px] overflow-hidden"
    >
      <p class="text-base xs:text-sm font-semibold xs:font-medium uppercase">
        📦 бесплатная доставка от 5 000 ₽
      </p>
      <p class="text-base xs:text-sm font-semibold xs:font-medium uppercase">
        🔒 безопасная оплата
      </p>
      <p class="text-base xs:text-sm font-semibold xs:font-medium uppercase">
        🚀 быстрая доставка
      </p>
    </div>
    <PopularPoducts :data="popularProducts" title="может понравиться" />
  </div>
</template>

<script>
import ProductSlider from "@/components/ProductSlider.vue";
import ProductDetails from "@/components/product-page/ProductDetails.vue";
import { realProducts } from "../../assets/data";
import PopularPoducts from "../../components/PopularPoducts.vue";

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

  components: { ProductSlider, ProductDetails, PopularPoducts },
};
</script>

<style lang="scss" scoped></style>
