<template>
  <div>
    <Loader v-if="$fetchState.pending" />
    <MainEventsContent
      :data="events.data"
      v-if="!$fetchState.pending && events.data.length > 0"
    />
    <EmptyEventsContent v-else />
  </div>
</template>

<script>
import EmptyEventsContent from "../../components/event-page/EmptyEventsContent.vue";
import MainEventsContent from "../../components/event-page/MainEventsContent.vue";
import EventItems from "../../components/event-page/EventItems.vue";
import Loader from "../../components/Loader.vue";

export default {
  data() {
    return {
      events: [],
      testEvent: [],
      api: this.$config.apiPath
    };
  },
  async fetch() {
    this.events = await this.$axios.$get(
      `${this.$config.apiPath}/api/events?populate=*&sort=date:asc`
    );
  },
  computed: {
    isEvents() {
      return this.eventsData.length > 0 ? true : false;
    },
  },
  components: { EventItems, MainEventsContent, EmptyEventsContent, Loader },

  head: {
    title: "Мерроприятия - Коллектив 'Фортуна'",
  },
};
</script>

<style scoped></style>
