<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="w-full policy-content" v-html="policyContent" />
</template>

<script>
import { marked } from "marked";
import { devApi } from "../assets/api";

export default {
  layout: "customer",
  data() {
    return {
      data: null,
    };
  },

  computed: {
    policyContent() {
      if (this.data) {
        return marked(this.data.data.attributes.content);
      }
    },
  },

  async fetch() {
    this.data = await this.$axios.$get(`${devApi}/api/public-offer`);
  },
};
</script>

<style scoped></style>
