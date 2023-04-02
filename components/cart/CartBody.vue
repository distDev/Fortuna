<template>
  <div
    class="w-full lg:w-[370px] h-full lg:h-auto lg:mt-[103px] lg:mr-[40px] px-[10px] py-[20px] lg:p-[15px] bg-black block z-40"
  >
    <div>
      <CartControls :total-price="totalPrice" :pending="$fetchState.pending" />
      <CartProducts :products="products" :pending="$fetchState.pending" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { devApi } from "../../assets/api";
import CartControls from "./CartControls.vue";
import CartProducts from "./CartProducts.vue";

export default {
  data() {
    return {
      api: devApi,
    };
  },

  computed: {
    products() {
      return this.$store.state.cart.list;
    },
    fetchParams() {
      if (process.browser && this.products) {
        return this.products
          .map((e, i) => `filters[id][$in][${i}]=${e.id}`)
          .join("&");
      }
    },
    ...mapGetters({
      totalPrice: "cart/getCartTotalPrice",
    }),
  },

  async fetch() {
    if (this.fetchParams) {
      let data = await this.$axios.$get(
        `${devApi}/api/products?${this.fetchParams}&populate=*`
      );

      this.combineProducts({ cartData: data });
    }
  },

  methods: {
    checkClick() {
      console.log("Клик");
    },
    ...mapMutations({
      handleShow: "cart/handleShowCart",
      combineProducts: "cart/combineProducts",
    }),
  },

  props: {},

  components: { CartProducts, CartControls },
};
</script>

<style lang="scss" scoped></style>
