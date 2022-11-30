<template>
  <div class="relative">
    <img :src="img" alt="" class="w-full h-full object-cover" />
    <div class="absolute top-0 opacity-50 bg-black w-full h-full"></div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    link: String,
  },
};
</script>

<style lang="scss"></style>
