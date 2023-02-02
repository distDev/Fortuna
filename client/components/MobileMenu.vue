<template>
  <div>
    <div class="burger-menu block lg:hidden" @click="show = !show">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="fill-white h-[14px] w-[20px]"
      />
    </div>
    <Teleport to="body">
      <div
        v-if="show"
        class="flex justify-end absolute top-0 right-0 w-full h-[100vh] z-[150]"
      >
        <div class="w-[90%] h-full bg-black z-30 p-[25px] relative">
          <!-- Закрывающая иконка -->
          <div
            class="absolute right-[15px] top-[15px] burger-menu-close"
            @click="show = !show"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" class="fill-white" />
          </div>
          <div class="flex flex-col space-y-[30px] mt-[140px] text-white">
            <NuxtLink
              v-for="i in links"
              :key="i.name"
              :to="i.path"
              class="text-lg font-bold"
              >{{ i.name }}</NuxtLink
            >
          </div>
        </div>
        <div
          class="absolute left-0 top-0 w-full h-full bg-black opacity-50 z-20"
          @click="show = !show"
        ></div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { headerLinks } from "../assets/nav-data";

export default {
  data() {
    return {
      show: false,
      links: headerLinks,
    };
  },
};
</script>

<style scoped>
.burger-menu svg {
  color: white;
  height: 18px;
  width: 28px;
}
.burger-menu-close svg {
  width: 20px;
  height: 20px;
}
</style>
