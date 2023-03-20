<template>
  <div class="lg:w-[43%] lg:pt-[60px]">
    <div class="lg:w-[442px] lg:ml-[50px] flex flex-col-reverse lg:flex-col">
      <Transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
      >
        <div v-if="!pcView ? isOpen : true" class="w-full lg:block">
          <OrderDetailsProducts :products="products" />
          <OrderDetailsShipping
            :cart-value="6"
            :order-total="totalCost"
            :shipping-cost="shippingCost"
          />
          <OrderDetailsTotal
            :open-status="OpenStatus"
            :total-cost="totalCost"
            :mobile="true"
          />
        </div>
      </Transition>
      <OrderDetailsTotal :total-cost="totalCost" />
    </div>
  </div>
</template>

<script>
import OrderDetailsProducts from "./OrderDetailsProducts.vue";
import OrderDetailsShipping from "./OrderDetailsShipping.vue";
import OrderDetailsTotal from "./OrderDetailsTotal.vue";

export default {
  data() {
    return {
      isOpen: false,
      pcView: false,
    };
  },

  computed: {
    openStyles() {
      return this.isOpen === true ? "block" : "hidden";
    },

    OpenStatus() {
      return this.isOpen === true ? "Скрыть заказ" : "Показать заказ";
    },

    // итоговая цена с доставкой
    totalCost() {
      if (typeof this.shippingCost === "number") {
        return this.totalPrice + this.shippingCost;
      }
      return this.totalPrice;
    },

    shippingCost() {
      if (this.totalPrice > 5000) {
        return "Бесплатно";
      }
      if (!this.$store.state.cart.shippingInfo.cost) {
        return "Рассчитывается позже";
      }
      return this.$store.state.cart.shippingInfo.cost;
    },
  },

  methods: {
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },

  mounted() {
    if (window.innerWidth > 765) {
      this.pcView = true;
    } else {
      this.pcView = false;
    }
  },

  props: {
    products: Array,
    totalPrice: Number,
  },

  emits: ["submit-form"],

  components: { OrderDetailsProducts, OrderDetailsShipping, OrderDetailsTotal },
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
