<template>
  <div class="flex flex-col lg:items-center justify-center pl-[15px] lg:px-10">
    <h2
      class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
    >
      Популярное
    </h2>
    <ProductCards :data="data" />
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
