<template>
  <div>
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
    <div
      class="px-[15px] lg:px-0 lg:bg-transparent py-[20px] lg:py-0 lg:mt-[23px] flex items-center justify-between cursor-pointer lg:cursor-auto lg:hidden"
    >
      <p class="lg:text-xl font-semibold">Итого:</p>
      <p class="lg:text-xl font-semibold">{{ orderTotal }} ₽</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartValue: Number,
    orderTotal: Number,
    shippingCost: {
      type: [Number, String],
    },
  },
};
</script>

<style lang="scss" scoped></style>
