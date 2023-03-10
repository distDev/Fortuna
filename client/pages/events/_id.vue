<template>
  <div>
    <div v-for="{ id, attributes } in data" :key="id" class="event">
      <EventBanner
        class="mb-[40px] lg:mb-[60px]"
        :title="attributes.title"
        :age="attributes.ageRestriction"
        :city="attributes.city"
        :date="attributes.date"
        :type="attributes.type"
        :poster="attributes.poster"
        :price="attributes.price"
      />
      <div class="px-[15px] lg:px-[160px] space-y-[40px] lg:space-y-[60px]">
        <div class="flex flex-col space-y-[15px] lg:hidden">
          <div class="flex space-x-[12px]">
            <font-awesome-icon :icon="['fas', 'calendar']" />
            <p class="text-sm">{{ formatDate }}</p>
          </div>
          <div class="flex space-x-[12px]">
            <font-awesome-icon :icon="['fas', 'location-pin']" />
            <p class="text-sm">{{ attributes.adress }}</p>
          </div>
        </div>
        <EventDescription
          :images="attributes.images"
          :description="attributes.description"
        />
        <EventArtists :artists="attributes.artists" />
        <EventAddress />
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
      data: realEvents,
    };
  },
  computed: {
    formatDate() {
      let date = this.data.map((e) => e.attributes.date).join("");
      let formatDate = dayjs(date).locale("ru").format("D MMMM, h:mm").replace(",", " в");
      return formatDate
    },
  },
  components: { EventBanner, EventDescription, EventArtists, EventAddress },
};
</script>

<style scoped>
.event {
  font-family: "Roboto", sans-serif;
}
</style>
