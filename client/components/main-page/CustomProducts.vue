<template>
  <div>
    <div
      class="flex flex-col justify-center pl-[15px] xs:pr-[15px] lg:items-center lg:px-10 w-full"
    >
      <h2
        class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
      >
        {{ title }}
      </h2>
      <div
        class="flex flex-row xs:flex-col justify-center space-x-[30px] xs:space-x-0 xs:space-y-[20px] w-full"
      >
        <ProductCard
          v-for="item in data"
          :key="item.id"
          :id="item.id"
          :name="item.attributes.name"
          :price="item.attributes.price"
          :inStock="item.attributes.inStock"
          :newIn="item.attributes.new"
          :images="item.attributes.images.data"
          class="basis-1/2 lg:basis-1/4 xs:basis-0"
        />
      </div>
    </div>
    <div class="bg-primary w-full h-[40px] lg:h-[45px] mt-[50px] lg:mt-[80px]">
      <client-only placeholder="loading..."> </client-only>
    </div>
  </div>
</template>

<script>
import ProductCard from "../ProductCard.vue";
import Slider from "../Slider.vue";

export default {
  components: { Slider, ProductCard },
  props: {
    data: Array,
    title: String,
  },
};
</script>

<style scoped></style>
