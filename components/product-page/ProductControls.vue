<template>
  <div class="space-y-[15px] lg:space-y-[20px]">
    <button
      :disabled="!inStock || checkAvailableCount"
      class="uppercase text-white bg-black lg:text-base font-bold h-[50px] w-full lg:w-[75%] disabled:bg-grey"
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
        price: this.price,
        name: this.name,
        size: this.size,
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
        return "Нет в наличии";
      }
      return "В корзину";
    },

    checkAvailableCount() {
      if (!this.totalCount) {
        return true;
      }

      let check = this.products.filter((e) => e.id === this.id);

      if (check.length > 0) {
        if (check[0].countInCart >= this.totalCount) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },

    productImage() {
      return this.images[0].attributes.formats.small.url;
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

<style lang="scss" scoped></style>
