<template>
  <div class="max-w-[1440px] flex justify-center m-auto">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[15px] lg:gap-[20px] mt-[0px] sm:pt-[40px] lg:pt-[60px] px-[0px] sm:px-[15px] lg:px-[40px]"
    >
      <VideoItem
        class="h-[260px] xxs:h-[220px] xs:h-[230px] lg:h-[405px] relative"
        v-for="{ attributes, id } in data"
        :key="id"
        :img="attributes.image.data.attributes.url"
        :link="attributes.link"
      >
      </VideoItem>
      <VideoModal />
    </div>
  </div>
</template>

<script>
import VideoItem from "./VideoItem.vue";
import VideoModal from "./VideoModal.vue";

export default {
  methods: {},
  components: { VideoItem, VideoModal },
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped></style>
