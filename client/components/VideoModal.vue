<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="w-full h-[100vh] fixed top-0 left-0 z-[150] flex justify-center items-center"
    >
      <div class="w-full lg:w-[70%] text-center relative">
        <!-- Кнопка закрытия -->
        <button
          @click="handleClose"
          class="close-btn absolute top-[-60px] right-[15px] lg:right-[-5px] z-[60] text-white text-[24px] font-bold"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" class="fill-white" />
        </button>
        <div class="thumb-wrap z-[50]" v-click-outside="handleClose">
          <iframe
            :src="url"
            width="853"
            height="480"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="bg-black opacity-80 w-full h-full absolute top-0 z-40"></div>
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

  watch: {
    isOpen: function () {
      if (this.isOpen) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
    },
  },
};
</script>

<style scoped>
.close-btn svg {
  height: 40px;
  width: 40px;
  color: white;
}

.close-btn:hover svg {
  color: #9671ff;
}

.thumb-wrap {
  height: 0px;
  padding-bottom: 56.2%;
  position: relative;
}

.thumb-wrap iframe {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
