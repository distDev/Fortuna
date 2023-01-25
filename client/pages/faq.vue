<template>
    <div class="flex flex-col space-y-[40px] w-full">
        <FaqItem :visible="checkVisible" v-for="item in data" :key="item.id" :blocks="item.blocks"
            :title="item.title" />
    </div>
</template>

<script>
import FaqItem from '../components/faq/FaqItem.vue';
import { customerServicesFaqDara } from '../assets/customer-services'


export default {
    layout: "customer",
    data() {
        return {
            data: customerServicesFaqDara,

        };
    },

    components: { FaqItem }
}
</script>

<style lang="scss" scoped>

</style>