<template>
  <div class="w-full">
    <ProductCard
      v-for="item in data"
      :key="item.id"
      :id="item.id"
      :name="item.attributes.name"
      :price="item.attributes.price"
      :inStock="item.attributes.inStock"
      :newIn="item.attributes.new"
      :images="item.attributes.images.data"
      :totalCount="item.attributes.totalCount"
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
  computed: {
    imgData() {
      return this.data.map((e) => e.attributes.images.data).slice(0, 2);
    },
  },

  components: { ProductCard },
};
</script>

<style lang="scss" scoped></style>
