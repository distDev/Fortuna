<template>
  <div
    class="w-full lg:w-[35%] mt-[20px] lg:mt-[0px] space-y-[30px] lg:space-y-[85px]"
  >
    <div class="space-y-[7px] lg:space-y-[10px]">
      <h1 class="uppercase font-bold lg:text-[28px]">ФУТБОЛКА “ФОРТУНА”</h1>
      <h2 class="uppercase font-bold lg:text-[28px]">1500 ₽</h2>
    </div>
    <div class="space-y-[40px]">
      <div class="space-y-[15px] lg:space-y-[20px]">
        <select
          name="options"
          class="h-[50px] w-full lg:w-[75%] border-[1px] border-black"
          v-model="selectedSize"
        >
          <option value="" disabled selected>выберете размер</option>
          <option value="M">M</option>
          <option value="L">XL</option>
        </select>
        <button
          class="uppercase text-white bg-black lg:text-base font-bold h-[50px] w-full lg:w-[75%]"
        >
          в корзину
        </button>
      </div>
      <div class="space-y-[20px] lg:space-y-[25px]">
        <div class="flex space-x-[25px]">
          <h4
            @click="activeTab = 'Детали'"
            class="uppercase lg:text-xl font-bold cursor-pointer"
            :class="activeTab === 'Детали' ? 'text-black' : 'text-[#97999B]'"
          >
            детали
          </h4>
          <h4
            @click="activeTab = 'Доставка'"
            class="uppercase lg:text-xl font-bold cursor-pointer"
            :class="activeTab === 'Доставка' ? 'text-black' : 'text-[#97999B]'"
          >
            доставка
          </h4>
        </div>
        <div>
          <div v-if="activeTab === 'Детали'">
            <p>
              Изделия с отметкой Committed изготовлены с использованием
              экологичных волокон и/или устойчивых производственных процессов,
              что снижает негативное воздействие на окружающую среду.
            </p>
            <ul class="attributes mt-5 lg:mt-6 space-y-[15px]">
              <li
                v-for="i in 3"
                :key="i"
                class="text-base font-medium text-[#97999B]"
              >
                Состав<span
                  class="attributes-value text-base font-medium text-black"
                  >Хлопок</span
                >
              </li>
            </ul>
          </div>
          <div v-else>
            <p>Доставка бесплатная</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSize: null,
      activeTab: "Детали",
    };
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
