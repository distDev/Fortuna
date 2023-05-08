<template>
  <section class="space-y-[20px] lg:space-y-[25px]" tabindex="0" aria-label="адрес мерроприятия">
    <h2 class="font-bold text-xl lg:text-2xl">Адрес</h2>
    <p class="text-[16px] lg:text-[18px]" tabindex="0">{{ adress }}</p>
    <div class="lg:w-[80%] w-full overflow-hidden">
      <iframe
        :src="adressLink"
        class="w-full h-[230px] lg:h-[430px]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  props: {
    adressLink: String,
    adress: String,
  }
};
</script>

<style lang="scss" scoped></style>
