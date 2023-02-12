<template>
  <div
    class="bg-black px-[15px] py-[40px] lg:px-5 lg:py-20 flex flex-col lg:items-center justify-center"
  >
    <h2
      class="uppercase text-white font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
    >
      Последние новости
    </h2>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-[25px] lg:space-y-[30px]">
        <div v-for="item in data" :key="item.id">
          <p
            class="text-gray-500 uppercase font-bold text-[10px] lg:text-sm mb-[7px] lg:mb-[15px]"
          >
            {{ item.date }}
          </p>
          <NuxtLink
            to="news/1"
            class="text-white uppercase font-bold text-base lg:text-[28px] hover:text-primary"
            >{{ item.title.slice(0, 55) + "..." }}</NuxtLink
          >
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="uppercase text-white border-[1px] border-white text-xs lg:text-lg font-medium py-3 px-10 lg:py-4 lg:px-12 mt-[40px] lg:mt-[60px]"
        >
          Показать еще
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped></style>
