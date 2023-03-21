<template>
  <div
    class="px-[15px] lg:px-0 bg-[#E6E3F9] lg:bg-transparent py-[20px] lg:py-0 lg:mt-[23px] flex items-center justify-between cursor-pointer lg:cursor-auto"
    @click="$emit('is-open')"
  >
    <p class="lg:text-xl font-semibold hidden lg:block">Итого:</p>
    <p class="lg:text-xl lg:font-semibold block lg:hidden">
      {{ OpenStatus }}
    </p>
    <p class="lg:text-xl font-semibold">{{ totalCost }} ₽</p>
  </div>
</template>

<script>
export default {
  props: {
    totalCost: Number,
    OpenStatus: String,
  },
};
</script>

<style lang="scss" scoped></style>
