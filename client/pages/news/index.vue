<template>
  <div
    v-if="!$fetchState.pending"
    class="grid grid-cols-1 gap-[15px] lg:gap-[20px] grid-custom mt-[0px] lg:pt-[60px] px-[0px] lg:px-[40px]"
  >
    <NuxtLink
      v-for="item in articles.data"
      :key="item.id"
      :to="'/news/' + item.id"
      class="grid-custom-item h-[260px] bg-slate-600 relative flex items-end"
    >
      <div
        class="h-[120px] lg:h-[220px] w-full absolute bottom-0 z-30 linear-bg"
      ></div>
      <img
        :src="
          'http://localhost:1337' +
          item.attributes.preview.data[0].attributes.url
        "
        alt=""
        class="w-full h-full object-cover absolute z-0"
      />
      <div class="absolute top-0 opacity-60 bg-black w-full h-full z-10"></div>
      <div
        class="grid-custom-item-text z-40 px-[10px] py-[10px] lg:px-5 lg:py-5"
      >
        <h3
          class="text-white text-base lg:text-[28px] leading-6 lg:leading-10 font-bold mb-4 lg:mb-7"
        >
          {{ item.attributes.title.slice(0, 90) + "..." }}
        </h3>
        <p class="text-[#BBBBBB] text-xs lg:text-sm font-medium">
          {{ item.attributes.publishedAt }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import { newsData } from "../../assets/data";

export default {
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await this.$axios.$get(
      `http://localhost:1337/api/articles?populate=*`
    );
  },
};
</script>

<style scoped>
.linear-bg {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
}
@media (min-width: 992px) {
  .grid-custom {
    grid-template-columns: 1fr 1fr;
  }
  .grid-custom-item {
    height: 460px;
  }

  .grid-custom .grid-custom-item:nth-child(3n + 3) {
    grid-column: span 2;
    height: 660px;
  }
  .grid-custom .grid-custom-item:nth-child(3n + 3) .grid-custom-item-text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }
  .grid-custom .grid-custom-item:nth-child(3n + 3) .grid-custom-item-text h3 {
    width: 70%;
    line-height: 40px;
    text-align: center;
    font-size: 40px;
  }
}
</style>
