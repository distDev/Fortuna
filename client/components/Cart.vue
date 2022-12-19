<template>
  <div>
    <div
      class="h-[20px] px-[6px] lg:px-1 flex justify-center items-center text-black cursor-pointer"
      :class="cartValue ? 'bg-violet-500' : 'bg-white'"
      @click="handleShow"
    >
      <p class="text-sm">{{ cartValue }}</p>
    </div>
    <!-- Корзина -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="flex flex-col items-end absolute top-0 right-0 w-full h-[100vh] z-[150]"
      >
        <!-- тело корзины -->
        <div
          class="lg:w-[370px] lg:mt-[103px] lg:mr-[40px] lg: p-[15px] bg-black block z-40"
        >
          <!-- шапка корзины -->
          <div class="flex items-center space-x-[10px]">
            <p class="uppercase text-base font-semibold">
              Корзина: &nbsp {{ cartTotal }}₽
            </p>
            <p class="uppercase text-[#97999B] text-sm font-semibold">
              ({{ cartValue }} позиций)
            </p>
          </div>
          <!-- кнопка оформления -->
          <NuxtLink
            to="/order"
            class="flex items-center justify-center w-full lg:mt-[30px] bg-white text-black text-base font-medium uppercase py-[15px] box-border"
            >перейти к оформлению</NuxtLink
          >
          <!-- продукты -->
          <div class="lg:space-y-[15px] lg:mt-[15px]">
            <div
              v-for="item in products"
              :key="item.variantId"
              class="flex space-x-[15px]"
            >
              <div class="lg:h-[130px] lg:w-[105px]">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="flex flex-col justify-between">
                <div class="flex flex-col space-y-[5px]">
                  <p class="uppercase text-xs font-semibold text-white">
                    {{ item.name }}
                  </p>
                  <p class="uppercase text-xs font-semibold text-white">
                    {{ item.price }} ₽
                  </p>
                  <p class="uppercase text-xs font-semibold text-white">
                    {{ item.size }}
                  </p>
                </div>
                <div class="flex items-center space-x-[10px]">
                  <button class="h-[30px] w-[30px] bg-[#97999B] text-black">
                    -
                  </button>
                  <p class="text-white text-base font-medium">
                    {{ item.countInCart }}
                  </p>
                  <button
                    class="h-[30px] w-[30px] bg-[#97999B] text-black"
                    @click="incrementCount({ variantId: item.variantId })"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- задний фон -->
        <div
          class="absolute left-0 top-0 w-full h-full bg-black opacity-50 z-20"
          @click="handleShow"
        ></div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters({
      cartValue: "cart/getCartValue",
      cartTotal: "cart/getCartTotalPrice",
    }),

    isOpen() {
      return this.$store.state.cart.isOpen;
    },
    products() {
      return this.$store.state.cart.list;
    },
  },

  methods: {
    ...mapMutations({
      handleShow: "cart/handleShowCart",
      incrementCount: "cart/incrementCount",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
