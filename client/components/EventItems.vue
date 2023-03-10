<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] lg:gap-x-[30px] lg:gap-y-[50px]"
  >
    <EventItem
      v-for="{ attributes, id } in data"
      :key="id"
      :id="id"
      :adress="attributes.adress"
      :date="attributes.date"
      :poster="attributes.poster.data.attributes.formats.small.url"
      :price="attributes.price"
      :title="attributes.title"
      :type="attributes.type"
      :age-restriction="attributes.ageRestriction"
    />
  </div>
</template>

<script>
import EventItem from "./EventItem.vue";

export default {
  props: {
    data: Array,
  },
  components: { EventItem },
};
</script>

<style lang="scss" scoped></style>
