<template>
  <footer
    class="py-[40px] px-[15px] lg:px-[40px] mt-[80px] lg:mt-[150px] bg-black text-white"
  >
    <!-- Верхняя часть -->
    <div
      class="flex flex-col-reverse lg:flex-row lg:justify-between lg:pb-[80px] border-b-[0px] lg:border-b-[1px] lg:border-[#313131]"
    >
      <!-- Часть с лого -->
      <div class="space-y-[15px] mt-[30px] lg:mt-0">
        <NuxtLink to="/" class="text-[22px] font-bold">FT</NuxtLink>
        <p class="text-grey text-sm lg:text-base">
          Официальный сайт <br />
          Коллектива “Фортуна” 2022©
        </p>
      </div>
      <!-- Часть с ссылками -->
      <div
        class="flex flex-col lg:flex-row space-y-[30px] lg:space-y-0 lg:space-x-[140px]"
      >
        <div
          class="space-y-[20px] lg:space-y-[25px] pb-[30px] lg:pb-0 border-b-[1px] border-[#313131] lg:border-none"
        >
          <h3 class="uppercase font-bold text-grey text-sm">фортуна</h3>
          <div class="flex flex-col space-y-[15px]">
            <NuxtLink
              v-for="i in linksData"
              :key="i.name"
              :to="i.path"
              class="uppercase text-xs text-white font-medium hover:text-primary"
              >{{ i.name }}</NuxtLink
            >
          </div>
        </div>

        <div
          class="space-y-[20px] lg:space-y-[25px] pb-[30px] lg:pb-0 border-b-[1px] border-[#313131] lg:border-none"
        >
          <h3 class="uppercase font-bold text-grey text-sm">помощь</h3>
          <div class="flex flex-col space-y-[15px]">
            <NuxtLink
              v-for="i in helpLinksData"
              :key="i.name"
              :to="i.path"
              class="uppercase text-xs text-white font-medium hover:text-primary"
              >{{ i.name }}</NuxtLink
            >
          </div>
        </div>

        <div
          class="space-y-[20px] lg:space-y-[25px] pb-[30px] lg:pb-0 border-b-[1px] border-[#313131] lg:border-none"
        >
          <h3 class="uppercase font-bold text-grey text-sm">
            сотрудничество
          </h3>
          <div class="flex flex-col space-y-[15px]">
            <a
              href="/"
              class="uppercase text-xs text-white font-medium hover:text-primary"
              >@staverson</a
            >
            <a
              href="/"
              class="uppercase text-xs text-white font-medium hover:text-primary"
              >staver@bk.ru</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Нижняя часть -->
    <div class="flex lg:justify-between lg:items-center mt-[30px] lg:mt-[40px]">
      <div>
        <p class="text-grey text-sm lg:text-base">
          Сайт разработан: <a class="text-primary" href="/">@Distcom</a>
        </p>
      </div>
      <div></div>
    </div>
  </footer>
</template>

<script>
import { footerHelpLinks, headerLinks } from "../../assets/nav-data";

export default {
  data() {
    return {
      linksData: headerLinks,
      helpLinksData: footerHelpLinks,
    };
  },
};
</script>

<style lang="scss" scoped></style>
