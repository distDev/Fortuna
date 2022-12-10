<template>
  <div class="event">
    <EventBanner class="mb-[40px] lg:mb-[60px]" />
    <div class="px-[15px] lg:px-[160px] space-y-[40px] lg:space-y-[60px]">
      <div class="flex flex-col space-y-[15px] lg:hidden">
        <div class="flex space-x-[12px]">
          <font-awesome-icon :icon="['fas', 'calendar']" />
          <p class="text-sm">20 ноября, воскресенье, 19:00</p>
        </div>
        <div class="flex space-x-[12px]">
          <font-awesome-icon :icon="['fas', 'location-pin']" />
          <p class="text-sm">Театральная пл., 1, Москва</p>
        </div>
      </div>
      <EventDescription />
      <EventArtists />
      <EventAddress />
    </div>
  </div>
</template>

<script>
import EventBanner from "@/components/event-page/EventBanner.vue";
import EventDescription from "@/components/event-page/EventDescription.vue";
import EventAddress from "@/components/event-page/EventAddress.vue";
import EventArtists from "@/components/event-page/EventArtists.vue";

export default {
  data() {
    return {};
  },
  components: { EventBanner, EventDescription, EventArtists, EventAddress },
};
</script>

<style scoped>
.event {
  font-family: "Roboto", sans-serif;
}
</style>
