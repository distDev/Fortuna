<template>
  <!-- Шапка корзины -->
  <div>
    <div class="flex justify-between">
      <div v-if="!pending" class="flex items-center space-x-[10px]">
        <p class="uppercase text-base font-semibold">
          {{ totalSum }}
        </p>
        <p
          class="uppercase text-grey text-sm font-semibold"
          v-if="totalPrice && totalPrice > 0"
        >
          ({{ cartValue }} позиций)
        </p>
      </div>

      <!-- скелетон суммы-->
      <div v-else class="animate-pulse flex w-[200px] space-x-[10px]">
        <div class="h-[20px] w-[60%] bg-[#2E3032]"></div>
        <div class="h-[20px] w-[40%] bg-[#2E3032]"></div>
      </div>
      <div class="burger-menu-close cursor-pointer" @click="handleSwitchShow">
        <font-awesome-icon :icon="['fas', 'xmark']" class="fill-white" />
      </div>
    </div>

    <!-- Кнопка оформления -->
    <button
      v-if="!pending"
      class="flex items-center justify-center w-full mt-[30px] bg-white text-main-black text-base font-medium uppercase py-[15px] box-border"
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
