<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="flex flex-col space-y-[20px] w-full">
    <FaqItem
      v-for="item in data.data.attributes.faqItem"
      :visible="checkVisible"
      :key="item.id"
      :content="item.content"
      :title="item.title"
    />
  </div>
</template>

<script>
import { devApi } from "../assets/api";
import FaqItem from "../components/faq-page/FaqItem.vue";

export default {
  head: {
    title: "FAQ - Ответы на частозадаваемые вопросы",
  },
  layout: "customer",

  data() {
    return {
      data: null,
    };
  },

  async fetch() {
    this.data = await this.$axios.$get(`${devApi}/api/faq?populate=*`);
  },

  components: { FaqItem },
};
</script>
