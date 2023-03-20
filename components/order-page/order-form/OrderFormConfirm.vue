<template>
  <div class="w-full lg:w-[617px] lg:mr-[50px] space-y-[50px]">
    <div class="space-y-[20px]">
      <h4 class="text-base font-medium">Проверьте ваши данные</h4>
      <div
        class="border-[1px] border-grey rounded-[4px] px-[17px] lg:px-[15px]"
      >
        <div
          class="flex justify-between items-start border-b-[1px] border-grey py-[11px] lg:py-[20px]"
        >
          <div class="flex flex-col lg:flex-row w-[84%]">
            <p class="mb-[5px] lg:mb-0 w-[17%] text-sm text-grey">Контакт</p>
            <p class="w-[83%] text-sm">{{ contactInfo.phone }}</p>
          </div>
          <div class="w-[16%] flex justify-end">
            <button @click="$emit('back')" class="text-xs text-grey">
              Изменить
            </button>
          </div>
        </div>
        <div class="flex justify-between items-start py-[11px] lg:py-[20px]">
          <div class="flex flex-col lg:flex-row w-[84%]">
            <p class="mb-[5px] lg:mb-0 w-[17%] text-sm text-grey">Адрес</p>
            <p class="w-[83%] text-sm">
              {{
                contactInfo.region +
                ", " +
                contactInfo.city +
                ", " +
                contactInfo.address +
                ", " +
                contactInfo.apart +
                ", " +
                contactInfo.postal
              }}
            </p>
          </div>
          <div class="w-[16%] flex justify-end">
            <button @click="$emit('back')" class="text-xs text-grey">
              Изменить
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-[20px]">
      <h4 class="text-base font-medium">Выберите способ доставки</h4>
      <div class="space-y-[15px]">
        <div
          v-for="{ id, value, price } in data"
          :key="id"
          class="border-[1px] border-grey rounded-[4px]"
        >
          <label :for="value" class="flex justify-between p-4 cursor-pointer">
            <input type="radio" :value="value" :id="value" v-model="shipping" />
            <h3>{{ value }}</h3>
            <p>{{ orderTotal >= 5000 ? "Бесплатно" : price + " ₽" }}</p>
          </label>
        </div>
      </div>
    </div>
    <div class="w-full flex lg:justify-end">
      <button
        @click="$emit('submit-form')"
        class="bg-black w-full lg:w-auto text-white rounded-[4px] py-[15px] lg:px-[30px] font-medium lg:text-base"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Input from "../../UI/Input.vue";

export default {
  data() {
    return {
      shipping: "",
      data: [
        {
          id: "12",
          value: "Почта России",
          price: 150,
        },
        {
          id: "125",
          value: "CDEK",
          price: 350,
        },
      ],
    };
  },

  methods: {
    changeShippingInfo(info) {
      this.changeShippingCost({ info: info });
    },
    ...mapMutations({
      changeShippingCost: "cart/handleChangeShippingCost",
    }),
  },

  computed: {
    ...mapGetters({
      orderTotal: "cart/getCartTotalPrice",
    }),
  },

  watch: {
    shipping: function (val) {
      this.changeShippingInfo(val);
    },
  },

  mounted() {
    this.shipping = "Почта России";
    console.log(this.shippingData);
  },

  props: {
    contactInfo: Object,
  },

  emits: ["back", "submit-form"],

  components: { Input },
};
</script>
