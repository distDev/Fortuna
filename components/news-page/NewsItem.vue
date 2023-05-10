<template>
  <NuxtLink
    :to="'/news/' + id"
    class="grid-custom-item h-[260px] bg-slate-600 relative flex items-end"
  >
    <div
      class="h-[120px] lg:h-[220px] w-full absolute bottom-0 z-30 linear-bg"
    ></div>
    <img
      :src="api + poster"
      alt=""
      class="w-full h-full object-cover absolute z-0"
    />
    <div class="absolute top-0 opacity-60 bg-black w-full h-full z-10"></div>
    <div class="grid-custom-item-text z-40 px-[10px] py-[10px] lg:px-5 lg:py-5">
      <h3
        class="text-white text-base lg:text-[28px] leading-6 lg:leading-10 font-bold mb-4 lg:mb-7"
      >
        {{ title.slice(0, 90) + "..." }}
      </h3>
      <p class="text-[#BBBBBB] text-xs lg:text-sm font-medium">
        {{ formatDate }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
import * as dayjs from "dayjs";
import * as locale from "dayjs/locale/ru";
import * as relativeTime  from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)
export default {
  data() {
    return {
      api: this.$config.apiPath,
    };
  },
  computed: {
    formatDate() {
      return dayjs(this.date).locale("ru").fromNow();
    },
  },
  props: {
    date: String,
    title: String,
    poster: String,
    id: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
