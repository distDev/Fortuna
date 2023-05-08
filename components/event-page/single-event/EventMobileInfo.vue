<template>
  <section class="flex flex-col space-y-[15px] lg:hidden event-info" tabindex="0" aria-label="информация о мерроприятии">
    <div class="flex items-center space-x-[12px]" tabindex="0" aria-label="время начала">
      <font-awesome-icon :icon="['fas', 'clock']" class="fill-grey" />
      <p class="text-base font-medium">{{ formatDate }}</p>
    </div>
    <div class="flex items-center space-x-[12px]" tabindex="0" aria-label="адрес мерроприятия">
      <font-awesome-icon :icon="['fas', 'location-pin']" class="fill-grey" />
      <p class="text-base font-medium">ДК Балашиха</p>
    </div>
  </section>
</template>

<script>
import * as dayjs from "dayjs";

export default {
  computed: {
    formatDate() {
      let format = dayjs(this.date)
        .locale("ru")
        .format("D MMMM, h:mm")
        .replace(",", " в");
      return format;
    },
  },

  props: {
    date: String,
    adress: String,
    place: String,
  },
};
</script>

<style scoped>
.event-info svg {
    color: #C3C3C3
}
</style>
