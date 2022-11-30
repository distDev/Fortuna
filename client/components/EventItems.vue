<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] lg:gap-x-[30px] lg:gap-y-[50px]"
  >
    <EventItem
      v-for="item in data"
      :key="item.id"
      :date="item.date"
      :name="item.name"
      :price="item.price"
      :location="item.location"
      :id="item.id"
      :tags="item.tags"
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
