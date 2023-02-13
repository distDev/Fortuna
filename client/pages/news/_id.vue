<template>
  <div class="article pt-[25px] lg:pt-[60px]">
    <div class="w-full lg:w-[850px] m-auto">
      <Photoswipe>
        <h1
          class="text-[22px] lg:text-[32px] leading-[26px] lg:leading-[38px] font-bold lg:text-center mx-[15px] lg:mx-0 my-[24px]"
        >
          {{ articleTitle }}
        </h1>
        <div v-for="{ blocks, id } in data" :key="id" class="space-y-[12px]">
          <div
            v-for="block in blocks"
            :key="block.id"
            class="w-full lg:w-[640px] m-auto"
          >
            <!-- Заголовок 2 -->
            <h2
              v-if="block.type === 'header' && block.data.level === (1 || 2)"
              class="text-[20px] lg:text-[20px] leading-[26px] lg:leading-[38px] font-bold mx-[15px] lg:mx-0 my-[24px]"
            >
              {{ block.data.text }}
            </h2>

            <!-- Заголовок 3 -->
            <h2
              v-if="block.type === 'header' && block.data.level === 3"
              class="text-[17px] lg:text-[32px] leading-[26px] lg:leading-[38px] font-semibold mx-[15px] my-[24px] lg:mx-0"
            >
              {{ block.data.text }}
            </h2>

            <!-- Параграф -->
            <p
              v-else-if="block.type === 'paragraph'"
              class="text-base lg:text-lg leading-[26px] lg:leading-[30px] max-w-[640px] mx-[15px] lg:m-0"
            >
              {{ block.data.text }}
            </p>

            <!-- Список -->
            <ul
              v-else-if="
                block.type === 'list' && block.data.style === 'unordered'
              "
            >
              <li v-for="li in block.data.items">{{ li }}</li>
            </ul>

            <!-- Список нумерованный -->
            <ul
              v-else-if="
                block.type === 'list' && block.data.style === 'ordered'
              "
            >
              <li v-for="li in block.data.items">{{ li }}</li>
            </ul>

            <!-- Цитата -->
            <blockquote v-else-if="block.type === 'quote'">
              <div>
                <p>{{ block.data.text }}</p>
                <p>{{ block.data.caption }}</p>
              </div>
            </blockquote>

            <!-- Изображение -->
            <img
              v-else-if="block.type === 'image'"
              class="w-full lg:max-w-[640px] my-[24px]"
              v-pswp="block.data.link"
              :src="block.data.link"
              alt=""
            />
          </div>
        </div>
      </Photoswipe>
    </div>
  </div>
</template>

<script>
import { articleData } from "../../assets/data";

export default {
  data() {
    return {
      data: articleData,
    };
  },

  computed: {
    articleTitle() {
      return articleData.map((e) => e.title).join("");
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
.article {
  font-family: "Roboto", sans-serif;
}
</style>
