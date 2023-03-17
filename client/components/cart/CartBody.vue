<template>
  <div
    class="w-full lg:w-[370px] h-full lg:h-auto lg:mt-[103px] lg:mr-[40px] px-[10px] py-[20px] lg:p-[15px] bg-black block z-40"
  >
    <div v-if="!$fetchState.pending">
      <CartControls :total-price="totalPrice" />
      <CartProducts :cart-data="cartData" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import CartControls from "./CartControls.vue";
import CartProducts from "./CartProducts.vue";

export default {
  data() {
    return {
      cartData: [],
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

    // Получение id товаров, которые есть в наличии
    availableProducts() {
      let itemsId = this.cartData.data
        .filter((e) => e.attributes.totalCount > 0)
        .map((e) => e.id);

      let filteredItems = this.products.filter((e) => itemsId.includes(e.id));

      return filteredItems;
    },

    // Фильтр доступных товаров из store и получение итоговой суммы
    totalPrice() {
      if (this.availableProducts.length > 1) {
        return Number(
          this.availableProducts
            .map((e) => e.countInCart * e.price)
            .reduce((acc, item) => acc + item)
        );
      }
      if (this.availableProducts.length === 1) {
        return Number(
          this.availableProducts.map((e) => e.price * e.countInCart).join("")
        );
      }

      return 0;
    },
  },

  async fetch() {
    if (this.fetchParams) {
      this.cartData = await this.$axios.$get(
        `http://localhost:1337/api/products?${this.fetchParams}&populate=*`
      );
    } else {
      this.cartData = [];
    }
  },

  methods: {
    checkClick() {
      console.log("Клик");
    },
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
