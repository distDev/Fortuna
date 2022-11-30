<template>
  <VideoItems :data="videosData" />
</template>

<script>
import { videosData } from "../assets/data";
import VideoItems from "../components/VideoItems.vue";

export default {
  data() {
    return {
      videosData,
    };
  },
  components: { VideoItems },
};
</script>

<style lang="scss" scoped></style>
