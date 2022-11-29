<template>
  <div>
    <div
      class="bg-[#222222] h-[270px] flex lg:items-end lg:justify-center lg:p-[40px] relative"
    >
      <div
        class="absolute top-[80px] gradient-custom lg:h-[45px] lg:w-[60%]"
      ></div>
      <h3 class="uppercase text-violet-500 text-2xl lg:text-[42px] font-bold">
        events
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.gradient-custom {
  background: linear-gradient(
    269.93deg,
    #9671ff 27.58%,
    #9671ff 48.51%,
    #11ba9b 89.4%
  );

  filter: blur(106.5px);
  transform: rotate(10.72deg);
}
</style>
