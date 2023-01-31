<template>
  <div
    class="lg:w-[57%] w-full px-[15px] lg:px-0 py-[30px] lg:py-auto lg:h-[90vh] bg-[#FAF9FF] flex lg:justify-end lg:pt-[60px]">
    <div class="lg:w-[617px] lg:mr-[50px] space-y-[50px]">
      <div class="space-y-[20px]">
        <h4 class="text-base font-medium">Контактная иформация</h4>
        <div class="space-y-[15px]">
          <Input placeholder="Номер телефона" type="text" name="phone" :error-status="false" :errors="[]" v-model="name"/>
          <Input placeholder="Имя получателя" type="text" :error-status="false" :errors="[]" v-model="name"/>
        </div>
      </div>
      <div class="space-y-[20px]">
        <h4 class="text-base font-medium">Адрес получения</h4>
        <div class="space-y-[15px]">
          <Input placeholder="Край/Область" type="text" :error-status="false" :errors="[]" v-model="name"/>
          <Input placeholder="Город" type="text" :error-status="false" :errors="[]" v-model="name"/>
          <Input placeholder="Адрес" type="text" :error-status="false" :errors="[]" v-model="name"/>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
            <Input placeholder="Квартира" type="text" :error-status="false" :errors="[]" v-model="name"/>
            <Input placeholder="Индекс" type="text" :error-status="false" :errors="[]" v-model="name"/>
          </div>
        </div>
      </div>
      <div class="w-full flex lg:justify-end">
        <button
          class="bg-black w-full lg:w-auto text-white rounded-[4px] py-[15px] lg:px-[30px] font-medium lg:text-base">
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../UI/Input.vue";

export default {
  data() {
    return {
      name: '',
      phone: '',
      area: '',
      city: '',
      home: '',
      dbod: '',
    };
  },
  components: { Input },
};
</script>
