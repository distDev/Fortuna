<template>
  <PolicyContent :data="data" :fetch-status="$fetchState" />
</template>

<script>
import PolicyContent from "../components/PolicyContent.vue";

export default {
  head: {
    title: 'Подробнее о доставке - Коллектив "Фортуна"',
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          'Описание того как происходит доставка и сколько она стоит в магазине "Коллектив Фортуна"',
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
      `${this.$config.apiPath}/api/shipping-policy`
    );
  },
  components: { PolicyContent },
};
</script>

<style scoped></style>
