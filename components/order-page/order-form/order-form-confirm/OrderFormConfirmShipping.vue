<template>
  <div class="space-y-[20px]">
    <h4 class="text-base font-medium">Выберите способ доставки</h4>
    <div class="space-y-[15px]">
      <div
        v-for="{ id, company, price } in data"
        :key="id"
        class="border-[1px] border-grey rounded-[4px]"
      >
        <label :for="company" class="flex justify-between p-4 cursor-pointer">
          <input
            type="radio"
            :value="{ price, company }"
            :id="company"
            v-model="shipping"
            @change="handleSippingChange"
          />
          <h3>{{ company }}</h3>
          <p>{{ orderTotal >= 5000 ? "Бесплатно" : price + " ₽" }}</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      shipping: "",
      data: [
        {
          id: "12",
          company: "Почта России",
          price: 250,
        },
        {
          id: "125",
          company: "CDEK",
          price: 350,
        },
      ],
    };
  },

  methods: {
    ...mapMutations({
      changeShippingCost: "cart/handleChangeShippingCost",
    }),

    handleSippingChange() {
      this.changeShippingCost({
        cost: this.orderTotal >= 5000 ? 0 : this.shipping.price,
        company: this.shipping.company,
      });
    },
  },

  computed: {
    ...mapGetters({
      orderTotal: "cart/getCartTotalPrice",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
