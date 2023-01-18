<template>
  <div class="article pt-[25px] lg:pt-[60px]">
    <div class="w-full lg:w-[850px] m-auto space-y-[20px] lg:space-y-auto">
      <div v-html="parsedArticle" class="flex flex-col items-center"></div>
    </div>
    <p class="text-base lg:text-lg leading-[30px] max-w-[640px]"></p>
  </div>
</template>

<script>
import { articleData } from "../../assets/data";

export default {
  data() {
    return {

    };
  },

  computed: {
    parsedArticle() {
      return articleData.map((e) => e.blocks.map((item) => {
        switch (item.type) {
          case 'paragraph':
            return `<p class='text-base lg:text-lg leading-[26px] lg:leading-[30px] max-w-[640px] mx-[15px] mb-[20px] lg:mb-[40px] lg:m-0'>${item.data.text}</p>`
            break;
          case 'header':
            return `<h1 class='text-[17px] lg:text-[32px] leading-[26px] lg:leading-[38px] font-bold lg:text-center mx-[15px] lg:mx-0 mb-[20px] lg:mb-10'>${item.data.text}</h1>`
            break;
          case 'image':
            return `<img class='w-full lg:max-w-[640px] mb-[20px] lg:mb-[40px]' src=${item.data.link} alt="">`
            break;

        }
      }))[0].join('')

    }
  }
};
</script>

<style scoped>
.article {
  font-family: "Roboto", sans-serif;
}
</style>
