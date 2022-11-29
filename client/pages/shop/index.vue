<template>
  <div>
    <div
      class="bg-[#222222] h-[270px] flex lg:items-end lg:justify-center lg:p-[40px] relative"
    >
      <div
        class="absolute top-[80px] gradient-custom lg:h-[45px] lg:w-[60%]"
      ></div>
      <h3 class="uppercase text-violet-500 text-2xl lg:text-[42px] font-bold">
        products
      </h3>
    </div>
    <div class="mt-[25px] lg:mt-[60px] mx-[15px] lg:mx-[40px]">
      <ProductCards :data="data" :large="true" />
    </div>
  </div>
</template>

<script>
import { productsData } from "../../assets/data";
import ProductCards from "../../components/ProductCards.vue";
export default {
  data() {
    return {
      data: productsData,
    };
  },
  components: { ProductCards },
};
</script>

<style scoped>
.gradient-custom {
  background: linear-gradient(
    269.93deg,
    #9671ff 27.58%,
    #9671ff 48.51%,
    #00a3ff 89.4%,
    #005be3 89.4%
  );
  filter: blur(106.5px);
  transform: rotate(169.72deg);
}
</style>
