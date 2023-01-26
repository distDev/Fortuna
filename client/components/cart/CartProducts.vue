<template>
  <div class="space-y-[15px] mt-[15px]">
    <div v-for="item in products" :key="item.id" class="flex space-x-[15px] w-full">
      <div class="h-[130px] w-[105px]">
        <img :src="item.image" :alt="item.name" class="h-full w-full object-cover" />
      </div>
      <div class="flex flex-col justify-between lg:w-[60%]">
        <div class="flex flex-col space-y-[5px]">
          <NuxtLink :to="'/products/' + item.id"
            class="uppercase text-xs font-semibold text-white hover:text-violet-500">
            {{ item.name }}
          </NuxtLink>
          <p class="uppercase text-xs font-semibold text-white">
            {{ item.price }} ₽
          </p>
          <p class="uppercase text-xs font-semibold text-white">
            {{ item.size }}
          </p>
        </div>
        <!-- управление количеством -->
        <div class="flex items-center space-x-[10px]" v-if="Number(item.totalCount) > 0">
          <button class="h-[30px] w-[30px] bg-[#97999B] text-black" @click="
            item.countInCart !== 1
              ? decrementCount({ id: item.id })
              : removeFromCart({ id: item.id })
          ">
            -
          </button>
          <p class="text-white text-base font-medium">
            {{ item.countInCart }}
          </p>
          <button class="h-[30px] w-[30px] bg-[#97999B] text-black disabled:bg-[#666869]"
            @click="incrementCount({ id: item.id })" :disabled="Number(item.countInCart) === Number(item.totalCount)">
            +
          </button>
        </div>
        <div v-else class="flex justify-between w-full items-end">
          <p class="uppercase text-xs font-semibold text-[#97999B]">
            нет в наличии
          </p>
          <div class="del-icon" @click="removeFromCart({ id: item.id })">
            <font-awesome-icon :icon="('fas', 'trash')" />
          </div>
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
      incrementCount: "cart/incrementCount",
      decrementCount: "cart/decrementCount",
      removeFromCart: "cart/removeFromCart",
    }),
    increment() { },
  },
  computed: {
    products() {
      return this.$store.state.cart.list;
    },
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
