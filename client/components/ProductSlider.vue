<template>
  <div class="w-[60%] m-auto lg:h-auto">
    <!-- Главный слайдер -->
    <div v-swiper:mySwiperTop="optionsTop" ref="swiperTop">
      <div class="swiper-wrapper">
        <div
          v-for="i in 6"
          :key="i"
          class="swiper-slide h-[120px] lg:h-[170px]"
        >
          <img
            :src="`https://picsum.photos/400/200?random=${i}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Слайдер с миниатюрами -->
    <div v-swiper:mySwiperBot="optionsBot" ref="swiperThumbs">
      <div class="swiper-wrapper">
        <div v-for="i in 6" :key="i" class="swiper-slide h-[50px] lg:h-[50px]">
          <img
            :src="`https://picsum.photos/400/200?random=${i}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionsTop: {
        loop: false,
        loopedSlides: 4, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      optionsBot: {
        loop: false,
        loopedSlides: 4, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiperOptionTop.swiper;
    },
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  props: {},
};
</script>

<style scoped></style>
