<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="article pt-[25px] lg:pt-[60px]">
    <div class="w-full lg:w-[850px] m-auto">
      <Photoswipe>
        <div v-html="testImage"></div>
        <h1
          class="text-[22px] lg:text-[32px] leading-[26px] lg:leading-[38px] font-bold lg:text-center mx-[15px] lg:mx-0 mb-[20px] lg:mb-[30px]"
        >
          {{ article.data.attributes.title }}
        </h1>
        <p
          class="text-grey lg:text-center text-sm lg:text-[17px] font-medium lg:mb-[30px] mb-[20px] mx-[15px] lg:mx-0"
        >
          {{ articlePublishDate }}
        </p>
        <div
          class="w-full lg:w-[650px] m-auto article-content"
          v-html="articleContent"
          @click="(e) => handleZoom(e)"
        ></div>
      </Photoswipe>
    </div>
  </div>
</template>

<script>
import * as dayjs from "dayjs";
import { marked } from "marked";

export default {
  data() {
    return {
      article: null,
      api: this.$config.apiPath,
    };
  },

  async fetch() {
    this.article = await this.$axios.$get(
      `${this.$config.apiPath}/api/articles/${this.$route.params.id}?populate=*`
    );
  },

  head() {
    return {
      title: this.article?.data?.attributes.title + ' - Коллектив "Фортуна"',
    };
  },

  methods: {
    // Добавление ссылки в data-pswp-src аттрибут, чтобы зум работал
    handleZoom(e) {
      if (e.target.localName === "img") {
        e.target.setAttribute("data-pswp-src", e.target.src);
      }
    },
  },

  computed: {
    // Парсинг Markdown
    articleContent() {
      if (process.browser && this.article) {
        let str = this.article.data.attributes.content;

        // указывается валидный путь до фотографий и парсится
        let fullPath = str.replaceAll("/uploads", `${this.api}/uploads`);
        let markedStr = marked(fullPath);

        // добавляю аттрибут для зума
        let zoomAttribute = markedStr.replaceAll("alt", "data-pswp-src='' alt");

        return zoomAttribute;
      }
    },

    articlePublishDate() {
      return dayjs(this.article.data.attributes.publishedAt)
        .locale("ru")
        .format("D MMMM YYYY");
    },
  },
};
</script>

<style>
.article {
  font-family: "Roboto", sans-serif;
}

.article-content p {
  font-size: 18px;
  line-height: 30px;
  margin: 12px 0px;
}

.article-content h2 {
  font-size: 32px;
  margin: 24px 0;
  line-height: 38px;
  font-weight: 600;
}

.article-content h3 {
}
.article-content h4 {
}
.article-content img {
  width: 100%;
  height: auto;
  margin: 30px 0;
}
.article-content ul {
  list-style: inside;
}
.article-content ul li {
  margin: 8px 0px;
  font-size: 18px;
}
.article-content a {
  color: #8b5cf6;
}
.article-content blockquote {
  border-left: 4px solid #d4c1ff;
  padding-left: 15px;
  margin: 24px 0;
}

.article-content blockquote p {
  font-size: 22px;
  font-weight: 500;
  line-height: 35px;
  margin: 0;
}

@media (max-width: 475px) {
  .article-content p {
    font-size: 16px;
    line-height: 26px;
    margin: 12px 15px;
  }
  .article-content p:has(img) {
    margin: 0;
  }

  .article-content h2 {
    font-size: 17px;
    margin: 24px 15px;
    line-height: 26px;
    font-weight: 600;
  }
  .article-content img {
    width: 100%;
    height: auto;
    margin: 24px 0;
  }
  .article-content ul {
    list-style: inside;
    margin: 0px 15px;
  }
  .article-content ul li {
    margin: 8px 0px;
    font-size: 16px;
  }
  .article-content blockquote {
    border-left: 4px solid #d4c1ff;
    padding-left: 15px;
    margin: 24px 15px;
  }

  .article-content blockquote p {
    font-size: 19px;
    font-weight: 500;
    line-height: 29px;
    margin: 0;
  }
}
</style>
