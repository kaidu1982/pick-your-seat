<template>
    <div class="member-wrapper">
        <members v-if="playerStep === MemberStep.Ready" />
        <member-action v-else />
    </div>
</template>
<script setup lang="ts">
import { MemberStep } from '@/components/types';
import { useSceneStore } from '@/stores/scene';
import { storeToRefs } from 'pinia';
import Members from '@/components/Members.vue';
import MemberAction from '@/components/MemberAction.vue';

const sceneStore = useSceneStore();

const { playerStep } = storeToRefs(sceneStore);
</script>

<style scoped>
.member-wrapper {
    display: flex;
    flex-direction: column;
    background: #455767;

    border-radius: 20px;
}
</style>
