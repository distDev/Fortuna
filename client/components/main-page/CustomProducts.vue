<template>
  <div>
    <div
      class="flex flex-col justify-center pl-[15px] lg:items-center lg:px-10 w-full"
    >
      <h2
        class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
      >
        Футболки
      </h2>
      <ProductCards :data="data" />
    </div>
    <div class="bg-violet-500 w-full h-[40px] lg:h-[45px] mt-[50px] lg:mt-[80px]"></div>
  </div>
</template>

<script>
import ProductCards from "../ProductCards.vue";

export default {
  components: { ProductCards },
  props: {
    data: Object,
    
  },
};
</script>

<style lang="scss" scoped></style>
