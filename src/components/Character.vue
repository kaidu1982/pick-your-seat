<template>
    <div class="character" :style="{ width: props.width + 'px', height: props.height + 'px' }">
        <img :src="svgPath" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type Action, MEMBER_ACTION, type MemberName } from '@/components/types';

const props = defineProps<{
    name: MemberName;
    action: Action;
    width: number;
    height: number;
}>();

const computedAction = computed(() => {
    if (props.action === MEMBER_ACTION.STRAIGHT) return MEMBER_ACTION.STANDING;
    else if (props.action === MEMBER_ACTION.BACK) return MEMBER_ACTION.STANDING;
    else return props.action;
});

const svgPath = computed(() => `./animate/${props.name}_${computedAction.value}.svg`);
</script>

<style scoped>
.character {
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
