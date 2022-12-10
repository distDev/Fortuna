<template>
  <input
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full border-[1px] bg-transparent border-[#97999B] p-4 lg:rounded-[4px] text-black placeholder:text-[#97999B] lg:text-sm"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    type: String,
    error: Boolean,
    sucess: Boolean,
    modelValue: String,
    placeholder: String,
  },
  emits: ["update:modelValue"],
};
</script>

<style lang="scss" scoped></style>
