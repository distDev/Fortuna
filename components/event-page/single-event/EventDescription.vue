<template>
  <section class="flex flex-col space-y-[25px] lg:space-y-[30px]">
    <div
      class="space-y-[20px] lg:space-y-[25px]"
      tabindex="0"
      aria-label="информация о мерроприятии"
    >
      <h3 class="font-bold text-xl lg:text-2xl">О событии</h3>
      <div>
        <p class="text-base lg:text-lg lg:w-[80%]" tabindex="0" >
          {{ eventDescription }}
        </p>
        <a
          class="text-sky-600 text-base lg:text-lg mt-[10px] cursor-pointer"
          tabindex="0"
          @click="showDescription = !showDescription"
        >
          {{ descriptionStatus }}
        </a>
      </div>
    </div>
    <div class="w-full" tabindex="0" aria-label="фотографии мерроприятия">
      <Photoswipe>
        <Slider :count="2.3" :xs-count="2" :lg-count="4" :space="30">
          <div
            v-for="i in images"
            :key="i.id"
            class="swiper-slide h-[120px] lg:h-[170px]"
          >
            <img
              :src="api + i.attributes.formats.small.url"
              v-pswp="api + i.attributes.url"
              class="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </Photoswipe>
    </div>
  </section>
</template>

<script>
import { devApi } from "@/assets/api";
import Slider from "../../Slider.vue";

export default {
  data() {
    return {
      showDescription: false,
      api: devApi,
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
