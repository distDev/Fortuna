<template>
  <div
    class="w-full flex flex-row justify-between items-center bg-black py-5 px-10 fixed top-0 text-white z-50"
  >
    <div class="flex flex-row items-center">
      <NuxtLink class="uppercase text-[22px] font-bold" to="/">FT</NuxtLink>
      <div class="flex space-x-9 ml-[120px]">
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
      class="bg-white px-1 flex justify-center items-center text-black cursor-pointer"
    >
      <p>5</p>
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

<style lang="scss" scoped></style>
