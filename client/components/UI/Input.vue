<template>
  <div class="w-full space-y-[10px]">
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="w-full border-[1px] bg-transparent p-4 lg:text-sm placeholder:text-[#97999B]"
      :placeholder="placeholder"
      :class="statusStyles"
    />
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
    placeholder: String,
  },
  computed: {
    statusStyles() {
      if (this.errorStatus) {
        return "border-red-500 text-red-500";
      }
      if (!this.errorStatus && this.value.length > 3) {
        return "bg-white border-black text-black";
      }
      return "text-black  border-[#BBB5D8]";
    },
  },
};
</script>
