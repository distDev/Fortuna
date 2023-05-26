<template>
  <section
    class="space-y-[20px] lg:space-y-[25px]"
    tabindex="0"
    aria-label="адрес мерроприятия"
  >
    <h2 class="font-bold text-xl lg:text-2xl">Адрес</h2>
    <p class="text-[16px] lg:text-[18px]" tabindex="0">{{ adress }}</p>
    <YandexMap :coordinates="coordinates" />
  </section>
</template>

<script>
import YandexMap from "../../YandexMap.vue";

export default {
  data() {
    return {
      text: "",
    };
  },
  props: {
    coordinates: String,
    adress: String,
  },
  components: { YandexMap },
};
</script>

<style lang="scss" scoped></style>
