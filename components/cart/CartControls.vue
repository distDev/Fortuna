<template>
  <!-- Шапка корзины -->
  <div>
    <div class="flex justify-between items-start">
      <div
        v-if="!pending"
        class="flex xxs:flex-col items-center xxs:items-start space-x-[10px] xxs:space-x-0"
        tabindex="0"
      >
        <p class="uppercase text-base xxs:text-[14px] font-semibold text-white">
          {{ totalSum }}
        </p>
        <p
          class="uppercase text-grey text-sm xxs:text-[12px] font-semibold"
          v-if="totalPrice && totalPrice > 0"
          :aria-label="'товаров в корзине' + cartValue"
        >
          ({{ cartValue }} позиций)
        </p>
      </div>

      <!-- скелетон суммы-->
      <div v-else class="animate-pulse flex w-[200px] space-x-[10px]">
        <div class="h-[20px] w-[60%] bg-[#2E3032]"></div>
        <div class="h-[20px] w-[40%] bg-[#2E3032]"></div>
      </div>

      <!-- кнопка закрытия -->
      <button
        class="burger-menu-close cursor-pointer"
        @click="handleSwitchShow"
        aria-label="закрыть корзину"
      >
        <font-awesome-icon :icon="['fas', 'xmark']" class="fill-white" />
      </button>
    </div>

    <!-- Кнопка оформления -->
    <button
      v-if="!pending"
      class="flex items-center justify-center w-full mt-[30px] bg-white text-main-black text-base xxs:text-sm font-medium uppercase py-[15px] xxs:py-[10px] box-border"
      @click="
        () => (totalPrice && totalPrice > 0 ? placeOrder() : handleSwitchShow())
      "
    >
      {{
        totalPrice && totalPrice > 0
          ? "перейти к оформлению"
          : "продолжить покупки"
      }}
    </button>

    <!-- скелетон кноки -->
    <div v-else class="animate-pulse w-full mt-[30px] h-[54px]">
      <div class="w-full h-full bg-[#2E3032]"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      cartValue: "cart/getCartValue",
    }),

    totalSum() {
      if (!this.totalPrice) {
        return "Ваша корзина пуста";
      }
      if (this.totalPrice > 0) {
        return "Корзина: " + this.totalPrice + "₽";
      }
    },
  },

  methods: {
    ...mapMutations({
      handleSwitchShow: "cart/handleShowCart",
    }),
    placeOrder() {
      this.$router.push({ path: "/order" });
      this.handleSwitchShow();
    },
  },

  props: {
    totalPrice: Number,
    pending: Boolean,
  },
};
</script>

<style scoped>
.burger-menu-close svg {
  width: 20px;
  height: 20px;
  color: white;
}
.burger-menu-close svg:hover {
  color: #9671ff;
}
</style>
