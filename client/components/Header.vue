<template>
  <div class="w-full fixed top-0 bg-black text-white z-50">
    <!-- Основная шапка -->
    <div
      class="w-full flex flex-row justify-between items-center lg:py-5 lg:px-10 py-3 px-[15px]"
    >
      <div class="flex flex-row items-center">
        <NuxtLink class="uppercase text-[22px] font-bold" to="/">FT</NuxtLink>
        <div class="lg:flex space-x-9 ml-[120px] hidden">
          <NuxtLink
            class="uppercase text-sm font-bold"
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            >{{ link.name }}</NuxtLink
          >
        </div>
      </div>
      <div
        class="bg-white h-[20px] px-[6px] lg:px-1 flex justify-center items-center text-black cursor-pointer"
      >
        <p class="text-sm">5</p>
      </div>
    </div>

    <!-- Мобильное дополнение шапки -->
    <div class="custom-border h-[40px] flex items-center mx-15px lg:hidden">
      <NuxtLink
        class="uppercase text-[10px] font-medium px-[10px]"
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        >{{ link.name }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import { headerLinks } from "../assets/header-data";

export default {
  data() {
    return {
      links: headerLinks,
    };
  },
};
</script>

<style scoped>
.custom-border {
  border-top: 1px solid transparent;
  border-image-source: linear-gradient(90.02deg, #6240c2 0.55%, #143792 100%);
  border-image-slice: 1;
}
</style>
