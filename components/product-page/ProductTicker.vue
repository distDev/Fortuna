<template>
  <div
    class="py-[16px] lg:py-[20px] bg-black w-full mt-[80px] lg:mt-[130px] mb-[50px] lg:mb-[80px] overflow-hidden"
  >
    <div
      class="max-w-[1440px] m-auto flex items-center lg:justify-between lg:px-[130px] text-white ticker-item"
    >
      <p
        class="text-base xs:text-sm font-semibold xs:font-medium uppercase whitespace-nowrap shrink-0 px-[20px]"
      >
        🔒 безопасная оплата
      </p>
      <p
        class="text-base xs:text-sm font-semibold xs:font-medium uppercase whitespace-nowrap shrink-0 px-[20px]"
      >
        🚀 быстрая доставка
      </p>
      <p
        class="text-base xs:text-sm font-semibold xs:font-medium uppercase whitespace-nowrap shrink-0 px-[20px]"
      >
        📦 бесплатная доставка от 5 000₽
      </p>
      <p
        class="text-base xs:text-sm font-semibold xs:font-medium uppercase whitespace-nowrap shrink-0 px-[20px] block lg:hidden"
      >
        🔒 безопасная оплата
      </p>
      <p
        class="text-base xs:text-sm font-semibold xs:font-medium uppercase whitespace-nowrap shrink-0 px-[20px] block lg:hidden"
      >
        🚀 быстрая доставка
      </p>
      <p
        class="text-base xs:text-sm font-semibold xs:font-medium uppercase whitespace-nowrap shrink-0 px-[20px] block lg:hidden"
      >
        📦 бесплатная доставка от 5 000₽
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 768px) {
  .ticker-item {
    animation: ticker 12s linear infinite;
  }

  @keyframes ticker {
    0% {
      transform: translateZ(0);
    }
    100% {
      transform: translate3d(-214%, 0, 0);
    }
  }
}
@media (max-width: 391px) {
  .ticker-item {
    animation: ticker 12s linear infinite;
  }

  @keyframes ticker {
    0% {
      transform: translateZ(0);
    }
    100% {
      transform: translate3d(-225%, 0, 0);
    }
  }
}
@media (max-width: 376px) {
  .ticker-item {
    animation: ticker 12s linear infinite;
  }

  @keyframes ticker {
    0% {
      transform: translateZ(0);
    }
    100% {
      transform: translate3d(-210%, 0, 0);
    }
  }
}
@media (max-width: 321px) {
  .ticker-item {
    animation: ticker 12s linear infinite;
  }

  @keyframes ticker {
    0% {
      transform: translateZ(0);
    }
    100% {
      transform: translate3d(-243%, 0, 0);
    }
  }
}
</style>
