<template>
  <div
    class="flex flex-col justify-center pl-[15px] lg:px-10 lg:items-center pb-[100px]"
  >
    <h2
      class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
    >
      Новые видео
    </h2>
    <div class="w-full">
      <Slider :count="1.2" :lg-grid="2" :lg-count="3" :space="20">
        <VideoItem
          v-for="item in data"
          :key="item.id"
          :img="item.img"
          class="swiper-slide"
        />
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "../Slider.vue";
import VideoItem from "../VideoItem.vue";

export default {
  props: {
    data: Array,
  },
  components: { VideoItem, Slider },
};
</script>

<style scoped>
.swiper-slide {
  height: 276px;
}

@media (max-width: 520px) {
  .swiper-slide {
    height: 220px;
  }
}
</style>
