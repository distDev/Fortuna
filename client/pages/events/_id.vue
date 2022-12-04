<template>
  <div class="event">
    <EventBanner class="mb-[40px] lg:mb-[60px]" />
    <div class="px-[15px] lg:px-[160px] space-y-[40px] lg:space-y-[60px]">
      <EventDescription />
      <EventArtists />
    </div>
  </div>
</template>

<script>
import EventBanner from "@/components/events/EventBanner.vue";
import EventDescription from "@/components/events/EventDescription.vue";
import EventArtists from "../../components/events/EventArtists.vue";

export default {
  data() {
    return {};
  },
  components: { EventBanner, EventDescription, EventArtists },
};
</script>

<style scoped>
.event {
  font-family: "Inter", sans-serif;
}
</style>
