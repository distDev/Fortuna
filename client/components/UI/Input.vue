<template>
  <input :value="value" @input="$emit('input', $event.target.value)"
    class="w-full border-[1px] bg-transparent border-[#97999B] p-4 lg:rounded-[4px] text-black placeholder:text-[#97999B] lg:text-sm" />
</template>

<script>
export default {
  props: {
    error: Boolean,
    sucess: Boolean,
    value: String,
  },
};
</script>
