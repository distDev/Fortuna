<template>
  <div class="flex flex-row justify-center w-full space-x-[30px]">
    <ProductCard v-for="card in cardsData" :key="card.num" class="basis-1/4" />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      cardsData: [
        {
          num: "1",
        },
        {
          num: "2",
        },
        {
          num: "3",
        },
        {
          num: "4",
        },
      ],
    };
  },
  components: { ProductCard },
};
</script>

<style lang="scss" scoped></style>
