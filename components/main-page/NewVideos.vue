<template>
  <div
    class="w-full flex flex-col justify-center px-[15px] lg:px-[40px] lg:items-center pb-[100px] lg:max-w-[1440px] lg:m-auto"
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
          :img="item.attributes.image.data.attributes.url"
          :link="item.attributes.link"
          class="swiper-slide"
        />
      </Slider>
      <VideoModal />
    </div>
  </div>
</template>

<script>
import Slider from "../Slider.vue";
import VideoItem from "../video-items/VideoItem.vue";
import VideoModal from "../video-items/VideoModal.vue";

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
