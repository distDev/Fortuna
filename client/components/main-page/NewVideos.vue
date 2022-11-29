<template>
  <div class="flex flex-col justify-center pl-[15px] lg:px-10 lg:items-center">
    <h2
      class="uppercase font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
    >
      Новые видео
    </h2>
    <div class="w-full overflow-x-scroll lg:overflow-auto pb-[7px]">
      <div
        class="flex flex-row flex-nowrap lg:place-content-center space-x-[14px] w-[500%] lg:w-full lg:grid lg:grid-cols-3 lg:gap-[20px] lg:space-x-[0px]"
      >
        <div
          v-for="item in data"
          :key="item.id"
          class="bg-black h-[228px] relative lg:h-[275px]"
        >
          <img
            src="~assets/images/dance.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute top-0 opacity-40 bg-black w-full h-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped></style>
