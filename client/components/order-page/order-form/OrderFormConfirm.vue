<template>
  <div class="lg:w-[617px] lg:mr-[50px] space-y-[50px]">
    <div class="space-y-[20px]">
      <h4 class="text-base font-medium">Проверьте ваши данные</h4>
      <div
        class="border-[1px] border-[#97999B] rounded-[4px] px-[10px] lg:px-[15px]"
      >
        <div
          class="flex justify-between items-start border-b-[1px] border-[#97999B] py-[20px]"
        >
          <div class="flex flex-col lg:flex-row w-[84%]">
            <p class="w-[17%] text-sm text-[#97999B]">Контакт</p>
            <p class="w-[83%] text-sm">d.staver@bk.ru</p>
          </div>
          <div class="w-[16%] flex justify-end">
            <button @click="$emit('back')" class="text-xs text-[#97999B]">
              Изменить
            </button>
          </div>
        </div>
        <div class="flex justify-between items-start py-[20px]">
          <div class="flex flex-col lg:flex-row w-[84%]">
            <p class="w-[17%] text-sm text-[#97999B]">Адрес</p>
            <p class="w-[83%] text-sm">
              Балашиха, улица Парковая, дом 15, кв. 78, 143904
            </p>
          </div>
          <div class="w-[16%] flex justify-end">
            <button @click="$emit('back')" class="text-xs text-[#97999B]">
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
          class="border-[1px] border-[#97999B] rounded-[4px]"
        >
          <label :for="value" class="flex justify-between p-4 cursor-pointer">
            <input type="radio" :value="value" :id="value" v-model="shipping" />
            <h3>{{ value }}</h3>
            <p>{{ price }} p</p>
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
import { mapMutations } from "vuex";
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
  watch: {
    shipping: function (val) {
      this.changeShippingInfo(val);
    },
  },
  mounted() {
    this.shipping = "Почта России";
  },
  props: {
    name: String,
    phone: String,
    region: String,
    city: String,
    apart: String,
    postal: String,
    address: String,
    shippingMethod: String,
  },
  emits: ["back", "submit-form"],
  components: { Input },
};
</script>
