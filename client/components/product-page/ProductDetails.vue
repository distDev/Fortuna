<template>
  <div
    class="w-full lg:w-[35%] mt-[20px] lg:mt-[0px] space-y-[30px] lg:space-y-[85px]"
  >
    <div class="space-y-[7px] lg:space-y-[10px]">
      <h1 class="uppercase font-bold lg:text-[28px]">{{ name }}</h1>
      <h2 class="uppercase font-bold lg:text-[28px]">{{ price }} ₽</h2>
    </div>

    <div class="space-y-[40px]">
      <ProductControls
        :id="id"
        :images="images"
        :name="name"
        :price="price"
        :size="size"
        :inStock="inStock"
        :totalCount="totalCount"
      />
      <ProductInfo :attributes="attributes" :description="description" />
    </div>
  </div>
</template>

<script>
import ProductControls from "./ProductControls.vue";
import ProductInfo from "./ProductInfo.vue";

export default {
  props: {
    name: String,
    price: String,
    inStock: Boolean,
    totalCount: Number,
    attributes: Array,
    description: String,
    id: String,
    images: Array,
    size: String,
  },
  components: { ProductControls, ProductInfo },
};
</script>

<style scoped></style>
