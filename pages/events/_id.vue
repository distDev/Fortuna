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
          <EventMobileInfo
            :adress="eventData.data.attributes.adress"
            :date="eventData.data.attributes.date"
          />
          <EventDescription
            :images="eventData.data.attributes.images.data"
            :description="eventData.data.attributes.description"
          />
          <EventArtists
            v-if="eventData.data.attributes.artists.length > 0"
            :artists="eventData.data.attributes.artists"
          />
          <EventAddress
            :adressLink="eventData.data.attributes.adressLink"
            :adress="eventData.data.attributes.adress"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { devApi } from "../../assets/api";
import EventBanner from "@/components/event-page/EventBanner.vue";
import EventDescription from "@/components/event-page/EventDescription.vue";
import EventAddress from "@/components/event-page/EventAddress.vue";
import EventArtists from "@/components/event-page/EventArtists.vue";
import EventMobileInfo from "../../components/event-page/EventMobileInfo.vue";

export default {
  data() {
    return {
      eventData: [],
      api: devApi,
    };
  },

  async fetch() {
    this.eventData = await this.$axios.$get(
      `${devApi}/api/events/${this.$route.params.id}?populate[0]=artists.image&populate[1]=images&populate[2]=poster`
    );
  },

  components: {
    EventBanner,
    EventDescription,
    EventArtists,
    EventAddress,
    EventMobileInfo,
  },
};
</script>

<style scoped>
.event {
  font-family: "Roboto", sans-serif;
}
</style>
