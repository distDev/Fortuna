<template>
  <PolicyContent :data="data" :fetch-status="$fetchState" />
</template>

<script>
import { devApi } from "../assets/api";
import PolicyContent from "../components/PolicyContent.vue";

export default {
  layout: "customer",

  data() {
    return {
      data: null,
    };
  },

  async fetch() {
    this.data = await this.$axios.$get(`${devApi}/api/privacy-policy`);
  },

  components: { PolicyContent },
};
</script>

<style>

</style>
