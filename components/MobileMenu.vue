<template>
  <div>
    <button class="burger-menu block lg:hidden" @click="isOpen = !isOpen">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="fill-white h-[14px] w-[20px]"
      />
    </button>
    <client-only>
      <Teleport to="body" name="menu">
        <Transition name="menu">
          <div
            v-if="isOpen"
            class="flex justify-end absolute top-0 right-0 w-[90%] h-[100vh] z-[150]"
          >
            <div
              class="flex items-center w-full h-full bg-black z-30 p-[25px] relative"
            >
              <div
                class="absolute right-[15px] top-[15px] burger-menu-close"
                @click="isOpen = !isOpen"
              >
                <font-awesome-icon
                  :icon="['fas', 'xmark']"
                  class="fill-white"
                />
              </div>
              <nav class="text-white">
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
          v-if="isOpen"
          class="absolute left-0 top-0 w-full h-[100vh] bg-black opacity-50 z-90"
          @click="isOpen = !isOpen"
        ></div>
      </Teleport>
    </client-only>
  </div>
</template>

<script>
import { mobileMenuLinks } from "../assets/nav-data";

export default {
  data() {
    return {
      isOpen: false,
      links: mobileMenuLinks,
    };
  },

  methods: {
    handleNavigate(path) {
      this.$router.push({ path });
      this.isOpen = !this.isOpen;
    },
  },

  watch: {
    isOpen: function () {
      if (this.isOpen) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
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
