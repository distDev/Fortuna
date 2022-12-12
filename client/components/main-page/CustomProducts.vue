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
      <div class="flex flex-row justify-center space-x-[30px] w-full">
        <ProductCard
          v-for="item in data"
          :key="item.id"
          :img="item.img"
          :price="item.price"
          :title="item.title"
          :large="false"
          class="basis-1/2 lg:basis-1/4"
        />
      </div>
    </div>
    <div
      class="bg-violet-500 w-full h-[40px] lg:h-[45px] mt-[50px] lg:mt-[80px]"
    ></div>
  </div>
</template>

<script>
import ProductCard from "../ProductCard.vue";
import Slider from "../Slider.vue";


export default {
  components: {  Slider, ProductCard },
  props: {
    data: Array,
  },
};
</script>

<style  scoped>

</style>
