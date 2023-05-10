<template>
  <Loader v-if="$fetchState.pending" />
  <VideoItems v-else :data="videos.data" />
</template>

<script>
import VideoItems from "../components/video-items/VideoItems.vue";

export default {
  data() {
    return {
      videos: [],
      api: this.$config.apiPath,
    };
  },
  async fetch() {
    this.videos = await this.$axios.$get(`${this.$config.apiPath}/api/videos?populate=*`);
  },
  components: { VideoItems },
  head: {
    title: "Видео от Коллектива 'Фортуна'",
  },
};
</script>

<style lang="scss" scoped></style>
