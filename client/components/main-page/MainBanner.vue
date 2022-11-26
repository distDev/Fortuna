<template>
  <div
    class="w-full h-[500px] lg:h-[90vh] overflow-hidden relative flex justify-center items-end"
  >
    <div class="w-full h-full absolute top-0 bg-black opacity-40 z-10"></div>
    <div class="h-[240px] w-full absolute bottom-0 z-30 linear-bg"></div>
    <img
      src="~assets/images/main-banner.jpg"
      alt=""
      class="w-full h-full object-cover absolute top-0 z-0"
    />

    <div class="flex flex-col relative mb-10 lg:mb-14">
      <h1
        class="text-white text-[26px] lg:text-5xl font-bold leading-[32px] lg:leading-[63px] text-center uppercase"
      >
        солнечный дуэт <br />“Fortuna”
      </h1>
      <div class="flex justify-center z-40">
        <button
          class="uppercase text-xs lg:text-lg font-medium bg-white py-3 px-10 lg:py-4 lg:px-12 mt-[60px] lg:mt-[100px]"
        >
          Подробнее о нас
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.linear-bg {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
}
</style>
