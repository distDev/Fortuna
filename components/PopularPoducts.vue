<template>
  <div
    v-if="data.length > 0"
    class="flex flex-col lg:items-center justify-center pl-[15px] lg:px-10"
  >
    <h2
      class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
    >
      {{ title }}
    </h2>
    <div class="w-full">
      <Slider
        :count="2"
        :xs-count="1.4"
        :lgCount="productValue"
        :space="30"
        class="w-full flex justify-center"
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
          class="swiper-slide"
        />
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import ProductCard from "./ProductCard.vue";
export default {
  data() {
    return {
      value: 3,
    };
  },
  computed: {
    productValue() {
      let currentValue = this.data.length;
      if (currentValue > 3) {
        return 4;
      } else {
        return currentValue;
      }
    },
  },
  components: { Slider, ProductCard },
  props: {
    data: Array,
    title: String,
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
