<template>
  <div class="w-full flex justify-center">
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "../components/contact-us-page/ContactForm.vue";

export default {
  head: {
    title: 'Связаться с нами - Коллектив "Фортуна"',
  },
  layout: "customer",
  components: { ContactForm },
};
</script>

<style lang="scss" scoped></style>
