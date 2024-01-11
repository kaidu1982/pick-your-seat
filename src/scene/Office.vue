<template>
    <div class="area">
        <div class="office">
            <seats-n-loads />
            <member-wrapper />
        </div>
        <card-layer v-if="cardOrNull !== null" :card="cardOrNull" />
        <finish-modal v-else-if="seatsFull && currentPlayerNameOrNull === null" />
    </div>
</template>
<script setup lang="ts">
import { useSceneStore } from '@/stores/scene';

const sceneStore = useSceneStore();

const { cardOrNull, seatsFull, currentPlayerNameOrNull } = storeToRefs(sceneStore);

import MemberWrapper from '@/components/MemberWrapper.vue';

import SeatsNLoads from '@/components/SeatsNLoads.vue';
import CardLayer from '@/components/CardLayer.vue';
import { storeToRefs } from 'pinia';
import FinishModal from '@/components/FinishModal.vue';
</script>
<style lang="scss" scoped>
.area {
    width: 100vw;
    height: 100vh;
    background: #e8cb8b;
    .office {
        overflow: auto;
        background: #e8cb8b;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
        padding: 25px;
        display: flex;
        flex-direction: row;
    }
}
</style>
