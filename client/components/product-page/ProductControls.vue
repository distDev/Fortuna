<template>
  <div class="space-y-[15px] lg:space-y-[20px]">
    <button :disabled="!inStock || checkAvailableCount"
      class="uppercase text-white bg-black lg:text-base font-bold h-[50px] w-full lg:w-[75%] disabled:bg-grey"
      @click="addProduct">
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
        name: this.name,
        price: Number(this.price),
        size: this.size,
        totalCount: this.totalCount,
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
      if (!this.inStock || this.checkAvailableCount) {
        return 'Нет в наличии'
      }
      return 'В корзину'
      
    
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
    checkAvailableCount() {
      let check = this.products.filter((e) => e.id === this.$route.params.id)
      if (check.length > 0) {
        if (check[0].countInCart >= this.totalCount) {
          return true
        }
        else {
          return false
        }

      }
      else {
        return false
      }

    },
    products() {
      return this.$store.state.cart.list;
    },
  },


  props: {
    name: String,
    price: String,
    inStock: Boolean,
    totalCount: Number,
    id: Number,
    images: Array,
    size: String,
  },
};
</script>

<style lang="scss" scoped>

</style>
