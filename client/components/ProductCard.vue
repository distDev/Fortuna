<template>
  <NuxtLink :to="'/products/' + id">
    <div
      class="h-[213px]"
      :class="{
        'lg:h-[380px]': !large,
        'lg:h-[520px]': large,
      }"
    >
      <img
        src="~assets/images/hoodie.jpg"
        class="h-full w-full object-cover"
        alt=""
      />
    </div>
    <div
      class="mt-[14px] lg:mt-5 space-y-[5px]"
      :class="{  'lg:space-y-[12px]': large }"
    >
      <h4
        class="uppercase font-semibold lg:font-bold text-sm"
        :class="{ 'lg:text-lg': !large, 'lg:text-[22px]': large }"
      >
        {{ price + " ₽" }}
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
    large: Boolean,
    id: String,
  },
  data() {
    return {
      largeClass: {},
    };
  },
};
</script>

<style lang="scss" scoped></style>
