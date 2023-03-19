<template>
  <Loader v-if="$fetchState.pending" />
  <VideoItems v-else :data="videos.data" />
</template>

<script>
import VideoItems from "../components/VideoItems.vue";

export default {
  data() {
    return {
      videos: [],
    };
  },
  async fetch() {
    this.videos = await this.$axios.$get(
      `http://localhost:1337/api/videos?populate=*`
    );
  },
  components: { VideoItems },
};
</script>

<style lang="scss" scoped></style>
