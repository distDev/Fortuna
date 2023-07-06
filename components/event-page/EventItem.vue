<template>
  <NuxtLink :to="'/events/' + id" class="space-y-[15px]">
    <div class="flex items-end relative h-[230px] xxs:h-[190px] xs:h-[190px] lg:h-[250px]">
      <div class="flex flex-row space-x-[5px] z-30 p-[10px] lg:p-[15px]">
        <div
          class="bg-black rounded-[40px] uppercase text-white text-[10px] lg:text-xs font-medium py-[7px] px-[10px]"
        >
          {{ Number(price) > 0 ? price + " ₽" : "Бесплатно" }}
        </div>
        <div
          v-if="type"
          class="bg-black rounded-[40px] uppercase text-white text-[10px] lg:text-xs font-medium py-[7px] px-[10px]"
        >
          {{ type }}
        </div>
        <div
          v-if="ageRestriction"
          class="bg-black rounded-[40px] uppercase text-white text-[10px] lg:text-xs font-medium py-[7px] px-[10px]"
        >
          {{ ageRestriction + "+" }}
        </div>
      </div>
      <div class="absolute top-0 w-full h-full bg-black opacity-50 z-20"></div>
      <img
        :src="api + poster"
        alt="event"
        class="absolute w-full h-full top-0 object-cover z-10"
      />
    </div>
    <div class="space-y-[5px] lg:space-y-[7px]">
      <h3 class="uppercase text-base xxs:text-sm xs:text-sm font-bold text-main-black">{{ title }}</h3>
      <p class="uppercase text-xs xxs:text-[12px] xs:text-[12px] text-grey">{{ formatDate }} * {{ adress }}</p>
    </div>
  </NuxtLink>
</template>

<script>
import * as dayjs from "dayjs";

export default {
  data() {
    return {
      api: this.$config.apiPath,
    };
  },
  computed: {
    formatDate() {
      return dayjs(this.date).locale("ru").format("D MMMM");
    },
  },
  props: {
    title: String,
    date: String,
    adress: String,
    price: String,
    poster: String,
    type: String,
    id: Number,
    ageRestriction: Number,
  },

};
</script>

<style lang="scss" scoped></style>
