<template>
    <form class="w-full lg:w-[615px] space-y-[30px]">
        <div class="space-y-[15px]">
            <h3 class="font-medium text-lg">Заявка</h3>
            <select name="request" v-model="request"
                class="h-[50px] w-full px-2 border-[1px] border-[#97999B] text-black">
                <option value="" disabled>Чем мы можем помочь?</option>
                <option value="Где мой заказ?">Где мой заказ?</option>
                <option value="Могу ли я изменить/отменить мой заказ или изменить адрес?">Могу ли я изменить/отменить
                    мой заказ или адрес?</option>
                <option value="Другой вопрос">Другой вопрос</option>
            </select>
        </div>
        <div class="space-y-[15px]">
            <h3 class="font-medium text-lg">Контактные данные</h3>
            <div class="flex space-x-[15px]">
                <Input v-model="name" placeholder="Ваше имя" type="text" />
                <Input v-model="email" placeholder="Ваше имя" type="email" />
            </div>

        </div>
        <div class="space-y-[15px]">
            <h3 class="font-medium text-lg">Тема</h3>
            <Input v-model="subject" placeholder="Тема обращения" type="text" />
        </div>
        <div class="space-y-[15px]">
            <h3 class="font-medium text-lg">Сообщение</h3>
            <textarea v-model="message" class="w-full p-2 border-[1px] border-[#97999B] text-black" name="message"
                cols="30" rows="10"></textarea>
        </div>
    </form>
</template>

<script>
import Input from '../../components/UI/Input.vue'

export default {
    data() {
        return {
            request: '',
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    },
    components: {
        Input,
    },
}
</script>

<style lang="scss" scoped>

</style>