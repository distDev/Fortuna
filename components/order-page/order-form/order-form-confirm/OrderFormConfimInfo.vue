<template>
  <div class="space-y-[20px]">
    <h4 class="text-base font-medium">Проверьте ваши данные</h4>
    <div class="border-[1px] border-grey rounded-[4px] px-[17px] lg:px-[15px]">
      <div
        class="flex justify-between items-start border-b-[1px] border-grey py-[11px] lg:py-[20px]"
      >
        <div class="flex flex-col lg:flex-row w-[84%]">
          <p class="mb-[5px] lg:mb-0 w-[17%] text-sm text-grey">Контакт</p>
          <p class="w-[83%] text-sm">{{ contactInfo.phone }}</p>
        </div>
        <div class="w-[16%] flex justify-end">
          <button @click="$emit('back')" class="text-xs text-grey">
            Изменить
          </button>
        </div>
      </div>
      <div class="flex justify-between items-start py-[11px] lg:py-[20px]">
        <div class="flex flex-col lg:flex-row w-[84%]">
          <p class="mb-[5px] lg:mb-0 w-[17%] text-sm text-grey">Адрес</p>
          <p class="w-[83%] text-sm">
            {{
              contactInfo.region +
              ", " +
              contactInfo.city +
              ", " +
              contactInfo.address +
              ", " +
              contactInfo.apart +
              ", " +
              contactInfo.postal
            }}
          </p>
        </div>
        <div class="w-[16%] flex justify-end">
          <button @click="$emit('back')" class="text-xs text-grey">
            Изменить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contactInfo: Object,
  },
};
</script>

<style lang="scss" scoped></style>
