<template>
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
          {{ description }}
        </p>
        <ul class="attributes mt-5 lg:mt-6 space-y-[15px]">
          <li
            v-for="i in attributes"
            :key="i.id"
            class="text-base font-medium text-[#97999B]"
          >
            {{ i.name
            }}<span class="attributes-value text-base font-medium text-black">{{
              i.value
            }}</span>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Доставка бесплатная</p>
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
