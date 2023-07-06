<template>
  <div>
    <div
      class="max-w-[1440px] m-auto flex flex-col justify-center px-[15px] xs:px-[15px] lg:items-center lg:px-10 w-full"
    >
      <h2
        class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
      >
        {{ title }}
      </h2>
      <div
        class="flex flex-row xxs:flex-col xs:flex-col justify-center space-x-[15px] xs:space-x-0 xs:space-y-[20px] xxs:space-x-0 xxs:space-y-[20px] w-full"
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
          :totalCount="item.attributes.totalCount"
          :xxsH="true"
          :xsH="true"
          class="basis-1/2 lg:basis-1/4 xs:basis-0 xxs:basis-0"
        />
      </div>
    </div>
    <div
      class="bg-primary w-full xxs:py-[10px] py-[16px] mt-[50px] lg:mt-[80px] overflow-hidden relative"
    >
      <div class="flex">
        <div
          v-for="i in 10"
          :key="i"
          class="flex items-center xxs:text-[12px] text-sm lg:text-base font-semibold lg:font-bold text-white uppercase whitespace-nowrap shrink-0 px-[20px] ticker-item"
        >
          {{ sliderTitle }}
          <font-awesome-icon
            :icon="['fas', 'face-smile']"
            class="fill-white h-[12px] xxs:h-[10px] lg:h-[14px] w-[18px] xxs:w-[16px] lg:w-[20px]"
          />
        </div>
      </div>
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
    sliderTitle: String,
  },
};
</script>

<style scoped>
.ticker-item {
  animation: ticker 5s linear infinite;
}
.ticker-item svg {
  height: 23px;
  width: 25px;
  margin-left: 40px;
}

@keyframes ticker {
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
