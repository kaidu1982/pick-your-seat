<template>
    <img :src="svgPath" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { MemberName } from '@/components/types';

const props = defineProps<{
    name: MemberName | null;
    direction: 'top' | 'bottom';
}>();

const computedName = computed(() => (props.name === null ? 'empty' : props.name));
const svgPath = computed(() => `./seat/${computedName.value}_${props.direction}.svg`);
</script>

<style scoped>
.character {
    width: fit-content;
    height: fit-content;
}
</style>
