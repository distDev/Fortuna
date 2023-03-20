<template>
    <div class="space-y-[40px]">
        <div class="space-y-[20px]">
            <h2 class="uppercase lg:text-[20px] font-bold">{{ data.title }}</h2>
            <p class="lg:text-[18px] font-medium" v-for="i in data.blocks" :key="i.id">{{ i.desc }}</p>
        </div>
        <div v-for="item in data.content" :key="item.id" class="space-y-[20px]">
            <div class="flex space-x-[10px]">

                <div>
                    <h2 class="uppercase lg:text-[20px] font-bold lg:max-w-[800px]">
                        {{ item.id + '. &nbsp' + item.title }}
                    </h2>
                </div>
            </div>

            <ul class="space-y-[20px]">
                <li v-for="block in item.blocks" :key="block.id" class=" flex lg:space-x-[10px]">

                    <div>
                        <p class="lg:text-[18px] font-medium">
                            {{ block.id + '&nbsp &nbsp;' + block.desc }}
                        </p>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { customerServicesPrivacyPolicy } from '../assets/customer-services';

export default {
    layout: 'customer',
    data() {
        return {
            data: customerServicesPrivacyPolicy,
        }
    },
}
</script>

<style  scoped>

</style>