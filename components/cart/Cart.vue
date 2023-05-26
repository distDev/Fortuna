<template>
  <div>
    <button
      class="h-[20px] px-[6px] lg:px-1 flex justify-center items-center text-main-black cursor-pointer"
      :class="cartValue ? 'bg-primary' : 'bg-white'"
      :aria-label="'Корзина:' + cartValue + 'товаров добавлено'"
      aria-haspopup="true"
      @click="handleShow"
    >
      <p class="text-sm" :class="countStyle">{{ cartValue }}</p>
    </button>

    <!-- Корзина -->
    <Teleport to="body">
      <Transition name="cart">
        <div
          v-if="isOpen"
          :aria-expanded="isOpen ? 'true' : 'false'"
          class="flex flex-col items-end absolute top-0 right-0 w-[90%] lg:w-auto h-[100vh] lg:h-auto z-[150]"
        >
          <CartBody :isOpen="isOpen"/>
        </div>
      </Transition>
      <div
        v-if="isOpen"
        @click="handleShow"
        class="absolute left-0 top-0 w-full h-[100vh] bg-black opacity-50 z-20"
      ></div>
    </Teleport>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import CartBody from "./CartBody.vue";

export default {
  data() {
    return {
      pcView: false,
    };
  },

  computed: {
    isOpen() {
      return this.$store.state.cart.isOpen;
    },
    countStyle() {
      return this.cartValue > 0 ? "text-white" : "text-main-black";
    },
    ...mapGetters({
      cartValue: "cart/getCartValue",
    }),
  },

  methods: {
    ...mapMutations({
      handleShow: "cart/handleShowCart",
      setItems: "cart/setItems",
    }),
  },

  watch: {
    isOpen: function () {
      if (!this.pcView) {
        if (this.isOpen) {
          document.documentElement.style.overflow = "hidden";
          return;
        }

        document.documentElement.style.overflow = "auto";
      }
    },
  },

  mounted() {
    if (window.innerWidth > 763) {
      this.pcView = true;
    } else {
      this.pcView = false;
    }
    if (JSON.parse(localStorage.getItem("cart"))) {
      this.setItems(JSON.parse(localStorage.getItem("cart")));
    } else {
      this.setItems([]);
    }
  },
  components: { CartBody },
};
</script>

<style scoped>
.cart-enter-active,
.cart-leave-active {
  transition: all 0.3s ease;
}
.cart-enter,
.cart-leave-to {
  transform: translateX(100%);
}
</style>
