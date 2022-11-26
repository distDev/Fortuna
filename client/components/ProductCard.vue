<template>
  <NuxtLink to="shop/1">
    <div class="h-[213px] lg:h-[380px] w-300px">
      <img
        src="~assets/images/hoodie.jpg"
        class="h-full w-full object-cover"
        alt=""
      />
    </div>
    <div class="mt-[14px] lg:mt-5 space-y-[5px] lg:space-y-[7px]">
      <h4 class="uppercase font-semibold lg:font-bold text-base lg:text-lg">
        {{ price + ' ₽' }}
      </h4>
      <p class="uppercase font-medium text-[11px] lg:text-sm">{{ title }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    img: String,
    price: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped></style>
