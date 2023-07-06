<template>
  <div>
    <p
      class="text-gray-500 uppercase font-bold text-[10px] lg:text-sm mb-[7px] lg:mb-[15px]"
    >
      {{ formatDate }}
    </p>
    <NuxtLink
      :to="'news/' + id"
      class="text-white uppercase font-bold text-base xxs:text-[14px] lg:text-[28px] hover:text-primary"
      >{{ title.slice(0, 55) + "..." }}</NuxtLink
    >
  </div>
</template>

<script>
import * as dayjs from "dayjs";
import * as locale from "dayjs/locale/ru";
import * as relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default {
  computed: {
    formatDate() {
      return dayjs(this.date).locale("ru").fromNow();
    },
  },

  props: {
    id: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
