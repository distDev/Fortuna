<template>
  <div class="lg:w-[43%] lg:pt-[60px]">
    <div class="lg:w-[442px] lg:ml-[50px] flex flex-col-reverse lg:flex-col">
      <div
        class="lg:block space-y-5 px-[15px] py-5 lg:py-0 lg:px-[0] lg:space-y-[25px] border-b-[1px] border-b-[#ECECEC] lg:pb-[30px]"
        :class="openStyles"
      >
        <div
          v-for="i in products"
          :key="i.variantId"
          class="flex justify-between items-center"
        >
          <div class="flex items-center space-x-[10px]">
            <div
              class="w-[65px] h-[65px] border-[1px] border-[#D6D0E7] rounded-[7px] overflow-hidden"
            >
              <img :src="i.image" alt="" class="h-full w-full object-cover" />
            </div>
            <p>{{ i.name }}</p>
          </div>
          <div>
            <p>{{ i.price }} ₽</p>
          </div>
        </div>
      </div>
      <div
        class="px-[15px] lg:px-0 bg-[#E6E3F9] lg:bg-transparent py-[20px] lg:py-0 lg:mt-[30px] flex items-center justify-between cursor-pointer lg:cursor-auto"
        @click="isOpen = !isOpen"
      >
        <p class="lg:text-xl font-semibold hidden lg:block">Итого:</p>
        <p class="lg:text-xl lg:font-semibold block lg:hidden">{{ OpenStatus }}</p>
        <p class="lg:text-xl font-semibold">{{ orderTotal }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      orderTotal: "cart/getCartTotalPrice",
    }),
    products() {
      return this.$store.state.cart.list;
    },
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
