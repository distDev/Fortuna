<template>
  <!-- Шапка корзины -->
  <div>
    <div class="flex justify-between">
      <div class="flex items-center space-x-[10px]">
        <p class="uppercase text-base font-semibold">
          {{
            totalPrice
              ? "Корзина: &nbsp" + totalPrice + "₽"
              : "Ваша корзина пуста"
          }}
        </p>
        <p class="uppercase text-grey text-sm font-semibold" v-if="totalPrice">
          ({{ cartValue }} позиций)
        </p>
      </div>
      <div class="burger-menu-close cursor-pointer" @click="handleSwitchShow">
        <font-awesome-icon :icon="['fas', 'xmark']" class="fill-white" />
      </div>
    </div>

    <!-- Кнопка оформления -->
    <button
      class="flex items-center justify-center w-full mt-[30px] bg-white text-main-black text-base font-medium uppercase py-[15px] box-border"
      @click="totalPrice ? placeOrder() : handleSwitchShow()"
    >
      {{ totalPrice ? "перейти к оформлению" : "продолжить покупки" }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      cartValue: "cart/getCartValue",
    }),
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
    totalPrice: String,
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
