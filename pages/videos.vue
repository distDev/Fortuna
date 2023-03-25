<template>
  <Loader v-if="$fetchState.pending" />
  <VideoItems v-else :data="videos.data" />
</template>

<script>
import { devApi } from "../assets/api";
import VideoItems from "../components/VideoItems.vue";

export default {
  data() {
    return {
      videos: [],
      api: devApi
    };
  },
  async fetch() {
    this.videos = await this.$axios.$get(
      `${devApi}/api/videos?populate=*`
    );
  },
  components: { VideoItems },
  head: {
    title: "Видео от Коллектива 'Фортуна'",
  },
};
</script>

<style lang="scss" scoped></style>
