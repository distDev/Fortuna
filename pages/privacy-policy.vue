<template>
  <PolicyContent :data="data" :fetch-status="$fetchState" />
</template>

<script>
import PolicyContent from "../components/PolicyContent.vue";

export default {
  head: {
    title: 'Политика конфиденциальности - Коллектив "Фортуна"',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Политика конфиденциальности - Коллектив Фортуна",
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
      `${this.$config.apiPath}/api/privacy-policy`
    );
  },

  components: { PolicyContent },
};
</script>

<style></style>
