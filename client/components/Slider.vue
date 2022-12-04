<template>
  <div class="w-full lg:h-auto">
    <div v-swiper:mySwiper="options" :class="[heigth, lgHeight]">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heigth: `h-[${this.h}px]`,
      lgHeight: `lg:h-[${this.lgH}px]`,
      options: {
        slidesPerView: this.count,
        spaceBetween: this.space,
        loop: false,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          // when window width is >= 640px
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  props: {
    count: Number,
    space: Number,
    h: Number,
    lgH: Number,
  },
};
</script>

<style scoped></style>
