<template>
  <PolicyContent :data="data" :fetch-status="$fetchState" />
</template>

<script>
import PolicyContent from "../components/PolicyContent.vue";

export default {
  head: {
    title: 'Публичная оферта - Коллектив "Фортуна"',
    meta: [
      {
        hid: "description",
        name: "description",
        content: 'Публичная оферта - Коллектив "Фортуна"',
      },
    ],
  },
  layout: "customer",

  data() {
    return {
      data: null,
    };
  },

  async fetch() {
    this.data = await this.$axios.$get(
      `${this.$config.apiPath}/api/public-offer`
    );
  },

  components: { PolicyContent },
};
</script>

<style></style>
