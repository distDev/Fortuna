<template>
  <div>
    <Header />
    <main class="lg:mt-[73px] mt-[97px]">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";

export default {
  data() {
    return {};
  },

  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  position: relative;
}
* {
  box-sizing: border-box;
}
</style>
