<template>
  <div>
    <div
      v-if="mobile"
      class="px-[15px] lg:px-0 lg:bg-transparent py-[20px] lg:py-0 lg:mt-[23px] flex items-center justify-between cursor-pointer lg:cursor-auto lg:hidden"
    >
      <p class="lg:text-xl font-semibold">Итого:</p>
      <p class="lg:text-xl font-semibold">{{ totalCost }} ₽</p>
    </div>

    <div
      v-else
      class="px-[15px] lg:px-0 bg-[#E6E3F9] lg:bg-transparent py-[20px] lg:py-0 lg:mt-[23px] flex items-center justify-between cursor-pointer lg:cursor-auto"
      @click="isOpen = !isOpen"
    >
      <p class="lg:text-xl font-semibold hidden lg:block">Итого:</p>
      <p class="lg:text-xl lg:font-semibold block lg:hidden">
        {{ OpenStatus }}
      </p>
      <p class="lg:text-xl font-semibold">{{ totalCost }} ₽</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalCost: Number,
    OpenStatus: Boolean,
    mobile: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
