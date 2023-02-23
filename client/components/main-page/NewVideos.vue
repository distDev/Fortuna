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
      <Slider
        :count="1.2"
        :xs-count="1.1"
        :lg-grid="2"
        :lg-count="3"
        :space="20"
      >
        <VideoItem
          v-for="item in data"
          :key="item.id"
          :img="item.img"
          :link="item.link"
          class="swiper-slide"
        />
      </Slider>
      <VideoModal link="https://www.youtube.com/embed/ZQFQfjtDE6k" />
    </div>
  </div>
</template>

<script>
import Slider from "../Slider.vue";
import VideoItem from "../VideoItem.vue";
import VideoModal from "../VideoModal.vue";

export default {
  props: {
    data: Array,
  },
  components: { VideoItem, Slider, VideoModal },
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

@media (max-width: 375px) {
  .swiper-slide {
    height: 190px;
  }
}
</style>
