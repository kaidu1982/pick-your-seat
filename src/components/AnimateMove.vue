<template>
    <div class="character" :style="{ width: props.width + 'px', height: props.height + 'px' }">
        <img class="svg-1" :src="svgPath1" v-show="isFirst" />
        <img class="svg-2" :src="svgPath2" v-show="isSecond" />
        <img class="svg-3" :src="svgPath3" v-show="isThird" />
        <img class="svg-4" :src="svgPath4" v-show="isFourth" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { MEMBER_ACTION, type Action, type MemberName } from '@/components/types';

const animateIndex = ref(0);

const isFirst = computed(() => animateIndex.value === 0);
const isSecond = computed(() => animateIndex.value === 1);
const isThird = computed(() => animateIndex.value === 2);
const isFourth = computed(() => animateIndex.value === 3);

const leftOrRight = computed(() => props.action === MEMBER_ACTION.LEFT || props.action === MEMBER_ACTION.RIGHT);


const props = defineProps<{
    name: MemberName;
    action: Action;
    width: number;
    height: number;
}>();

setInterval(() => {
    if (animateIndex.value >= 3) {
        animateIndex.value = 0;
    } else {
        animateIndex.value++;
    }
}, 300);

const svgPath1 = computed(() => `./animate/${props.name}_${props.action}_1.svg`);
const svgPath2 = computed(() => `./animate/${props.name}_${props.action}_2.svg`);
const svgPath3 = computed(() => leftOrRight.value ? `./animate/${props.name}_${props.action}_3.svg` : `./animate/${props.name}_${props.action}_1.svg`);
const svgPath4 = computed(() => leftOrRight.value ? `./animate/${props.name}_${props.action}_4.svg` : `./animate/${props.name}_${props.action}_2.svg`);
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
        z-index: 10;
    }
    

}
</style>
