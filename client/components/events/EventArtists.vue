<template>
  <div class="flex flex-col lg:space-y-[30px]">
    <div class="space-y-[20px] lg:space-y-[25px]">
      <h3 class="font-bold text-xl lg:text-2xl">Выступают</h3>
      <Slider :count="1.9" :lg-count="4" :h="70" :lg-h="90" :space="25">
        <div
          v-for="n in 2"
          :key="n"
          class="swiper-slide flex items-center space-x-[12px] h-[70px] lg:h-[90px] p-[6px] lg:p-[7px] rounded-[50px] z-30 relative border-[1px] border-black"
        >
          <div
            class="w-[58px] lg:w-[76px] h-full rounded-[50%] overflow-hidden"
          >
            <img
              src="https://picsum.photos/400/200?random=4"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <p>Фортуна</p>
        </div>
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "../Slider.vue";

export default {
  data() {
    return {
      artistData: [
        {
          img: "https://picsum.photos/400/200?random=4",
          name: "Фортуна",
        },
        {
          img: "https://picsum.photos/400/200?random=2",
          name: "Руки Ввверх",
        },
      ],
    };
  },
  components: { Slider },
};
</script>

<style scoped>
.shadow-artist {
  box-shadow: 0px 5px 20px rgba(193, 193, 193, 0.4);
}
</style>
