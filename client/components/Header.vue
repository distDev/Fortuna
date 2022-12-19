<template>
  <div
    class="w-full fixed top-0 bg-black text-white z-50 ease-out duration-200"
    :class="{ 'header-hidden': !showHeader }"
  >
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
      <div class="flex space-x-[15px]">
        <Cart />
        <MobileMenu />
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
      showHeader: true,
      scrollOffset: 97,
      lastScrollPosition: 0,
    };
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return;
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
.custom-border {
  border-top: 1px solid transparent;
  border-image-source: linear-gradient(90.02deg, #6240c2 0.55%, #143792 100%);
  border-image-slice: 1;
}

.header-hidden {
  transform: translate3d(0, 0, 0);
}

@media (max-width: 520px) {
  .header-hidden {
    transform: translate3d(0, -100%, 0);
  }
}
</style>
