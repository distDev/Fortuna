<template>
  <div>
    <div class="burger-menu block lg:hidden" @click="show = !show">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="fill-white h-[14px] w-[20px]"
      />
    </div>
    <Teleport to="body">
      <Transition name="menu">
        <div
          v-if="show"
          class="flex justify-end absolute top-0 right-0 w-[90%] h-[100vh] z-[150]"
        >
          <div class="w-full h-full bg-black z-30 p-[25px] relative">
            <div
              class="absolute right-[15px] top-[15px] burger-menu-close"
              @click="show = !show"
            >
              <font-awesome-icon :icon="['fas', 'xmark']" class="fill-white" />
            </div>
            <nav class="mt-[140px] text-white">
              <ul class="flex flex-col space-y-[30px]">
                <li
                  v-for="i in links"
                  :key="i.name"
                  class="text-lg font-bold"
                  @click="() => handleNavigate(i.path)"
                >
                  {{ i.name }}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Transition>
      <div
        v-if="show"
        class="absolute left-0 top-0 w-full h-[100vh] bg-black opacity-50 z-90"
        @click="show = !show"
      ></div>
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
  methods: {
    handleNavigate(path) {
      this.$router.push({ path });
      this.show = !this.show;
    },
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

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}
.menu-enter,
.menu-leave-to {
  transform: translateX(100%);
}
</style>
