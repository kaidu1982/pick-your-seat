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
        </template>
        <template v-else-if="playerStep === MemberStep.Found">
            <div class="container">
                <div class="messages">
                    <div>자리를 찾기가 완료 되었습니다.</div>
                    <div>위치를 확인하세요.</div>
                </div>
                <confirm @click="confirmAndNext" :style="{ cursor: 'pointer' }" />
                <character
                    v-if="currentPlayerNameOrNull"
                    :width="130"
                    :height="240"
                    :name="currentPlayerNameOrNull"
                    :action="MEMBER_ACTION.HI2"
                />
            </div>
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
import Confirm from '@/components/icon/confirm.vue';
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
    width: 400px;
    height: 672px;
    background: #000000;

    border-radius: 20px;
    .header {
        border-radius: 20px 20px 0 0;
        background: #000000;
        width: 100%;
        margin-top: 64px;
        height: 36px;
        display: inline-flex;
        color: #ffffff;
        font-size: 24px;
        line-height: 36px;
        align-items: center;
        justify-content: center;
    }

    .container {
        margin: 10px auto;
        height: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .messages {
            margin-bottom: 24px;
            text-align: center;
            font-size: 18px;
            color: #ffffff;
        }
        .character {
            margin: auto;
        }
    }
    .disable {
        opacity: 0.2;
        cursor: not-allowed;
    }
    
}
</style>
