<template>
  <Loader v-if="$fetchState.pending" />
  <VideoItems v-else :data="videos.data" />
</template>

<script>
import { prodApi } from "../assets/api";
import VideoItems from "../components/video-items/VideoItems.vue";

export default {
  data() {
    return {
      videos: [],
      api: prodApi,
    };
  },
  async fetch() {
    this.videos = await this.$axios.$get(`${prodApi}/api/videos?populate=*`);
  },
  components: { VideoItems },
  head: {
    title: "Видео от Коллектива 'Фортуна'",
  },
};
</script>

<style lang="scss" scoped></style>
