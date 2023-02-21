<template>
  <div
    class="w-full lg:w-[370px] h-full lg:h-auto lg:mt-[103px] lg:mr-[40px] px-[10px] py-[20px] lg:p-[15px] bg-black block z-40"
  >
    <CartControls />
    <CartProducts />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import CartControls from "./CartControls.vue";
import CartProducts from "./CartProducts.vue";

export default {
  methods: {
    ...mapMutations({
      handleShow: "cart/handleShowCart",
    }),
  },

  props: {
    products: Array,
  },
  components: { CartProducts, CartControls },
};
</script>

<style lang="scss" scoped></style>
