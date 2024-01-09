<template>
    <div class="character" :style="{ width: props.width + 'px', height: props.height + 'px' }">
        <action :width="props.width" :height="props.height" />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, watchEffect } from 'vue';
import type { Action, MemberName } from '@/components/types';

const props = defineProps<{
    name: MemberName;
    action: Action;
    width: number;
    height: number;
}>();
let action = defineAsyncComponent(() => import(`./animate/${props.name}_${props.action}.vue`));

watchEffect(async () => {
    console.log('watchEffect define', props.action);
    action = defineAsyncComponent(() => import(`./animate/${props.name}_${props.action}.vue`));
});
</script>

<style scoped>
.character {
    width: fit-content;
    height: fit-content;
}
</style>
