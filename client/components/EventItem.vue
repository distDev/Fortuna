<template>
  <NuxtLink :to="'/events/' + id" class="space-y-[15px]">
    <div class="flex items-end relative h-[210px] lg:h-[250px]">
      <div class="flex flex-row space-x-[5px] z-30 p-[10px] lg:p-[15px]">
        <div
          class="bg-black rounded-[40px] uppercase text-white text-[10px] lg:text-xs font-medium py-[7px] px-[10px]"
        >
          {{ price > 0 ? price + " ₽" : "Бесплатно" }}
        </div>
        <div
          class="bg-black rounded-[40px] uppercase text-white text-[10px] lg:text-xs font-medium py-[7px] px-[10px]"
          v-for="tag in tags"
        >
          {{ tag }}
        </div>
      </div>
      <div class="absolute top-0 w-full h-full bg-black opacity-50 z-20"></div>
      <img
        src="~assets/images/event.jpg"
        alt="event"
        class="absolute w-full h-full top-0 object-cover z-10"
      />
    </div>
    <div class="space-y-[5px] lg:space-y-[7px]">
      <h3 class="uppercase text-base font-bold text-black">{{ name }}</h3>
      <p class="uppercase text-xs text-[#97999B]">
        {{ date }} * {{ location }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    name: String,
    date: String,
    price: Number,
    tags: Array,
    location: String,
    id: String,
  },
};
</script>

<style lang="scss" scoped></style>
