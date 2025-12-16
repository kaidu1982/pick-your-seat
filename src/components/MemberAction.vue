<template>
    <div class="member-action">
        <div class="header">{{ name }}</div>
        <template v-if="playerStep === MemberStep.Finding">
            <div class="container">
                <div class="messages">
                    <div>자리를 찾고 있습니다.</div>
                    <div>어디에 앉게 될까요?</div>
                </div>
                <radar />
                <character
                    v-if="currentPlayerNameOrNull"
                    :width="130"
                    :height="240"
                    :name="currentPlayerNameOrNull"
                    :action="MEMBER_ACTION.HI1"
                />
            </div>
            <v-btn size="x-large" :width="350" class="disable">자리찾는중...</v-btn>
        </template>
        <template v-else-if="playerStep === MemberStep.Found">
            <div class="container">
                <div class="messages">
                    <div>자리를 찾기가 완료 되었습니다.</div>
                    <div>위치를 확인하세요.</div>
                </div>
                <found />
                <character
                    v-if="currentPlayerNameOrNull"
                    :width="130"
                    :height="240"
                    :name="currentPlayerNameOrNull"
                    :action="MEMBER_ACTION.HI2"
                />
            </div>
            <v-btn size="x-large" :width="350" @click="confirmAndNext">확인</v-btn>
        </template>
    </div>
</template>
<script setup lang="ts">
//썸네일 3열씩 표시, width X height는 고정으로 표시될거 같다.

import { MEMBER_ACTION, MemberStep } from '@/components/types';
import { VBtn } from 'vuetify/components/VBtn';
import { useSceneStore } from '@/stores/scene';
import { storeToRefs } from 'pinia';
import Found from '@/components/icon/found.vue';
import Radar from '@/components/icon/radar.vue';
import Character from '@/components/Character.vue';
import { computed } from 'vue';

const sceneStore = useSceneStore();
const { updatePlayerStep, confirmAndNext } = sceneStore;
const { currentPlayerNameOrNull, playerStep } = storeToRefs(sceneStore);

const name = computed(() => {
    if (currentPlayerNameOrNull.value) {
        return (
            currentPlayerNameOrNull.value[0].toUpperCase() + currentPlayerNameOrNull.value.slice(1)
        );
    }
    return '';
});
const startFindSeat = () => {
    updatePlayerStep(MemberStep.Finding);
};
</script>

<style scoped>
.member-action {
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    width: 382px;
    height: 672px;
    background: #e5eaf4;

    border-radius: 20px;
    .header {
        border-radius: 20px 20px 0 0;
        background: #455767;
        width: 100%;
        height: 64px;
        display: inline-flex;
        color: #ffffff;
        font-size: 24px;
        line-height: 36px;
        align-items: center;
        justify-content: center;
    }

    .container {
        margin: 24px auto;
        height: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .messages {
            margin: 42px 0 24px 0;
            text-align: center;
            font-size: 18px;
            color: #1c1c1c;
        }
        .character {
            margin: auto;
        }
    }
    .disable {
        opacity: 0.2;
        cursor: not-allowed;
    }
    .v-btn {
        margin: 0 auto;
    }
}
</style>
