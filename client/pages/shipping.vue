<template>
    <div class="space-y-[20px] lg:space-y-[40px]">
        <h2 class="uppercase lg:text-[40px] font-bold">{{ data.title }}</h2>
        <div class="space-y-[20px]">
            <p class="lg:text-[18px] font-medium" v-for="block in data.blocks" :key="block.id">
                {{ block.desc }}
            </p>
        </div>
    </div>
</template>

<script>
import { customerServicesShippingData } from '../assets/customer-services';

export default {
    layout: 'customer',
    data() {
        return {
            data: customerServicesShippingData,
        }
    },
}
</script>

<style  scoped>

</style>