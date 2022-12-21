<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="flex justify-center items-center w-full h-[92vh] absolute top-0 left-0 z-[150]"
    >
      <div class="w-[1100px] h-[600px] z-[50]">
        <iframe
          class="w-full h-full"
          :src="link"
          title="Фортуна"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="bg-black opacity-50 w-full h-full absolute top-0 z-40"></div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: {
    show: Boolean,
    link: String,
  },
};
</script>

<style lang="scss" scoped></style>
