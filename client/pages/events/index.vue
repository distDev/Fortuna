<template>
  <MainEventsContent :data="eventsData" v-if="isEvents" />
  <EmptyEventsContent v-else />
</template>

<script>
import { eventsData } from "../../assets/data";
import EmptyEventsContent from "../../components/event-page/EmptyEventsContent.vue";
import MainEventsContent from "../../components/event-page/MainEventsContent.vue";
import EventItems from "../../components/EventItems.vue";

export default {
  data() {
    return {
      eventsData,
    };
  },
  computed: {
    isEvents() {
      return this.eventsData.length > 0 ? true : false;
    },
  },
  components: { EventItems, MainEventsContent, EmptyEventsContent },
};
</script>

<style scoped></style>
