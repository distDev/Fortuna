<template>
  <Photoswipe>
    <div class="w-full lg:space-x-[10px] flex lg:h-auto">
      <!-- Слайдер с миниатюрами -->
      <div
        v-swiper:mySwiperBot="optionsBot"
        ref="swiperThumbs"
        class="w-[10%] hidden lg:block"
      >
        <div class="swiper-wrapper">
          <div
            v-for="i in images"
            :key="i.id"
            class="swiper-slide h-[50px] lg:h-[50px]"
          >
            <img :src="i.attributes.url" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Главный слайдер -->
      <div
        v-swiper:mySwiperTop="optionsTop"
        ref="swiperTop"
        class="w-full lg:w-[90%] h-[390px] xs:h-[320px] lg:h-[670px]"
      >
        <div class="swiper-wrapper">
          <div
            v-for="i in images"
            :key="i.id"
            class="swiper-slide h-[120px] lg:h-[170px]"
          >
            <img
              :key="i.id"
              :src="i.attributes.url"
              v-pswp="i.attributes.url"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div></div
  ></Photoswipe>
</template>

<script>
export default {
  data() {
    return {
      optionsTop: {
        spaceBetween: 10,
        effect: "slide",
        breakpoints: {},
      },
      optionsBot: {
        spaceBetween: 10,
        centeredSlides: true,
        watchSlidesProgress: true,
        slidesPerView: 7,
        slideToClickedSlide: true,
        virtualTranslate: true,
        direction: "vertical",
        slideActiveClass: "slide-active",
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
  props: {
    images: Array,
  },
};
</script>

<style scoped>
.slide-active {
  box-shadow: 0px 2.5px 0px #8b5cf6;
}
</style>
