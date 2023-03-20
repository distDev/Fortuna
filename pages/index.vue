<template>
  <div class="h-auto flex flex-col">
    <MainBanner />
    <PopularPoducts
      v-if="!$fetchState.pending"
      :data="popularProducts.data.attributes.products.data"
      title="популярное"
      class="py-[50px] lg:py-[90px]"
    />
    <LastNews v-if="!$fetchState.pending" :data="articles.data" />
    <CustomProducts
      v-if="!$fetchState.pending"
      :data="customProducts.data.attributes.products.data"
      title="своими руками"
      class="py-[50px] lg:py-[90px]"
    />
    <NewVideos v-if="!$fetchState.pending" :data="videos.data" />
  </div>
</template>

<script>
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
      popularProducts: [],
      customProducts: [],
      articles: [],
      videos: [],
    };
  },
  async fetch() {
    this.customProducts = await this.$axios.$get(
      `http://localhost:1337/api/custom-products/1?populate[products][populate][0]=images`
    );
    this.popularProducts = await this.$axios.$get(
      `http://localhost:1337/api/popular-products/1?populate[products][populate][0]=images`
    );
    this.articles = await this.$axios.$get(
      `http://localhost:1337/api/articles?populate=*`
    );
    this.videos = await this.$axios.$get(
      `http://localhost:1337/api/videos?populate=*`
    );
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
