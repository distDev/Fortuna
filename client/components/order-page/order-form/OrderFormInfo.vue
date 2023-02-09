<template>
  <div class="lg:w-[617px] lg:mr-[50px] space-y-[50px]">
    <div class="space-y-[20px]">
      <h4 class="text-base font-medium">Контактная иформация</h4>
      <div class="space-y-[15px]">
        <Input
          placeholder="Номер телефона"
          type="text"
          :error-status="false"
          :errors="[]"
          v-model="phone"
        />
        <Input
          placeholder="Имя получателя"
          type="text"
          :error-status="false"
          :errors="[]"
          v-model="name"
        />
      </div>
    </div>
    <div class="space-y-[20px]">
      <h4 class="text-base font-medium">Адрес получения</h4>
      <div class="space-y-[15px]">
        <Input
          placeholder="Край/Область"
          type="text"
          :error-status="false"
          :errors="[]"
          v-model="region"
        />
        <Input
          placeholder="Город"
          type="text"
          :error-status="false"
          :errors="[]"
          v-model="city"
        />
        <Input
          placeholder="Адрес"
          type="text"
          :error-status="false"
          :errors="[]"
          v-model="address"
        />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
          <Input
            placeholder="Квартира"
            type="text"
            :error-status="false"
            :errors="[]"
            v-model="apart"
          />
          <Input
            placeholder="Индекс"
            type="text"
            :error-status="false"
            :errors="[]"
            v-model="postal"
          />
        </div>
      </div>
    </div>
    <div class="w-full flex lg:justify-end">
      <button
        @click="$emit('next-step')"  
        class="bg-black w-full lg:w-auto text-white py-[15px] lg:px-[30px] font-medium lg:text-base"
      >
        Продолжить заказ
      </button>
    </div>
  </div>
</template>

<script>
import Input from "../../UI/Input.vue";

export default {
  data() {
    return {};
  },
  props: {
    name: String,
    phone: String,
    region: String,
    city: String,
    apart: String,
    postal: String,
    address: String,
  },
  emits: ["nextStep"],
  components: { Input },
};
</script>

<style lang="scss" scoped></style>
