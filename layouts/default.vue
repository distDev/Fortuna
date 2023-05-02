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
export default {
  data() {
    return {};
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
