<template>
  <div class="w-full lg:h-auto">
    <div v-swiper:mySwiper="options">
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
      options: {
        slidesPerColumn: this.lgGrid,
        slidesPerView: this.lgCount,
        spaceBetween: this.space,
        loop: false,

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: this.xsCount,
            spaceBetween: 12,
            slidesPerColumn: this.grid,
          },
          375: {
            slidesPerView: this.xsCount,
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
    xsCount: Number,
    space: Number,
    h: Number,
    lgH: Number,
    grid: Number,
    lgGrid: Number,
  },
};
</script>

<style scoped></style>
