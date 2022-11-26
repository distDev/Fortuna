<template>
  <div class="w-full overflow-x-scroll lg:overflow-auto pb-[7px]">
    <div
      class="flex flex-row flex-nowrap lg:place-content-center space-x-[14px] w-[200%] lg:w-full lg:grid lg:grid-cols-4 lg:gap-[30px]"
    >
      <ProductCard
        v-for="item in data"
        :key="item.id"
        :img="item.img"
        :price="item.price"
        :title="item.title"
        class=" lg:w-auto"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  components: { ProductCard },
};
</script>

<style lang="scss" scoped></style>
