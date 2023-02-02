<template>
    <div class="w-full">
        <div @click="handleChangeVisible"
            class="flex justify-between items-center w-full hover:cursor-pointer hover:text-[#8B5CF6]">
            <h2 class="uppercase text-[18px] font-bold">{{ title }}</h2>
            <font-awesome-icon class="w-full" :class="rotateStyle" :icon="['fas', 'arrow-down']" />
        </div>
        <div :class="checkVisible" class="flex flex-col space-y-[20px] py-[20px]">
            <div v-for="block in blocks" :key="block.id" class="space-y-[20px] flex flex-col">
                <p class="text-lg">
                    {{ block.desc }}
                </p>
                <ul v-if="block.subBlocks" class="space-y-[10px]">
                    <li v-for="subblock in block.subBlocks" :key="subblock.id" class="text-lg">
                        {{ subblock.desc }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
        }
    },
    methods: {
        handleChangeVisible() {
            this.isVisible = !this.isVisible;
        }
    },
    computed: {
        checkVisible() {
            return !this.isVisible ? "hidden" : "flex";
        },
        rotateStyle() {
            return !this.isVisible ? "rotate-0" : "rotate-180";
        }
    },
    props: {

        title: String,
        blocks: Array,
    }
}
</script>

<style lang="scss" scoped>

</style>