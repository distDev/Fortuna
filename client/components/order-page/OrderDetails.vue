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
          <!-- товары -->
          <div
            class="space-y-5 px-[15px] py-5 lg:py-0 lg:px-[0] lg:space-y-[25px] border-b-[1px] border-b-[#ECECEC] lg:pb-[30px]"
          >
            <div
              v-for="i in products"
              :key="i.variantId"
              class="flex justify-between items-center"
            >
              <div class="flex items-center space-x-[10px] w-[85%]">
                <div
                  class="w-[65px] h-[65px] border-[1px] bg-primary border-[rgb(214,208,231)] rounded-[7px] relative"
                >
                  <img
                    :src="i.image"
                    alt=""
                    class="h-full w-full object-cover rounded-[7px]"
                  />
                  <div
                    class="px-[7px] py-[3px] rounded-[50%] bg-[#737373] text-white absolute right-[-8px] top-[-8px] z-70"
                  >
                    <p class="text-xs">
                      {{ i.countInCart }}
                    </p>
                  </div>
                </div>
                <p class="w-[70%]">{{ i.name }}</p>
              </div>
              <div class="w-[15%] flex justify-end">
                <p>{{ i.price }} ₽</p>
              </div>
            </div>
          </div>

          <!-- доставка -->
          <div
            class="px-[15px] lg:px-0 mt-[23px] pb-[23px] space-y-[15px] border-b-[1px] border-b-[#ECECEC]"
          >
            <div class="flex justify-between">
              <p>Товары ({{ cartValue }})</p>
              <p>{{ orderTotal }} ₽</p>
            </div>
            <div class="flex justify-between">
              <p>Доставка</p>
              <p>
                {{
                  typeof shippingCost === "number"
                    ? shippingCost + "₽"
                    : shippingCost
                }}
              </p>
            </div>
          </div>
          <div
            class="px-[15px] lg:px-0 lg:bg-transparent py-[20px] lg:py-0 lg:mt-[23px] flex items-center justify-between cursor-pointer lg:cursor-auto lg:hidden"
          >
            <p class="lg:text-xl font-semibold">Итого:</p>
            <p class="lg:text-xl font-semibold">{{ totalCost }} ₽</p>
          </div>
        </div>
      </Transition>

      <!-- итого-->
      <div
        class="px-[15px] lg:px-0 bg-[#E6E3F9] lg:bg-transparent py-[20px] lg:py-0 lg:mt-[23px] flex items-center justify-between cursor-pointer lg:cursor-auto"
        @click="isOpen = !isOpen"
      >
        <p class="lg:text-xl font-semibold hidden lg:block">Итого:</p>
        <p class="lg:text-xl lg:font-semibold block lg:hidden">
          {{ OpenStatus }}
        </p>
        <p class="lg:text-xl font-semibold">{{ totalCost }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isOpen: false,
      pcView: false,
    };
  },

  computed: {
    ...mapGetters({
      orderTotal: "cart/getCartTotalPrice",
      cartValue: "cart/getCartValue",
    }),

    products() {
      return this.$store.state.cart.list;
    },

    openStyles() {
      return this.isOpen === true ? "block" : "hidden";
    },

    OpenStatus() {
      return this.isOpen === true ? "Скрыть заказ" : "Показать заказ";
    },

    // итоговая цена с доставкой
    totalCost() {
      if (typeof this.shippingCost === "number") {
        return this.orderTotal + this.shippingCost;
      }
      return this.orderTotal;
    },

    shippingCost() {
      if (this.orderTotal > 5000) {
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

  emits: ["submit-form"],
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
