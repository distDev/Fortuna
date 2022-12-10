<template>
  <div class="flex flex-col space-y-[25px] lg:space-y-[30px]">
    <div class="space-y-[20px] lg:space-y-[25px]">
      <h3 class="font-bold text-xl lg:text-2xl">О событии</h3>
      <div>
        <p class="text-base lg:text-lg lg:w-[80%]">
          С другой стороны дальнейшее развитие различных форм деятельности
          влечет за собой процесс внедрения и модернизации дальнейших
          направлений развития. Значимость этих проблем настолько очевидна, что
          новая модель организационной деятельности обеспечивает широкому кругу
          (специалистов) участие в формировании
        </p>
      </div>
    </div>
    <div class="w-full">
      <Slider :count="2.3" :lg-count="4" :h="120" :lg-h="170" :space="30">
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
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "../Slider.vue";

export default { components: { Slider } };
</script>

<style lang="scss" scoped></style>
