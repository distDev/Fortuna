<template>
    <form class="w-full lg:w-[615px] space-y-[30px]" v-if="isBrowser" @submit.prevent="handleSubmit">
        <div class="space-y-[15px]">
            <h3 class="font-medium text-lg">Заявка</h3>
            <Select v-model="$v.request.$model" :errors="requestErrors" :error-status="$v.request.$error">
                <option v-for="req in reqData" :key="req.id" :value="req.value" :disabled="req.disabled">
                    {{ req.text }}
                </option>
            </Select>
        </div>
        <div class="space-y-[15px]">
            <h3 class="font-medium text-lg">Контактные данные</h3>
            <div class="flex flex-col lg:flex-row space-y-[15px] lg:space-y-0  lg:space-x-[15px]">
                <Input @blur="$v.name.$touch()" v-model.trim="$v.name.$model" placeholder="Ваше имя" type="text"
                    :errors="nameErrors" :error-status="$v.name.$error" />
                <Input @blur="$v.email.$touch()" v-model.trim="$v.email.$model" placeholder="Ваш email" type="email"
                    :errors="emailErrors" :error-status="$v.email.$error" />
            </div>
        </div>
        <div class="space-y-[15px]">
            <h3 class="font-medium text-lg">Тема</h3>
            <Input @blur="$v.subject.touch()" v-model.trim="$v.subject.$model" placeholder="Тема обращения" type="text"
                :errors="subjectErrors" :error-status="$v.subject.$error" />
        </div>
        <div class="space-y-[15px]">
            <h3 class="font-medium text-lg">Сообщение</h3>
            <Textarea @blur="$v.message.touch()" v-model.trim="$v.message.$model" :errors="messageErrors"
                :error-status="$v.message.$error" />
        </div>
        <div class="flex justify-center pt-[20px]">
            <button type="submit"
                class="bg-black text-white  py-[15px] lg:px-[60px] w-full lg:w-auto disabled:bg-[#97999B]"
                :disabled="$v.$invalid">
                Отправить
            </button>
        </div>
    </form>
</template>

<script>
import Input from '../../components/UI/Input.vue'
import { required, email, minLength } from 'vuelidate/lib/validators'
import Select from '../UI/Select.vue'
import Textarea from '../UI/Textarea.vue'

export default {
    data() {
        return {
            request: '',
            name: '',
            email: '',
            subject: '',
            message: '',
            isBrowser: false,
            reqData: [
                {
                    id: '1',
                    value: '',
                    text: 'Чем мы можем вам помочь?',
                    disabled: true,
                },
                {
                    id: '2',
                    value: 'Где мой заказ?',
                    text: 'Где мой заказ?',
                    disabled: false,
                },
                {
                    id: '3',
                    value: 'Изменение адреса/заказа',
                    text: 'Могу ли я изменить/отменить мой заказ или изменить адрес?',
                    disabled: false,
                },
                {
                    id: '4',
                    value: 'Другой вопрос',
                    text: 'Другой вопрос',
                    disabled: false,
                },
            ],
        }
    },
    methods: {
        handleSubmit() {
            console.log(`Заявка: ${this.request}, Имя: ${this.name}, Email: ${this.email}, Тема: ${this.subject}, Сообщение: ${this.message}, `)
        }
    },
    computed: {
        requestErrors() {
            const errors = []
            if (!this.$v.request.required) {
                errors.push('Обязательное поле')
            }
            return errors
        },
        nameErrors() {
            const errors = []
            if (!this.$v.name.required) {
                errors.push('Обязательное поле')
            }
            if (!this.$v.name.minLength) {
                errors.push('Слишком короткое имя')
            }
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.email.required) {
                errors.push('Обязательное поле')
            }
            if (!this.$v.email.email) {
                errors.push('Неправильный email')
            }
            return errors
        },
        subjectErrors() {
            const errors = []
            if (!this.$v.subject.required) {
                errors.push('Обязательное поле')
            }
            return errors
        },
        messageErrors() {
            const errors = []
            if (!this.$v.message.required) {
                errors.push('Обязательное поле')
            }
            if (!this.$v.message.minLength) {
                errors.push('Слишком мало символов')
            }
            return errors
        },
    },
    validations: {
        request: {
            required,
        },
        name: {
            required,
            minLength: minLength(4)
        },
        email: {
            required,
            email
        },
        subject: {
            required,

        },
        message: {
            required,
            minLength: minLength(10)
        },
    },
    mounted() {
        this.isBrowser = process.browser
    },
    components: {
        Input,
        Select,
        Textarea
    },
}
</script>
