<template>
  <div class="w-full">
    <ProductCard v-for="item in data" :key="item.id" :img="item.img" :price="item.price" :title="item.title"
      :large="large" :id="item.id" />
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

<style lang="scss" scoped>

</style>
