<template>
  <div class="space-y-[15px] lg:space-y-[20px]">
    <select
      v-if="inStock && options"
      name="options"
      class="h-[50px] w-full lg:w-[75%] px-2 border-[1px] border-black text-black"
      v-model="selectedSize"
    >
      <option value="" disabled>Выберете размер</option>
      <option
        v-for="i in options"
        :key="i.id"
        :value="i.size"
        :disabled="i.count === 0"
      >
        {{ i.size }}
      </option>
    </select>
    <button
      :disabled="!inStock || (options && !Boolean(selectedSize))"
      class="uppercase text-white bg-black lg:text-base font-bold h-[50px] w-full lg:w-[75%] disabled:bg-[#97999B]"
      @click="addProduct"
    >
      {{ isDisabled }}
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      selectedSize: "",
    };
  },
  methods: {
    addProduct() {
      this.addToCart({
        id: this.id,
        variantId: this.id + this.selectedSize,
        name: this.name,
        price: Number(this.price),
        size: this.selectedSize,
        totalCount: Number(this.selectedSizeCount),
        image: this.productImage,
      });
      this.showCartModal();
    },
    ...mapMutations({
      addToCart: "cart/addToCart",
      showCartModal: "cart/handleShowCart",
    }),
  },

  computed: {
    isDisabled() {
      return this.inStock ? "В корзину" : "Нет в наличии";
    },
    selectedSizeCount() {
      return this.options
        .filter((e) => e.size === this.selectedSize)
        .map((e) => e.count)
        .join("");
    },
    productImage() {
      return this.images
        .map((e) => e.attributes.url)
        .slice(0, 1)
        .join("");
    },
  },

  props: {
    name: String,
    price: String,
    inStock: Boolean,
    options: Array,
    id: Number,
    images: Array,
  },
};
</script>

<style lang="scss" scoped></style>
