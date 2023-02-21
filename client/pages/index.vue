<template>
  <div class="space-y-[50px] lg:space-y-[90px] h-auto flex flex-col">
    <MainBanner />
    <PopularPoducts :data="popularProducts" title="популярное" />
    <LastNews :data="lastNews" />
    <CustomProducts :data="customProducts" title="своими руками" />
    <NewVideos :data="newVideos" />
  </div>
</template>

<script>
import { realProducts, newsData, videosData } from "../assets/data";
import MainBanner from "../components/main-page/MainBanner.vue";
import PopularPoducts from "../components/PopularPoducts.vue";
import ProductCards from "../components/ProductCards.vue";
import CustomProducts from "../components/main-page/CustomProducts.vue";
import LastNews from "../components/main-page/LastNews.vue";
import NewVideos from "../components/main-page/NewVideos.vue";

export default {
  name: "IndexPage",
  head: {
    title: "Коллектив Фортуна",
  },

  data() {
    return {
      realProducts: realProducts,
      newsData,
      videosData,
    };
  },
  computed: {
    popularProducts() {
      return this.realProducts.slice(0, 4);
    },
    customProducts() {
      return this.realProducts.slice(0, 2);
    },
    lastNews() {
      return this.newsData.slice(0, 4);
    },
    newVideos() {
      return this.videosData.slice(0, 6);
    },
  },
  components: {
    ProductCards,
    MainBanner,
    PopularPoducts,
    CustomProducts,
    LastNews,
    NewVideos,
  },
};
</script>

<style scoped></style>
