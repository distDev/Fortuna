<template>
  <div class="w-full">
    <div
      @click="handleChangeVisible"
      class="flex justify-between items-center py-[10px] w-full hover:cursor-pointer hover:text-[#8B5CF6]"
    >
      <h2 class="uppercase text-[18px] xs:text-[14px] font-bold">
        {{ title }}
      </h2>
      <font-awesome-icon :class="rotateStyle" :icon="['fas', 'arrow-down']" />
    </div>
    <Transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
      >>
      <div v-if="isVisible" class="flex flex-col space-y-[20px]">
        <div
          v-for="block in blocks"
          :key="block.id"
          class="space-y-[20px] flex flex-col"
        >
          <p class="text-lg xs:text-base">
            {{ block.desc }}
          </p>
          <ul v-if="block.subBlocks" class="space-y-[10px]">
            <li
              v-for="subblock in block.subBlocks"
              :key="subblock.id"
              class="text-lg xs:text-base"
            >
              {{ subblock.desc }}
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleChangeVisible() {
      this.isVisible = !this.isVisible;
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },

  computed: {
    checkVisible() {
      return !this.isVisible ? "hidden" : "flex";
    },
    rotateStyle() {
      return !this.isVisible ? "rotate-0" : "rotate-180";
    },
  },
  props: {
    title: String,
    blocks: Array,
  },
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
