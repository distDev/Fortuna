<template>
  <div
    class="w-full grid grid-cols-2 lg:grid-cols-3 gap-x-[14px] lg:gap-x-[30px] gap-y-[30px] lg:gap-y-[40px]"
  >
    <ProductCard
      v-for="item in data"
      :key="item.id"
      :img="item.img"
      :price="item.price"
      :title="item.title"
      :large="large"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  props: {
    data: Array,
    large: Boolean,
  },

  components: { ProductCard },
};
</script>

<style lang="scss" scoped></style>
