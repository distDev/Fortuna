<template>
  <div
    class="w-full lg:w-[35%] mt-[20px] lg:mt-[0px] space-y-[30px] lg:space-y-[85px]"
  >
    <div class="space-y-[7px] lg:space-y-[10px]">
      <h1 class="uppercase font-bold lg:text-[28px]">{{ name }}</h1>
      <h2 class="uppercase font-bold lg:text-[28px]">{{ price }} ₽</h2>
    </div>
    <div class="space-y-[40px]">
      <div class="space-y-[15px] lg:space-y-[20px]">
        <select
          v-if="inStock && options"
          name="options"
          class="h-[50px] w-full lg:w-[75%] border-[1px] border-black"
          v-model="selectedSize"
        >
          <option value="" disabled>выберете размер</option>
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
          :disabled="!inStock"
          class="uppercase text-white bg-black lg:text-base font-bold h-[50px] w-full lg:w-[75%] disabled:bg-[#97999B]"
          @click="
            addToCart({
              id: id,
              variantId: id + selectedSize,
              name: name,
              price: price,
              size: selectedSize,
              totalCount: selectedSizeCount,
              image: productImage,
            })
          "
        >
          {{ isDisabled }}
        </button>
      </div>
      <div class="space-y-[20px] lg:space-y-[25px]">
        <div class="flex space-x-[25px]">
          <h4
            @click="activeTab = 'Детали'"
            class="uppercase lg:text-xl font-bold cursor-pointer"
            :class="activeTab === 'Детали' ? 'text-black' : 'text-[#97999B]'"
          >
            детали
          </h4>
          <h4
            @click="activeTab = 'Доставка'"
            class="uppercase lg:text-xl font-bold cursor-pointer"
            :class="activeTab === 'Доставка' ? 'text-black' : 'text-[#97999B]'"
          >
            доставка
          </h4>
        </div>
        <div>
          <div v-if="activeTab === 'Детали'">
            <p>
              {{ description }}
            </p>
            <ul class="attributes mt-5 lg:mt-6 space-y-[15px]">
              <li
                v-for="i in attributes"
                :key="i.id"
                class="text-base font-medium text-[#97999B]"
              >
                {{ i.name
                }}<span
                  class="attributes-value text-base font-medium text-black"
                  >{{ i.value }}</span
                >
              </li>
            </ul>
          </div>
          <div v-else>
            <p>Доставка бесплатная</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      selectedSize: null,
      activeTab: "Детали",
    };
  },
  methods: {
    addProduct() {},
    ...mapMutations({
      addToCart: "cart/addToCart",
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
    attributes: Array,
    description: String,
    id: Number,
    images: Array,
  },
};
</script>

<style scoped>
.attributes {
  padding: 0;
}
.attributes li {
  align-items: baseline;
  display: flex;
  margin-bottom: 0.5em;
}
.attributes li::before {
  content: "";
  border-bottom: 1px dashed #97999b;
  flex-grow: 1;
  order: 2;
  margin: 0 10px;
}
.attributes .attributes-value {
  order: 3;
}
</style>
