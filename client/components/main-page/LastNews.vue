<template>
  <div
    class="bg-black px-[15px] py-[40px] lg:px-5 lg:py-20 flex flex-col lg:items-center justify-center"
  >
    <h2
      class="uppercase text-white font-bold text-[20px] mb-[25px] lg:text-[36px] lg:mb-[50px]"
    >
      Последние новости
    </h2>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-[25px] lg:space-y-[30px]">
        <LastNewsItem
          v-for="{ attributes, id } in articles"
          :id="id"
          :date="attributes.publishedAt"
          :title="attributes.title"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="uppercase text-white border-[1px] border-white text-xs lg:text-lg font-medium py-3 px-10 lg:py-4 lg:px-12 mt-[40px] lg:mt-[60px]"
        >
          Показать еще
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LastNewsItem from "./LastNewsItem.vue";

export default {
  computed: {
    articles() {
      if (this.data) {
        return this.data.slice(0, 4);
      }
    },
  },
  props: {
    data: Array,
  },
  components: { LastNewsItem },
};
</script>

<style lang="scss" scoped></style>
