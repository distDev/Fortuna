<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 gap-[15px] lg:gap-[20px] mt-[0px] lg:pt-[60px] px-[0px] lg:px-[40px]"
  >
    <VideoItem
      class="h-[260px] xs:h-[230px] lg:h-[405px] relative"
      v-for="item in data"
      :key="item.id"
      :img="item.img"
      :link="item.link"
    >
    </VideoItem>
    <VideoModal link="https://www.youtube.com/embed/ZQFQfjtDE6k" />
  </div>
</template>

<script>
import VideoItem from "./VideoItem.vue";
import VideoModal from "./VideoModal.vue";

export default {
  data() {
    return {
      link: "",
      show: false,
    };
  },
  methods: {},
  components: { VideoItem, VideoModal },
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped></style>
