<template>
  <div class="flex flex-col-reverse lg:flex-row order">
    <OrderForm />
    <OrderDetails
      v-if="!$fetchState.pending"
      :products="availableProducts"
      :totalPrice="totalPrice"
    />
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
      api: devApi
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
      if (process.browser && this.cartData) {
        let itemsId = this.cartData.data
          .filter((e) => e.attributes.totalCount > 0)
          .map((e) => e.id);

        let filteredItems = this.products.filter((e) => itemsId.includes(e.id));

        return filteredItems;
      }
    },

    // Получение итоговой суммы
    totalPrice() {
      if (process.browser && this.availableProducts) {
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
