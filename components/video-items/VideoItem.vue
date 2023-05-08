<template>
  <div
    class="relative cursor-pointer"
    tabindex="0"
    aria-label="видео"
    @click="handleShow({ url: link })"
  >
    <img :src="api + img" alt="" class="w-full h-full object-cover" />
    <div class="absolute top-0 opacity-50 bg-black w-full h-full"></div>
    <div
      class="play-icon w-full h-full absolute top-0 flex justify-center items-center z-20"
    >
      <font-awesome-icon class="w-full" :icon="['fas', 'circle-play']" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { devApi } from "../../assets/api";

export default {
  data() {
    return {
      api: devApi,
    };
  },
  methods: {
    ...mapMutations({
      handleShow: "video/handleShow",
    }),
  },
  props: {
    img: String,
    link: String,
  },
};
</script>

<style scoped>
.play-icon svg {
  width: 20%;
  height: 20%;
  color: #9671ff;
  cursor: pointer;
  transition-duration: 0.2s;
}

.play-icon:hover svg {
  width: 25%;
  height: 25%;
  color: white;
}
</style>
