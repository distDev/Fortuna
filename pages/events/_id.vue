<template>
  <div>
    <Loader v-if="$fetchState.pending" />
    <div v-if="!$fetchState.pending" class="event">
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
          :coordinates="eventData.data.attributes.coordinates"
          :adress="eventData.data.attributes.adress"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EventBanner from "@/components/event-page/single-event/EventBanner.vue";
import EventDescription from "@/components/event-page/single-event/EventDescription.vue";
import EventAddress from "@/components/event-page/single-event/EventAddress.vue";
import EventArtists from "@/components/event-page/single-event/EventArtists.vue";
import EventMobileInfo from "../../components/event-page/single-event/EventMobileInfo.vue";

export default {
  data() {
    return {
      eventData: [],
      api: this.$config.apiPath,
    };
  },

  async fetch() {
    this.eventData = await this.$axios.$get(
      `${this.$config.apiPath}/api/events/${this.$route.params.id}?populate[0]=artists.image&populate[1]=images&populate[2]=poster`
    );
  },

  head() {
    return {
      title:
        this.eventData?.data?.attributes.title +
        ' - описание, фотографии и адрес мерроприятия - Коллектив "Фортуна"',
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.eventData?.data?.attributes.description,
        },
      ],
    };
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
