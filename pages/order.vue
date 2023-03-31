<template>
  <div>
    <Loader v-if="$fetchState.pending" />
    <div
      v-if="!$fetchState.pending"
      class="flex flex-col-reverse lg:flex-row order"
    >
      <OrderForm :orderProducts="availableProducts" :total-price="totalPrice" />
      <OrderDetails :products="availableProducts" :total-price="totalPrice" />
    </div>
  </div>
</template>

<script>
import { devApi } from "../assets/api";
import OrderDetails from "../components/order-page/order-details/OrderDetails.vue";
import OrderForm from "../components/order-page/order-form/OrderForm.vue";
import Input from "../components/UI/Input.vue";

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
        let itemsId = this.cartData.data
          .filter((e) => e.attributes.totalCount > 0)
          .map((e) => ({ id: e.id, totalCount: e.attributes.totalCount }));

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

  layout: "order",

  components: { Input, OrderForm, OrderDetails },
};
</script>

<style scoped>
.order {
  font-family: "Roboto", sans-serif;
}
</style>
