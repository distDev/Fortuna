<template>
  <div class="h-[calc(100vh-73px)] w-full flex justify-center items-center">
    <div
      class="h-[70vh] lg:h-auto space-y-[70px] lg:space-y-[80px] flex flex-col items-center justify-center"
    >
      <div class="h-[100px] w-[100px] lg:h-[110px] lg:w-[110px]">
        <img
          src="~assets/images/success-icon.svg"
          alt="Успешно"
          class="w-full h-full"
        />
      </div>
      <div class="space-y-6">
        <h2
          class="lg:text-3xl text-2xl font-semibold text-main-black text-center"
        >
          Поздравляем!
        </h2>
        <p class="lg:text-xl text-base text-grey text-center">
          У вас получился превосходный заказ, <br />
          скоро начнем его собирать
        </p>
      </div>

      <NuxtLink
        to="/"
        aria-label="Сссылка для перехода на главную страницу"
        class="w-full py-[20px] lg:px-[100px] bg-black text-white lg:text-base font-semibold rounded-lg text-center"
      >
        Отлично
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Заказ успешно оформлен - Коллектив "Фортуна"',
  },
};
</script>

<style lang="scss" scoped></style>
