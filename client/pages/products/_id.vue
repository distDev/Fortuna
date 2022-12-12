<template>
  <div class="pt-[25px] lg:pt-[60px]">
    <div
      class="flex flex-col lg:flex-row w-full px-[15px] lg:px-[40px] lg:space-x-[30px]"
    >
      <ProductSlider class="w-full lg:w-[60%]" />
      <ProductDetails />
    </div>
    <div
      class="bg-black w-full h-[40px] lg:h-[60px] mt-[80px] lg:mt-[130px]"
    ></div>
  </div>
</template>

<script>
import ProductSlider from "@/components/ProductSlider.vue";
import ProductDetails from "@/components/product-page/ProductDetails.vue";
export default {
  components: { ProductSlider, ProductDetails },
};
</script>

<style lang="scss" scoped></style>
