<template>
  <header
    class="w-full fixed top-0 bg-black text-white z-50 ease-out duration-200"
    :class="{ 'header-hidden': !showHeader }"
  >
    <!-- Основная шапка -->
    <div
      class="w-full flex flex-row justify-between items-center box-border lg:py-5 lg:px-10 py-3 px-[15px]"
    >
      <div class="flex flex-row items-center">
        <NuxtLink class="uppercase text-[22px] font-bold" to="/">FT</NuxtLink>
        <nav>
          <ul class="lg:flex space-x-9 lg:ml-[120px] hidden">
            <li v-for="link in links">
              <NuxtLink
                class="uppercase text-sm font-bold"
                :key="link.name"
                :to="link.path"
                >{{ link.name }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex space-x-[15px]">
        <Cart />
        <MobileMenu />
      </div>
    </div>

    <!-- Мобильная навигация в шапке -->
    <nav>
      <ul
        class="custom-border h-[40px] flex items-center mx-[15px] xs:mx-[10px] lg:hidden"
      >
        <li v-for="link in links">
          <NuxtLink
            class="uppercase text-[10px] font-medium px-[10px]"
            :key="link.name"
            :to="link.path"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { headerLinks } from "../assets/nav-data";
import Cart from "./cart/Cart.vue";

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
  components: { Cart },
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
