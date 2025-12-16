<template>
    <div class="character" :style="{ width: props.width + 'px', height: props.height + 'px' }">
        <img class="svg-1" :src="svgPath1" v-show="isFirst" />
        <img class="svg-2" :src="svgPath2" v-show="!isFirst" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Action, MemberName } from '@/components/types';

const isFirst = ref(true);

const props = defineProps<{
    name: MemberName;
    action: Action;
    width: number;
    height: number;
}>();

setInterval(() => {
    isFirst.value = !isFirst.value;
}, 300);

const svgPath1 = computed(() => `./animate/${props.name}_${props.action}_1.svg`);
const svgPath2 = computed(() => `./animate/${props.name}_${props.action}_2.svg`);
</script>

<style lang="scss" scoped>
.character {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        object-fit: contain;
        height: 100%;
        position: absolute;
    }
    .svg-1 {
        z-index: 10;
    }

    .svg-2 {
        z-index: 11;
    }

}
</style>
