<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="flex justify-center items-center w-full h-[100vh] fixed top-0 left-0 z-[150]"
    >
      <div class="w-[1100px] h-[600px] z-[50]">
        <iframe
          class="w-full h-full"
          :src="url"
          title="Фортуна"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="bg-black opacity-50 w-full h-full absolute top-0 z-40"
        @click="handleClose"
      ></div>
    </div>
  </Teleport>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    url() {
      return this.$store.state.video.url;
    },
    isOpen() {
      return this.$store.state.video.isOpen;
    },
  },

  methods: {
    ...mapMutations({
      handleClose: "video/handleShow",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
