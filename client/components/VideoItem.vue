<template>
  <div class="relative cursor-pointer">
    <img :src="img" alt="" class="w-full h-full object-cover" />
    <div class="absolute top-0 opacity-50 bg-black w-full h-full"></div>
    <div
      class="play-icon w-full h-full absolute top-0 flex justify-center items-center z-20"
    >
      <font-awesome-icon class="w-full" :icon="['fas', 'circle-play']" />
    </div>
  </div>
</template>

<script>
export default {
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
