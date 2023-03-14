<template>
  <div>
    <Loader v-if="$fetchState.pending" />
    <div v-if="!$fetchState.pending">
      <div class="event">
        <EventBanner
          class="mb-[40px] lg:mb-[60px]"
          :title="eventData.data.attributes.title"
          :age="eventData.data.attributes.ageRestriction"
          :city="eventData.data.attributes.city"
          :date="eventData.data.attributes.date"
          :type="eventData.data.attributes.type"
          :poster="eventData.data.attributes.poster.data.attributes.url"
          :price="eventData.data.attributes.price"
        />
        <div class="px-[15px] lg:px-[160px] space-y-[40px] lg:space-y-[60px]">
          <div class="flex flex-col space-y-[15px] lg:hidden">
            <div class="flex space-x-[12px]">
              <font-awesome-icon :icon="['fas', 'calendar']" />
              <p class="text-sm">{{ eventData.data.attributes.date }}</p>
            </div>
            <div class="flex space-x-[12px]">
              <font-awesome-icon :icon="['fas', 'location-pin']" />
              <p class="text-sm">{{ eventData.data.attributes.adress }}</p>
            </div>
          </div>
          <EventDescription
            :images="eventData.data.attributes.images.data"
            :description="eventData.data.attributes.description"
          />
          <EventArtists
            v-if="eventData.data.attributes.artists.length > 0"
            :artists="eventData.data.attributes.artists"
          />
          <EventAddress />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBanner from "@/components/event-page/EventBanner.vue";
import EventDescription from "@/components/event-page/EventDescription.vue";
import EventAddress from "@/components/event-page/EventAddress.vue";
import EventArtists from "@/components/event-page/EventArtists.vue";
import * as dayjs from "dayjs";
import { realEvents } from "../../assets/data";

export default {
  data() {
    return {
      eventData: [],
    };
  },

  computed: {
    // formatDate() {
    //   let date = this.data.map((e) => e.attributes.date).join("");
    //   let formatDate = dayjs(date)
    //     .locale("ru")
    //     .format("D MMMM, h:mm")
    //     .replace(",", " в");
    //   return formatDate;
    // },
  },

  async fetch() {
    this.eventData = await this.$axios.$get(
      `http://localhost:1337/api/events/1?populate=*`
    );
  },

  components: { EventBanner, EventDescription, EventArtists, EventAddress },
};
</script>

<style scoped>
.event {
  font-family: "Roboto", sans-serif;
}
</style>
