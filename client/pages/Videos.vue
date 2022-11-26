<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 gap-[15px] lg:gap-[20px] mt-[0px] lg:pt-[60px] px-[0px] lg:px-[40px]"
  >
    <div
      class="h-[260px] lg:h-[405px] relative"
      v-for="item in videosData"
      :key="item.id"
    >
      <img
        src="~assets/images/dance.jpg"
        alt=""
        class="w-full h-full object-cover"
      />
      <div class="absolute top-0 opacity-50 bg-black w-full h-full"></div>
    </div>
  </div>
</template>

<script>
import { videosData } from "../assets/data";

export default {
  data() {
    return {
      videosData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
