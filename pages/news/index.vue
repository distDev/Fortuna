<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="max-w-[1440px] flex justify-center m-auto">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-[15px] lg:gap-[20px] grid-custom mt-[0px] sm:pt-[40px] lg:pt-[60px] px-[0px] sm:px-[15px] lg:px-[40px]"
    >
      <NewsItem
        v-for="{ attributes, id } in articles.data"
        :id="id"
        :date="attributes.publishedAt"
        :poster="attributes.preview.data.attributes.url"
        :title="attributes.title"
      />
    </div>
  </div>
</template>

<script>
import Loader from "../../components/Loader.vue";
import NewsItem from "../../components/news-page/NewsItem.vue";

export default {
  data() {
    return {
      articles: [],
      api: this.$config.apiPath,
    };
  },

  async fetch() {
    this.articles = await this.$axios.$get(`${this.$config.apiPath}/api/articles?populate=*&sort=publishedAt:desc`);
  },

  components: { NewsItem, Loader },

  head: {
    title: "Новости - Коллектив 'Фортуна'",
    meta: [
        {
          hid: "description",
          name: "description",
          content: 'Читать новости солнечного дуэта "Фортуна". Читать коллектив "Фортуна" на Дзене',
        },
      ],
  },
};
</script>

<style>
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
