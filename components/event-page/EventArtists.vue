<template>
  <div class="flex flex-col lg:space-y-[30px]">
    <div class="space-y-[20px] lg:space-y-[25px]">
      <h3 class="font-bold text-xl lg:text-2xl">Выступают</h3>
      <Slider :count="1.9" :lg-count="4" :h="70" :lg-h="90" :space="25">
        <div
          v-for="{ id, name, image } in artists"
          :key="id"
          class="swiper-slide flex items-center space-x-[12px] h-[70px] lg:h-[90px] p-[6px] lg:p-[7px] rounded-[50px] z-30 relative border-[1px] border-black"
        >
          <div
            class="w-[58px] lg:w-[76px] h-full rounded-[50%] overflow-hidden"
          >
            <img :src="api + image" alt="" class="w-full h-full object-cover" />
          </div>
          <p>{{ name }}</p>
        </div>
      </Slider>
    </div>
  </div>
</template>

<script>
import { devApi } from "../../assets/api";
import Slider from "../Slider.vue";

export default {
  data() {
    return {
      api: devApi
    };
  },
  components: { Slider },
  props: {
    artists: Array,
  },
};
</script>

<style scoped>
.shadow-artist {
  box-shadow: 0px 5px 20px rgba(193, 193, 193, 0.4);
}
.swiper-slide {
  height: 90px;
}

@media (max-width: 520px) {
  .swiper-slide {
    height: 70px;
  }
}
</style>
