<template>
  <div class="h-[300px] lg:h-[520px] flex items-end relative">
    <div
      class="left-gradient absolute left-0 w-full lg:w-[65%] h-full z-20 hidden lg:block"
    ></div>
    <div class="absolute h-full w-full bg-black opacity-50 top-0 z-[15]"></div>
    <div
      class="bottom-gradient absolute bottom-0 w-full h-[170px] lg:h-[250px] z-[15]"
    ></div>
    <img
      :src="'http://localhost:1337' + poster"
      alt=""
      class="absolute right-0 h-full w-full lg:w-[73%] object-cover z-10"
    />
    <div
      class="flex flex-col-reverse lg:flex-col px-[15px] py-[20px] lg:px-[160px] lg:py-[60px] z-30 relative space-y-[7px] lg:space-y-[20px]"
    >
      <!-- Хэштеги -->
      <div class="flex space-x-[10px] lg:space-x-[15px] mt-[7px] lg:mt-auto">
        <p class="text-grey text-xs lg:text-sm">{{ price }} ₽</p>
        <p class="text-grey text-xs lg:text-sm">
          {{ type }}
        </p>
        <p class="text-grey text-xs lg:text-sm">{{ age }}+</p>
        <p class="text-grey text-xs lg:text-sm" v-if="fortuna">Фортуна</p>
      </div>
      <!-- Описание -->
      <h1
        class="text-white font-bold text-lg lg:text-[48px] lg:w-[900px] lg:leading-[59px]"
      >
        {{ title }}
      </h1>
      <p class="lg:text-xl lg:font-medium hidden lg:inline-block text-white">
        Спектакль в г. {{ city }}: {{ formatDate }}
      </p>
    </div>
  </div>
</template>

<script>
import * as dayjs from "dayjs";

export default {
  data() {
    return {
      arrData: ["Бесплатно", "Конкурс"],
    };
  },
  computed: {
    formatDate() {
      return dayjs(this.date)
        .locale("ru")
        .format("D MMMM, h:mm")
        .replace(",", " в");
    },
  },
  mounted() {
    console.log(this.formatDate);
  },
  props: {
    title: String,
    date: String,
    type: String,
    fortuna: Boolean,
    city: String,
    poster: Object,
    age: String,
    price: Number,
  },
};
</script>

<style scoped>
.left-gradient {
  background: linear-gradient(
    90deg,
    #000000 0%,
    #000000 41.53%,
    rgba(0, 0, 0, 0.62) 62.52%,
    rgba(0, 0, 0, 0) 86.46%
  );
}

.bottom-gradient {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
}
</style>
