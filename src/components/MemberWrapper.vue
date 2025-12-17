<template>
    <div class="member-wrapper">
        <member-list v-if="playerStep === MemberStep.Ready" />
        <member-action v-else />
    </div>
</template>
<script setup lang="ts">
import { MemberStep } from '@/components/types';
import { useSceneStore } from '@/stores/scene';
import { storeToRefs } from 'pinia';
import MemberList from '@/components/MemberList.vue';
import MemberAction from '@/components/MemberAction.vue';

const sceneStore = useSceneStore();

const { playerStep } = storeToRefs(sceneStore);
</script>

<style scoped>
.member-wrapper {
    display: flex;
    flex-direction: column;
    background: #000000;

    border-radius: 20px;
}
</style>
