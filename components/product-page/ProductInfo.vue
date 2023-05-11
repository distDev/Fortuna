<template>
  <div class="space-y-[20px] lg:space-y-[25px]">
    <div class="flex space-x-[25px]">
      <h4
        @click="activeTab = 'Детали'"
        class="uppercase lg:text-xl font-bold cursor-pointer"
        :class="activeTab === 'Детали' ? 'text-main-black' : 'text-grey'"
      >
        детали
      </h4>
      <h4
        @click="activeTab = 'Доставка'"
        class="uppercase lg:text-xl font-bold cursor-pointer"
        :class="activeTab === 'Доставка' ? 'text-main-black' : 'text-grey'"
      >
        доставка
      </h4>
    </div>
    <div>
      <div v-if="activeTab === 'Детали'">
        <p>
          {{ description }}
        </p>
        <ul class="attributes mt-5 lg:mt-6 space-y-[15px]">
          <li
            v-for="i in attributes"
            :key="i.id"
            class="text-base font-medium text-grey"
          >
            {{ i.name
            }}<span
              class="attributes-value text-base font-medium text-main-black"
              >{{ i.value }}</span
            >
          </li>
        </ul>
      </div>
      <div v-else class="space-y-5">
        <p class="text-base">
          CDEK — это наша стандартная служба доставки, вы можете выбрать между
          экспресс-доставкой и эконом-классом. Выберите способ доставки посылки:
          домой, в пункт выдачи или в другое место.
        </p>
        <p class="text-base">
          Еще мы работаем с Почтой России, при оформлении вы можете выбрать
          удобную для вас службу доставки
        </p>
        <div class="space-y-4">
          <h4 class="lg:text-lg font-semibold">Время доставки</h4>
          <p class="text-base">Экспресс: 3-4, Обычная 7-14: рабочих дней</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "Детали",
    };
  },
  props: {
    attributes: Array,
    description: String,
  },
};
</script>

<style scoped>
.attributes {
  padding: 0;
}
.attributes li {
  align-items: baseline;
  display: flex;
  margin-bottom: 0.5em;
}
.attributes li::before {
  content: "";
  border-bottom: 1px dashed #97999b;
  flex-grow: 1;
  order: 2;
  margin: 0 10px;
}
.attributes .attributes-value {
  order: 3;
}
</style>
