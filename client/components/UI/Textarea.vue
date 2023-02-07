<template>
  <div class="w-full space-y-[10px]">
    <textarea
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="w-full p-2 border-[1px]"
      name="message"
      cols="30"
      rows="10"
      :class="statusStyles"
    >
    </textarea>
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
