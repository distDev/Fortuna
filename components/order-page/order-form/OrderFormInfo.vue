<template>
  <div class="w-full lg:w-[617px] lg:mr-[50px] space-y-[50px]">
    <div class="space-y-[20px]">
      <h4 class="text-base font-medium">Контактная иформация</h4>
      <div class="space-y-[15px]">
        <Input
          placeholder="Номер телефона"
          type="number"
          :error-status="$v.phone.$error"
          :errors="phoneErrors"
          v-model.trim.number="phone"
          @change="$v.phone.$touch()"
        />
        <Input
          placeholder="Имя получателя"
          type="text"
          :error-status="$v.name.$error"
          :errors="nameErrors"
          v-model.trim="name"
          @change="$v.name.$touch()"
        />
      </div>
    </div>
    <div class="space-y-[20px]">
      <h4 class="text-base font-medium">Адрес получения</h4>
      <div class="space-y-[15px]">
        <Input
          placeholder="Край/Область"
          type="text"
          :error-status="$v.region.$error"
          :errors="regionErrors"
          v-model.trim="region"
          @change="$v.region.$touch()"
        />
        <Input
          placeholder="Город"
          type="text"
          :error-status="$v.city.$error"
          :errors="cityErrors"
          v-model.trim="city"
          @change="$v.city.$touch()"
        />
        <Input
          placeholder="Адрес"
          type="text"
          :error-status="$v.address.$error"
          :errors="addressErrors"
          v-model.trim="address"
          @change="$v.address.$touch()"
        />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
          <Input
            placeholder="Квартира"
            type="text"
            :error-status="$v.apart.$error"
            :errors="apartErrors"
            v-model.trim="apart"
            @change="$v.apart.$touch()"
          />
          <Input
            placeholder="Индекс"
            type="text"
            :error-status="$v.postal.$error"
            :errors="postalErrors"
            v-model.trim="postal"
            @change="$v.postal.$touch()"
          />
        </div>
      </div>
    </div>
    <div class="w-full flex lg:justify-end">
      <button
        @click="
          () => handleAddInfo(name, phone, region, city, apart, postal, address)
        "
        class="bg-black w-full lg:w-auto text-white py-[15px] lg:px-[30px] font-medium lg:text-base disabled:bg-grey"
        :disabled="$v.$invalid"
      >
        Продолжить заказ
      </button>
    </div>
  </div>
</template>

<script>
import Input from "../../UI/Input.vue";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      phone: "",
      region: "",
      city: "",
      apart: "",
      postal: "",
      address: "",
      isBrowser: false,
    };
  },

  methods: {
    handleAddInfo(name, phone, region, city, apart, postal, address) {
      this.$emit("get-info", {
        name,
        phone,
        region,
        city,
        apart,
        postal,
        address,
      });
    },
  },

  computed: {
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
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.required) {
        errors.push("Обязательное поле");
      }
      if (!this.$v.phone.minLength) {
        errors.push("Слишком короткий номер");
      }
      if (!this.$v.phone.maxLength) {
        errors.push("Слишком длинный номер");
      }
      return errors;
    },
    regionErrors() {
      const errors = [];
      if (!this.$v.region.required) {
        errors.push("Обязательное поле");
      }
      if (!this.$v.region.minLength) {
        errors.push("Слишком короткий регион");
      }
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.city.required) {
        errors.push("Обязательное поле");
      }
      if (!this.$v.city.minLength) {
        errors.push("Слишком короткий город");
      }
      return errors;
    },
    apartErrors() {
      const errors = [];
      if (!this.$v.apart.required) {
        errors.push("Обязательное поле");
      }

      return errors;
    },
    postalErrors() {
      const errors = [];
      if (!this.$v.postal.required) {
        errors.push("Обязательное поле");
      }
      if (!this.$v.postal.minLength) {
        errors.push("Слишком короткий индекс");
      }
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.address.required) {
        errors.push("Обязательное поле");
      }
      if (!this.$v.address.minLength) {
        errors.push("Слишком короткий адрес");
      }
      return errors;
    },
  },

  validations: {
    name: {
      required,
      minLength: minLength(2),
    },
    phone: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(12),
    },
    region: {
      required,
      minLength: minLength(4),
    },
    city: {
      required,
      minLength: minLength(3),
    },
    apart: {
      required,
    },
    postal: {
      required,
      minLength: minLength(6),
    },
    address: {
      required,
      minLength: minLength(4),
    },
  },

  mounted() {
    this.isBrowser = process.browser;
  },

  props: {},

  emits: ["get-info"],

  components: { Input },
};
</script>

<style lang="scss" scoped></style>
