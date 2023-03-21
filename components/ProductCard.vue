<template>
  <NuxtLink :to="'/products/' + id">
    <div
      class="h-[213px] xs:h-[300px] relative product-image-container"
      :class="{
        'lg:h-[400px]': !large,
        'lg:h-[520px]': large,
      }"
    >
      <div
        class="w-full h-full change-image"
        v-for="img in imgData"
        :key="img.id"
      >
        <img
          :src="api + img.attributes.url"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>

      <div
        class="absolute top-[8px] left-[8px] flex justify-center items-center w-[auto] lg:w-[120px] bg-black px-[10px] lg:px-0 py-[5px] lg:py-[7px] text-white text-[8px] lg:text-xs font-medium lg:font-semibold uppercase"
        v-if="!inStock"
      >
        распродано
      </div>
      <div
        class="absolute top-[8px] left-[8px] flex justify-center items-center w-[auto] lg:w-[120px] bg-primary py-[5px] px-[10px] lg:px-0 lg:py-[7px] text-white text-[8px] lg:text-xs font-medium lg:font-semibold uppercase"
        v-if="newIn && inStock"
      >
        Новинка
      </div>
    </div>
    <div
      class="mt-[14px] lg:mt-5 space-y-[5px]"
      :class="{ 'lg:space-y-[12px]': large }"
    >
      <h4
        class="uppercase font-semibold lg:font-bold text-sm"
        :class="{ 'lg:text-lg': !large, 'lg:text-[22px]': large }"
      >
        {{ price + " ₽" }}
      </h4>
      <p class="uppercase font-medium text-[11px] lg:text-sm">{{ name }}</p>
    </div>
  </NuxtLink>
</template>

<script>
import { devApi } from "../assets/api";

export default {
  data() {
    return {
      api: devApi,
    };
  },
  computed: {
    imgData() {
      if (Array.isArray(this.images)) {
        return this.images.slice(0, 2);
      }
    },
  },
  props: {
    images: Array,
    price: String,
    name: String,
    large: Boolean,
    id: Number,
    newIn: {
      type: Boolean,
      required: false,
    },
    inStock: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style scoped>
.product-image-container .change-image:nth-of-type(2) {
  display: none;
}

.product-image-container:hover .change-image:nth-of-type(1) {
  display: none;
}

.product-image-container:hover .change-image:nth-of-type(2) {
  display: block;
}
</style>
