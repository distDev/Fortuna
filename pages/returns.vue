<template>
  <PolicyContent :data="data" :fetch-status="$fetchState" />
</template>

<script>
import PolicyContent from "../components/PolicyContent.vue";

export default {
  head: {
    title: 'Политика возвратов - Коллектив "Фортуна"',
    meta: [
      {
        hid: "description",
        name: "description",
        content: 'Узнать как вернуть товар в магазине Коллектив "Фортуна"',
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
      `${this.$config.apiPath}/api/returns-policy`
    );
  },

  components: { PolicyContent },
};
</script>

<style></style>
