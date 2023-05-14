<template>
  <PolicyContent :data="data" :fetch-status="$fetchState" />
</template>

<script>
import PolicyContent from "@/components/PolicyContent.vue";

export default {
  head: {
    title: 'Наши контакты - Коллектив "Фортуна"',
  },
  layout: "customer",

  data() {
    return {
      data: null,
    };
  },

  async fetch() {
    this.data = await this.$axios.$get(`${this.$config.apiPath}/api/contact`);
  },

  components: { PolicyContent },
};
</script>

<style></style>
