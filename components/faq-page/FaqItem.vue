<template>
  <div class="w-full">
    <div
      @click="handleChangeVisible"
      class="flex justify-between items-center py-[10px] w-full hover:cursor-pointer hover:text-[#8B5CF6]"
    >
      <h2 class="uppercase text-[18px] xxs:text-[14px] xs:text-[14px] font-bold">
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
      <div
        v-if="isVisible"
        class="flex flex-col space-y-[20px] faq-content"
        v-html="faqContent"
      />
    </Transition>
  </div>
</template>

<script>
import { marked } from "marked";

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
    faqContent() {
      return marked(this.content);
    },
  },
  props: {
    title: String,
    content: String,
  },
};
</script>

<style>
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

.faq-content p {
  font-size: 18px;
  line-height: 30px;
  margin: 12px 0px;
  font-weight: 400;
}

.faq-content ul {
  list-style: inside;
}
.faq-content ul li {
  margin: 8px 0px;
  font-size: 18px;
}
.faq-content a {
  color: #8b5cf6;
}
</style>
