<template>
  <div class="space-y-[10px]">
    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="h-[50px] w-full px-2 border-[1px]"
      :class="statusStyles"
    >
      <slot></slot>
    </select>
    <p v-if="errorStatus" class="text-red-500">{{ errors[0] }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errors: Array,
    sucess: Boolean,
    value: String,
    errorStatus: Boolean,
  },
  computed: {
    statusStyles() {
      if (this.errorStatus) {
        return "border-red-500 text-red-500";
      }
      if (!this.errorStatus && this.value.length > 3) {
        return "bg-white border-black text-black";
      }
      return "text-black placeholder:text-[#97999B] border-[#97999B]";
    },
  },
};
</script>
