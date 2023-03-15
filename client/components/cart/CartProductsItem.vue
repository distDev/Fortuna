<template>
  <div class="flex space-x-[15px] w-full">
    <div class="h-[130px] w-[30%] xs:w-[40%] lg:w-[105px]">
      <img
        :src="'http://localhost:1337' + image"
        :alt="name"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="flex flex-col justify-between w-[60%] lg:w-[60%]">
      <div class="flex flex-col space-y-[5px]">
        <NuxtLink
          :to="'/products/' + id"
          class="uppercase text-xs font-semibold text-white hover:text-primary"
        >
          {{ name.slice(0, 50) }}
        </NuxtLink>
        <p class="uppercase text-xs font-semibold text-white">{{ price }} ₽</p>
        <p class="uppercase text-xs font-semibold text-white">
          {{ size }}
        </p>
      </div>

      <!-- управление количеством -->
      <div
        class="flex items-center space-x-[10px]"
        v-if="Number(totalCount) > 0"
      >
        <!-- уменьшение количества -->
        <button
          class="h-[30px] w-[30px] bg-grey text-main-black"
          @click="
            countInCart !== 1
              ? decrementCount({ id: id })
              : removeFromCart({ id: id })
          "
        >
          -
        </button>

        <p class="text-white text-base font-medium">
          {{ countInCart }}
        </p>

        <!-- увеличение количества -->
        <button
          class="h-[30px] w-[30px] bg-grey text-main-black disabled:bg-[#666869]"
          @click="() => addToCart({ id, price })"
          :disabled="Number(countInCart) === Number(totalCount)"
        >
          +
        </button>
      </div>

      <!-- товара нет в наличии -->
      <div v-else class="flex justify-between w-full items-end">
        <p class="uppercase text-xs font-semibold text-grey">нет в наличии</p>
        <div class="del-icon" @click="() => removeFromCart({ id: id })">
          <font-awesome-icon :icon="('fas', 'trash')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      addToCart: "cart/addToCart",
      decrementCount: "cart/decrementCount",
      removeFromCart: "cart/removeFromCart",
    }),
  },

  computed: {
    currentItem() {
      if (this.products) {
        return this.products.filter((e) => e.id === this.id)[0];
      }
    },

    totalCount() {
      if (this.currentItem) {
        return this.currentItem.attributes.totalCount;
      }
    },

    isDisabled() {
      return this.countInCart === this.totalCount;
    },
  },


  props: {
    id: Number,
    countInCart: Number,
    price: String,
    name: String,
    size: String,
    image: String,
    products: Array,
  },
};
</script>

<style scoped>
.del-icon svg {
  width: 13px;
  height: 13px;
  color: #97999b;
  cursor: pointer;
}

.del-icon svg:hover {
  color: #f95584;
}
</style>
