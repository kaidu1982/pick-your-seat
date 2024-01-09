<template>
    <seat />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import type { MemberName } from '@/components/types';

const props = defineProps<{
    name: MemberName | null;
}>();

const computedName = computed(() => (props.name === null ? 'empty' : props.name));

const seat = defineAsyncComponent(() => import(`./seat/${computedName.value}_top.svg`));
</script>

<style scoped>
.character {
    width: fit-content;
    height: fit-content;
}
</style>
