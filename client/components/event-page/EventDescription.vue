<template>
  <div class="flex flex-col space-y-[25px] lg:space-y-[30px]">
    <div class="space-y-[20px] lg:space-y-[25px]">
      <h3 class="font-bold text-xl lg:text-2xl">О событии</h3>
      <div>
        <p class="text-base lg:text-lg lg:w-[80%]">
          {{ eventDescription }}
        </p>
        <p
          class="text-sky-600 text-base lg:text-lg mt-[10px] cursor-pointer"
          @click="showDescription = !showDescription"
        >
          {{ descriptionStatus }}
        </p>
      </div>
    </div>
    <div class="w-full">
      <Photoswipe>
        <Slider :count="2.3" :lg-count="4" :space="30">
          <div
            v-for="i in images.data"
            :key="i.id"
            class="swiper-slide h-[120px] lg:h-[170px]"
          >
            <img
              :src="i.attributes.url"
              v-pswp="i.attributes.url"
              class="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </Photoswipe>
    </div>
  </div>
</template>

<script>
import Slider from "../Slider.vue";

export default {
  data() {
    return {
      showDescription: false,
    };
  },
  components: { Slider },
  props: { images: Array, description: String },
  computed: {
    eventDescription() {
      if (this.showDescription) {
        return this.description;
      } else {
        return this.description.slice(0, 250) + "...";
      }
    },
    descriptionStatus() {
      return this.showDescription ? "Скрыть описание" : "Читать далее";
    },
  },
};
</script>

<style scoped>
.swiper-slide {
  height: 170px;
}

@media (max-width: 520px) {
  .swiper-slide {
    height: 120px;
  }
}
</style>
