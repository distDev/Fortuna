<template>
  <!-- Шапка корзины -->
  <div>
    <div class="flex items-center space-x-[10px]">
      <p class="uppercase text-base font-semibold">
        {{
          cartTotal ? "Корзина: &nbsp" + cartTotal + "₽" : "Ваша корзина пуста"
        }}
      </p>
      <p
        class="uppercase text-[#97999B] text-sm font-semibold"
        v-if="cartTotal"
      >
        ({{ cartValue }} позиций)
      </p>
    </div>

    <!-- Кнопка оформления -->
    <button
      class="flex items-center justify-center w-full mt-[30px] bg-white text-black text-base font-medium uppercase py-[15px] box-border"
      @click="cartTotal ? placeOrder() : handleShow()"
    >
      {{ cartTotal ? "перейти к оформлению" : "продолжить покупки" }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      cartValue: "cart/getCartValue",
      cartTotal: "cart/getCartTotalPrice",
    }),
  },
  methods: {
    ...mapMutations({
      handleShow: "cart/handleShowCart",
    }),
    placeOrder() {
      this.$router.push({ path: "/order" });
      this.handleShow();
    },
  },
};
</script>

<style lang="scss" scoped></style>
