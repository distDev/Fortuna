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
      :title="customProducts.data.attributes.title"
      :slider-title="customProducts.data.attributes.sliderTitle"
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
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Коллектив 'Фортуна' - мы на своем примере доказываем, что нет ничего невозможного ",
      },
    ],
  },

  data() {
    return {
      popularProducts: [],
      customProducts: [],
      articles: [],
      videos: [],
      api: this.$config.apiPath,
    };
  },

  async fetch() {
    this.customProducts = await this.$axios.$get(
      `${this.$config.apiPath}/api/custom-products/1?populate[products][populate][0]=images&pagination[limit]=2`
    );
    this.popularProducts = await this.$axios.$get(
      `${this.$config.apiPath}/api/popular-products/1?populate[products][populate][0]=images&pagination[limit]=3`
    );
    this.articles = await this.$axios.$get(
      `${this.$config.apiPath}/api/articles?populate=*&sort=publishedAt:desc&pagination[limit]=4`
    );
    this.videos = await this.$axios.$get(
      `${this.$config.apiPath}/api/videos?populate=*&sort=publishedAt:desc&pagination[limit]=6`
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
