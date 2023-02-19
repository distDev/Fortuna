<template>
  <div>
    <div
      class="bg-[#222222] h-[120px] lg:h-[270px] flex items-end lg:justify-center p-[15px] lg:p-[40px] relative"
    >
      <div
        class="absolute bottom-[30px] lg:bottom-auto right-[90px] lg:right-auto lg:top-[80px] gradient-custom blur-[65px] lg:blur-[115px] h-[25px] lg:h-[45px] w-[70%] lg:w-[60%] rotate-[170deg]"
      ></div>
      <h3 class="uppercase text-primary text-2xl lg:text-[42px] font-bold">
        products
      </h3>
    </div>
    <div
      class="mt-[15px] lg:mt-[30px] mx-[15px] lg:mx-[40px] space-y-[25px] lg:space-y-[40px]"
    >
      <div>
        <p class="uppercase text-grey text-sm lg:text-base font-medium">
          всего товаров: 12
        </p>
      </div>
      <ProductCards
        :data="data"
        :large="true"
        class="grid grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-x-[14px] lg:gap-x-[30px] gap-y-[30px] lg:gap-y-[40px]"
      />
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

<style scoped>
.gradient-custom {
  background: linear-gradient(
    269.93deg,
    #9671ff 27.58%,
    #9671ff 48.51%,
    #00a3ff 89.4%,
    #005be3 89.4%
  );
}
</style>
