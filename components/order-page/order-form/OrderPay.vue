<template>
  <client-ony>
    <Teleport to="body" name="pay-form">
      <div
        class="fixed top-0 left-0 w-full h-[100vh] bg-black/70 flex justify-center items-center z-[200]"
      >
        <div id="payment-form"></div>
        <button
          class="absolute right-[60px] top-[60px] text-white hover:text-primary close-btn"
          @click="$emit('close')"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" heigth="50px" />
        </button>
      </div>
    </Teleport>
  </client-ony>
</template>

<script>
export default {
  mounted() {
    const vm = this;
    const options = {
      account: this.$config.paymentAccountId,
      amount: this.totalCost,
      transactionId: this.$nanoid(),
      theme: "dark",
    };

    const assistant = new Assistant.Builder();

    // платёж прошёл успешно
    assistant.setOnSuccessCallback(function (operationId, transactionId) {
      vm.$emit("form-submit", transactionId);
    });

    // платёж не прошёл
    assistant.setOnFailCallback(function (operationId, transactionId) {
      this.$toast.error("Произошла ошибка при оплате");
    });

    // платёж обрабатывается
    assistant.setOnInProgressCallback(function (operationId, transactionId) {});

    assistant.build(options, "payment-form");
  },

  emits: ["form-submit"],

  props: {
    totalCost: Number,
  },
};
</script>

<style scoped>
.close-btn svg {
  height: 35px;
  width: 35px;
}
</style>
