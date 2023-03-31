<template>
  <div
    class="w-full lg:w-[370px] h-full lg:h-auto lg:mt-[103px] lg:mr-[40px] px-[10px] py-[20px] lg:p-[15px] bg-black block z-40"
  >
    <div>
      <CartControls :total-price="totalPrice" :pending="$fetchState.pending" />
      <CartProducts
        :products="availableProducts"
        :pending="$fetchState.pending"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { devApi } from "../../assets/api";
import CartControls from "./CartControls.vue";
import CartProducts from "./CartProducts.vue";

export default {
  data() {
    return {
      cartData: [],
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

    // Получение товаров, которые есть в наличии
    availableProducts() {
      if (!this.$fetchState.pending && this.cartData.data) {
        // получение id доступных товаров
        let itemsId = this.cartData.data.map((e) => ({
          id: e.id,
          totalCount: e.attributes.totalCount,
        }));

        // фильтрация по id товаров из vuex store
        let filteredItems = this.products.filter((e) =>
          itemsId.some((item) => item.id === e.id)
        );

        // добавление totalCount товарам из vuex store
        let mergedProduct = filteredItems.map((e) => ({
          ...e,
          totalCount: itemsId.find((item) => item.id === e.id).totalCount,
        }));

        return mergedProduct;
      }
    },

    // Итоговая сумма заказа
    totalPrice() {
      if (
        !this.$fetchState.pending &&
        this.availableProducts &&
        Array.isArray(this.availableProducts)
      ) {
        if (this.availableProducts.length > 1) {
          return Number(
            this.availableProducts
              .map((e) =>
                e.countInCart > e.totalCount
                  ? e.totalCount * e.price
                  : e.countInCart * e.price
              )
              .reduce((acc, item) => acc + item)
          );
        }
        if (this.availableProducts.length === 1) {
          return Number(
            this.availableProducts
              .map((e) =>
                e.countInCart > e.totalCount
                  ? e.totalCount * e.price
                  : e.countInCart * e.price
              )
              .join("")
          );
        } else {
          return 0;
        }
      }
    },
  },

  async fetch() {
    if (this.fetchParams) {
      this.cartData = await this.$axios.$get(
        `${devApi}/api/products?${this.fetchParams}&populate=*`
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

  props: {},
  components: { CartProducts, CartControls },
};
</script>

<style lang="scss" scoped></style>
