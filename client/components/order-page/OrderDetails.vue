<template>
  <div class="lg:w-[43%] lg:pt-[60px]">
    <div class="lg:w-[442px] lg:ml-[50px] flex flex-col-reverse lg:flex-col">
      <div
        class="lg:block space-y-5 px-[15px] py-5 lg:py-0 lg:px-[0] lg:space-y-[25px] border-b-[1px] border-b-[#ECECEC] lg:pb-[30px]"
        :class="openStyles"
      >
        <div v-for="i in 3" :key="i" class="flex justify-between items-center">
          <div class="flex items-center space-x-[10px]">
            <div class="w-[65px] h-[65px] rounded-[7px]">
              <img
                src="~assets/images/hoodie.jpg"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
            <p>Футболка “Фортуна”</p>
          </div>
          <div>
            <p>4249 ₽</p>
          </div>
        </div>
      </div>
      <div
        class="px-[15px] lg:px-0 bg-[#E6E3F9] lg:bg-transparent py-[20px] lg:py-0 lg:mt-[30px] flex items-center justify-between cursor-pointer lg:cursor-auto"
        @click="isOpen = !isOpen"
      >
        <p class="lg:text-xl font-medium hidden lg:block">Итого:</p>
        <p class="lg:text-xl font-medium block lg:hidden">{{ OpenStatus }}</p>
        <p class="lg:text-xl font-medium">9924 ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    openStyles() {
      return this.isOpen === true ? "block" : "hidden";
    },
    OpenStatus() {
      return this.isOpen === true ? "Скрыть заказ" : "Показать заказ";
    },
  },
};
</script>

<style lang="scss" scoped></style>
