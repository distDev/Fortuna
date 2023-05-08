<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center space-x-[10px] w-[85%]">
      <div
        class="w-[65px] h-[65px] border-[1px] bg-primary border-[rgb(214,208,231)] rounded-[7px] relative"
      >
        <img
          :src="api + image"
          alt=""
          class="h-full w-full object-cover rounded-[7px]"
        />
        <div
          class="px-[7px] py-[3px] rounded-[50%] bg-[#737373] text-white absolute right-[-8px] top-[-8px] z-70"
        >
          <p class="text-xs">
            {{ countInCart > totalCount ? totalCount : countInCart }}
          </p>
        </div>
      </div>
      <p class="w-[70%]">{{ name }}</p>
    </div>
    <div class="w-[15%] flex justify-end">
      <p>{{ price }} ₽</p>
    </div>
  </div>
</template>

<script>
import { prodApi } from "../../../assets/api";

export default {
  data() {
    return {
      api: prodApi,
    };
  },
  props: {
    name: String,
    price: String,
    countInCart: Number,
    totalCount: Number,
    image: String,
    size: String,
  },
};
</script>

<style lang="scss" scoped></style>
