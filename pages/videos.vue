<template>
  <Loader v-if="$fetchState.pending" />
  <VideoItems v-else :data="videos.data" />
</template>

<script>
import VideoItems from "../components/video-items/VideoItems.vue";

export default {
  head: {
    title: 'Видео - Коллектив "Фортуна"',
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          'Смотреть видео солнечного дуэта "Коллектив Фортуна". Саша и Сергей занимаются готовкой и танцами',
      },
    ],
  },

  data() {
    return {
      videos: [],
      api: this.$config.apiPath,
    };
  },
  async fetch() {
    this.videos = await this.$axios.$get(
      `${this.$config.apiPath}/api/videos?populate=*&sort=publishedAt:desc`
    );
  },
  components: { VideoItems },
};
</script>

<style lang="scss" scoped></style>
