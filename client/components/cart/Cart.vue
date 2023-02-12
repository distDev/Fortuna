<template>
  <div>
    <div
      class="h-[20px] px-[6px] lg:px-1 flex justify-center items-center text-black cursor-pointer"
      :class="cartValue ? 'bg-primary' : 'bg-white'"
      @click="handleShow"
    >
      <p class="text-sm" :class="countStyle">{{ cartValue }}</p>
    </div>

    <!-- Корзина -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="flex flex-col items-end absolute top-0 right-0 w-full h-[100vh] z-[150]"
      >
        <CartBody />
        <div
          class="absolute left-0 top-0 w-full h-full bg-black opacity-50 z-20"
          @click="handleShow"
        ></div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import CartBody from "./CartBody.vue";

export default {
  computed: {
    isOpen() {
      return this.$store.state.cart.isOpen;
    },
    countStyle() {
      return this.cartValue > 0 ? "text-white" : "text-black";
    },
    ...mapGetters({
      cartValue: "cart/getCartValue",
    }),
  },
  methods: {
    ...mapMutations({
      handleShow: "cart/handleShowCart",
      incrementCount: "cart/incrementCount",
      decrementCount: "cart/decrementCount",
      removeFromCart: "cart/removeFromCart",
    }),
  },
  components: { CartBody },
};
</script>

<style lang="scss" scoped></style>
