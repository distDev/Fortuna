<template>
  <div>
    <Header />
    <div class="lg:mt-[73px] mt-[97px]">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";

export default {
  data() {
    return {};
  },

  components: {
    Header,
  },
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  position: relative;
}
</style>
