<template>
  <div>
    <div
      class="bg-[#222222] h-[120px] lg:h-[270px] flex items-end lg:justify-center p-[15px] lg:p-[40px] relative overflow-hidden"
    >
      <div
        class="absolute bottom-[30px] lg:bottom-auto right-[90px] lg:right-auto lg:top-[80px] gradient-custom blur-[65px] lg:blur-[115px] h-[25px] lg:h-[45px] w-[70%] lg:w-[60%] rotate-[170deg] lg:rotate-[11deg]"
      ></div>
      <h3 class="uppercase text-violet-500 text-2xl lg:text-[42px] font-bold">
        events
      </h3>
    </div>
    <div class="pt-[25px] lg:pt-[60px] px-[15px] lg:px-[40px]">
      <EventItems :data="eventsData" />
    </div>
  </div>
</template>

<script>
import { eventsData } from "../../assets/data";
import EventItems from "../../components/EventItems.vue";

export default {
  data() {
    return {
      eventsData,
    };
  },
  components: { EventItems },
};
</script>

<style scoped>
.gradient-custom {
  background: linear-gradient(
    269.93deg,
    #9671ff 27.58%,
    #9671ff 48.51%,
    #11ba9b 89.4%
  );
}
</style>
