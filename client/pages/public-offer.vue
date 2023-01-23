<template>
    <div class="space-y-[40px]">
        <div class="space-y-[20px]">
            <h2 class="uppercase lg:text-[20px] font-bold">{{ data.title }}</h2>
            <p class="lg:text-[18px] font-medium">{{ data.desc }}</p>
        </div>
        <div v-for="item in data.content" :key="item.id" class="space-y-[20px]">
            <h2 class="uppercase lg:text-[20px] font-bold">{{ item.id + '. &nbsp' + item.title }}</h2>
            <ul class="space-y-[20px]">
                <li v-for="block in item.blocks" :key="block.id"
                    class="lg:text-[18px] font-medium flex lg:space-x-[10px]">

                    <div>
                        <p>
                            {{ block.id + '&nbsp &nbsp;' + block.desc }}
                        </p>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { customerServicesPublicData } from '../assets/customer-services';

export default {
    layout: 'customer',
    data() {
        return {
            data: customerServicesPublicData,
        }
    },
}
</script>

<style  scoped>

</style>