<template>
  <div>
    <Photoswipe>
      <Slider :count="2.3" :lg-count="4" :h="120" :lg-h="170" :space="30">
        <div
          v-for="i in imageList"
          :key="i.id"
          class="swiper-slide h-[120px] lg:h-[170px]"
        >
          <img
            v-for="(src, index) in imageList"
            :key="index"
            :src="src"
            v-pswp="src"
           
          />
        </div>
      </Slider>
    </Photoswipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        "https://placeimg.com/640/480/any",
        "https://placeimg.com/640/481/any",
        "https://placeimg.com/640/482/any",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
