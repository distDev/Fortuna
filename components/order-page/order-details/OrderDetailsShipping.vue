<template>
  <div
    class="px-[15px] lg:px-0 mt-[23px] pb-[23px] space-y-[15px] border-b-[1px] border-b-[#ECECEC]"
  >
    <div class="flex justify-between">
      <p>Товары ({{ cartValue }})</p>
      <p>{{ orderTotal }} ₽</p>
    </div>
    <div class="flex justify-between">
      <p>Доставка</p>
      <p>
        {{
          typeof shippingCost === "number" ? shippingCost + "₽" : shippingCost
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartValue: Number,
    orderTotal: Number,
    shippingCost: Number || String,
  },
};
</script>

<style lang="scss" scoped></style>
