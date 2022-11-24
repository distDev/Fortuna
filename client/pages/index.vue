<template>
  <div class="space-y-[90px] h-auto flex flex-col">
    <!-- Главный банер -->
    <div
      class="w-full h-[90vh] overflow-hidden relative flex justify-center items-end"
    >
      <div class="w-full h-full absolute top-0 bg-black opacity-40 z-10"></div>
      <div class="h-[240px] w-full absolute bottom-0 z-30 linear-bg"></div>
      <img
        src="~assets/images/main-banner.jpg"
        alt=""
        class="w-full h-full object-cover absolute top-0 z-0"
      />

      <div class="flex flex-col relative mb-14">
        <h1
          class="text-white text-5xl font-bold leading-[63px] text-center uppercase"
        >
          солнечный дуэт <br />“Fortuna”
        </h1>
        <div class="flex justify-center z-40">
          <button
            class="uppercase text-lg font-medium bg-white py-4 px-12 mt-[100px]"
          >
            Подробнее о нас
          </button>
        </div>
      </div>
    </div>

    <!-- Популярное -->
    <div class="flex flex-col items-center justify-center px-10">
      <h2 class="uppercase font-bold text-[36px] mb-[50px]">Популярное</h2>
      <ProductCards class="m" />
    </div>

    <!-- Последние новости -->
    <div class="bg-black px-5 py-20 flex flex-col items-center justify-center">
      <h2 class="uppercase text-white font-bold text-[36px] mb-[60px]">
        Последние новости
      </h2>
      <div class="flex flex-col">
        <div class="flex flex-col space-y-[30px]">
          <div v-for="news in newsData" :key="news.id">
            <p class="text-gray-500 uppercase font-medium text-sm mb-[15px]">
              {{ news.date }}
            </p>
            <NuxtLink
              to="news/1"
              class="text-white uppercase font-bold text-[28px] hover:text-violet-500"
              >{{ news.title.slice(0, 55) + "..." }}</NuxtLink
            >
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="uppercase text-lg font-medium text-white border-[1px] border-white py-4 px-12 mt-[60px]"
          >
            Показать еще
          </button>
        </div>
      </div>
    </div>

    <!-- Футболки -->
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center px-10">
        <h2 class="uppercase font-bold text-[36px] mb-[50px]">Футболки</h2>
        <ProductCards class="m" />
      </div>
      <div class="bg-violet-500 w-full h-[50px] mt-[80px]"></div>
    </div>

    <!-- Новые видео -->
    <div class="flex flex-col items-center justify-center px-10">
      <h2 class="uppercase font-bold text-[36px] mb-[50px]">Новые видео</h2>
      <div class="grid grid-cols-3 gap-[20px] w-full">
        <div class="bg-black h-[275px] relative">
          <img
            src="~assets/images/dance.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute top-0 opacity-40 bg-black w-full h-full"></div>
        </div>
        <div class="bg-black h-[275px] relative">
          <img
            src="~assets/images/dance.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute top-0 opacity-40 bg-black w-full h-full"></div>
        </div>
        <div class="bg-black h-[275px] relative">
          <img
            src="~assets/images/dance.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute top-0 opacity-40 bg-black w-full h-full"></div>
        </div>
        <div class="bg-black h-[275px] relative">
          <img
            src="~assets/images/dance.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute top-0 opacity-40 bg-black w-full h-full"></div>
        </div>
        <div class="bg-black h-[275px] relative">
          <img
            src="~assets/images/dance.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute top-0 opacity-40 bg-black w-full h-full"></div>
        </div>
        <div class="bg-black h-[275px] relative">
          <img
            src="~assets/images/dance.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute top-0 opacity-40 bg-black w-full h-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { miniNewsData } from "../assets/mini-news-data";
import ProductCards from "../components/ProductCards.vue";

export default {
  name: "IndexPage",
  head: {
    title: "Коллектив Фортуна",
  },
  data() {
    return {
      newsData: miniNewsData,
    };
  },
  components: { ProductCards },
};
</script>

<style scoped>
.linear-bg {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
}
</style>
