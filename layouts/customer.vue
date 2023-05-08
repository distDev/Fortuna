<template>
  <div>
    <Header />
    <div class="lg:mt-[73px] mt-[97px]">
      <CustomerBanner :title="activeLink" />
      <div
        class="flex flex-col lg:flex-row lg:mt-[60px] mx-[15px] lg:mx-[40px]"
      >
        <div class="overflow-x-scroll lg:overflow-auto my-[20px] lg:my-0">
          <div
            class="flex flex-row lg:flex-col space-x-[15px] py-[20px] lg:py-0 lg:space-x-[0px] lg:space-y-[15px] w-[200%] xs:w-[250%] lg:w-auto"
          >
            <NuxtLink
              v-for="item in links"
              :key="item.name"
              :to="item.path"
              class="uppercase text-grey text-sm font-semibold"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="lg:ml-[70px] lg:w-[900px]">
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CustomerBanner from "../components/CustomerBanner.vue";
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
import { customerServicesData } from "../assets/customer-services";

export default {
  data() {
    return {
      links: customerServicesData,
    };
  },
  computed: {
    activeLink() {
      return customerServicesData.filter((e) => e.path === this.$route.path)[0]
        .name;
    },
  },
  mounted() {
    console.log(this.activeLink);
  },
  components: { CustomerBanner, Header, Footer },
};
</script>

<style scoped>
body {
  font-family: "Montserrat", sans-serif;
  position: relative;
}

.nuxt-link-active {
  color: black;
}
</style>
