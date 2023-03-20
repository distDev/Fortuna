<template>
  <div class="h-[calc(100vh-73px)] box-border">
    <div class="flex items-center justify-center w-full h-full">
      <div class="flex flex-col items-center">
        <div class="w-[236px] lg:w-[332px] h-[172px] lg:h-[240px]">
          <img
            src="@/assets/images/no-products.svg"
            alt="нет товаров"
            class="w-full h-auto"
          />
        </div>
        <h3
          class="text-lg lg:text-3xl mt-[40px] lg:mt-[60px] text-center font-medium uppercase"
        >
          <span class="font-bold"
            >О нет! похоже <br />
            у нас</span
          >
          закончились <br />
          все товары
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
