<template>
  <div class="flex flex-col lg:items-center justify-center pl-[15px] lg:px-10">
    <h2
      class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
    >
      Популярное
    </h2>
    <div class="w-full">
      <Slider :count="2" :lgCount="4" :space="30" class="w-full">
        <ProductCard
          v-for="item in data"
          :key="item.id"
          :img="item.img"
          :price="item.price"
          :title="item.title"
          :large="false"
          class="swiper-slide"
        />
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/Slider.vue";
import ProductCard from "../ProductCard.vue";
export default {
  components: { Slider, ProductCard },
  props: {
    data: Array,
  },
};
</script>

<style scoped>
.swiper-slide {
  min-height: 478px;
}

@media (max-width: 520px) {
  .swiper-slide {
    min-height: 265px;
  }
}
</style>
