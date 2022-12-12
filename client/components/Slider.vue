<template>
  <div class="w-full lg:h-auto">
    <div v-swiper:mySwiper="options" :class="[height, lgHeight]">
      <div class="swiper-wrapper">
        <slot class=""></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: `h-[${this.h}px]`,
      lgHeight: `lg:h-[${this.lgH}px]`,
      options: {
        slidesPerColumn: this.lgGrid,
        slidesPerView: this.lgCount,
        spaceBetween: this.space,
        loop: false,

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: this.count,
            spaceBetween: 12,

            slidesPerColumn: this.grid,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: this.count,
            spaceBetween: 12,

            slidesPerColumn: this.grid,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: this.count,
            spaceBetween: 12,

            slidesPerColumn: this.grid,
          },
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  props: {
    count: Number,
    lgCount: Number,
    space: Number,
    h: Number,
    lgH: Number,
    grid: Number,
    lgGrid: Number,
  },
};
</script>

<style scoped></style>
