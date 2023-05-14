<template>
  <div v-if="products.length > 0">
    <Loader v-if="$fetchState.pending" />
    <div
      v-if="!$fetchState.pending"
      class="flex flex-col-reverse lg:flex-row order"
    >
      <OrderForm :orderProducts="products" :total-price="totalPrice" />
      <OrderDetails :products="products" :total-price="totalPrice" />
    </div>
  </div>
  <div v-else>
    <h2>Ваша корзина пуста</h2>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import OrderDetails from "../components/order-page/order-details/OrderDetails.vue";
import OrderForm from "../components/order-page/order-form/OrderForm.vue";
import Input from "../components/UI/Input.vue";

export default {
  head: {
    title: 'Оформление заказа - Коллектив "Фортуна"',
    script: [
      {
        src: "https://www.payanyway.ru/assistant-builder",
        type: "text/javascript",
        async: true,
        defer: true,
      },
    ],
  },
  data() {
    return {
      api: this.$config.apiPath,
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

  methods: {
    ...mapMutations({
      combineProducts: "cart/combineProducts",
    }),
  },

  async fetch() {
    if (this.fetchParams) {
      let data = await this.$axios.$get(
        `${this.$config.apiPath}/api/products?${this.fetchParams}&populate=*`
      );
      this.combineProducts({ cartData: data });
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
