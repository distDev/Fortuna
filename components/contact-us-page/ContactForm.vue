<template>
  <form
    class="w-full lg:w-[615px] space-y-[30px]"
    v-if="isBrowser"
    @submit.prevent="handleSubmit"
  >
    <div class="space-y-[15px]">
      <h3 class="font-medium text-lg">Заявка</h3>
      <Select v-model="$v.request.$model">
        <option
          v-for="req in reqData"
          :key="req.id"
          :value="req.value"
          :disabled="req.disabled"
        >
          {{ req.text }}
        </option>
      </Select>
    </div>
    <div class="space-y-[15px]">
      <h3 class="font-medium text-lg">Контактные данные</h3>
      <div
        class="flex flex-col lg:flex-row space-y-[15px] lg:space-y-0 lg:space-x-[15px]"
      >
        <Input
          @change="$v.name.$touch()"
          v-model.trim="name"
          placeholder="Ваше имя"
          type="text"
        />
        <Input
          @change="$v.email.$touch()"
          v-model.trim="email"
          placeholder="Ваш email"
          type="email"
        />
      </div>
    </div>
    <div class="space-y-[15px]">
      <h3 class="font-medium text-lg">Тема</h3>
      <Input
        @change="$v.subject.$touch()"
        v-model.trim="subject"
        placeholder="Тема обращения"
        type="text"
      />
    </div>
    <div class="space-y-[15px]">
      <h3 class="font-medium text-lg">Сообщение</h3>
      <Textarea @change="$v.message.$touch()" v-model.trim="message" />
    </div>
    <div class="flex justify-center pt-[20px]">
      <button
        type="submit"
        class="bg-black text-white py-[15px] lg:px-[60px] w-full lg:w-auto disabled:bg-grey"
        :disabled="$v.$invalid"
      >
        Отправить
      </button>
    </div>
  </form>
</template>

<script>
import Input from "../../components/UI/Input.vue";
import { required, email, minLength } from "vuelidate/lib/validators";
import Select from "../UI/Select.vue";
import Textarea from "../UI/Textarea.vue";

export default {
  data() {
    return {
      request: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      isBrowser: false,
      reqData: [
        {
          id: "1",
          value: "",
          text: "Чем мы можем вам помочь?",
          disabled: true,
        },
        {
          id: "2",
          value: "Где мой заказ?",
          text: "Где мой заказ?",
          disabled: false,
        },
        {
          id: "3",
          value: "Изменение адреса/заказа",
          text: "Могу ли я изменить/отменить мой заказ или изменить адрес?",
          disabled: false,
        },
        {
          id: "4",
          value: "Другой вопрос",
          text: "Другой вопрос",
          disabled: false,
        },
      ],
    };
  },
  methods: {
    async handleSubmit() {
      await this.tgMessage();
      this.$toast.success("Заявка успешно отправлена");

      this.request = "";
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },

    // Отправка данных в telegram
    async tgMessage() {
      try {
        await this.$axios.$post(
          `https://api.telegram.org/bot${this.$config.tgApiKey}/sendMessage?chat_id=${this.$config.tgChatId}&text=Тип заявки: ${this.subject}%0AТема обращения: ${this.request}%0AИмя: ${this.name}%0AПочта: ${this.email}%0AСообщение: ${this.message}`
        );
      } catch (error) {
        console.error(error);
        throw new Error("Ошибка при отправке сообщения в Telegram");
      }
    },
  },
  computed: {
    requestErrors() {
      const errors = [];
      if (!this.$v.request.required) {
        errors.push("Обязательное поле");
      }
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.required) {
        errors.push("Обязательное поле");
      }
      if (!this.$v.name.minLength) {
        errors.push("Слишком короткое имя");
      }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.required) {
        errors.push("Обязательное поле");
      }
      if (!this.$v.email.email) {
        errors.push("Неправильный email");
      }
      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.subject.required) {
        errors.push("Обязательное поле");
      }
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.required) {
        errors.push("Обязательное поле");
      }
      if (!this.$v.message.minLength) {
        errors.push("Слишком мало символов");
      }
      return errors;
    },
  },
  validations: {
    request: {
      required,
    },
    name: {
      required,
      minLength: minLength(4),
      $lazy: true,
    },
    email: {
      required,
      email,
    },
    subject: {
      required,
    },
    message: {
      required,
      minLength: minLength(10),
    },
  },
  mounted() {
    this.isBrowser = process.browser;
  },
  components: {
    Input,
    Select,
    Textarea,
  },
};
</script>
