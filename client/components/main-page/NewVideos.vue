<template>
  <div class="flex flex-col justify-center pl-[15px] lg:px-10 lg:items-center">
    <h2
      class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
    >
      Новые видео
    </h2>
    <div class="w-full overflow-x-scroll lg:overflow-auto pb-[7px]">
      <div
        class="flex flex-row flex-nowrap lg:place-content-center space-x-[14px] w-[500%] lg:w-full lg:grid lg:grid-cols-3 lg:gap-[20px] lg:space-x-[0px]"
      >
        <VideoItem
          v-for="item in data"
          :key="item.id"
          :img="item.img"
          class="h-[228px] lg:h-[275px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VideoItem from "../VideoItem.vue";

export default {
  props: {
    data: Array,
  },
  components: { VideoItem },
};
</script>

<style lang="scss" scoped></style>
