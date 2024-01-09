<template>
    <div class="member-wraper">
        <div class="header">입장할 멤버를 선택하세요.</div>
        <div class="container">
            <profile
                v-for="name in NAMES"
                :key="name"
                :name="name"
                @click="selectProfile(name)"
                class="member"
                :class="{ select: currentPlayerNameOrNull === name, disable: seats.includes(name) }"
            />
        </div>
        <v-btn
            size="x-large"
            :disabled="currentPlayerNameOrNull === null"
            :width="350"
            @click="startFindSeat"
            >자리찾기 시작하기</v-btn
        >
    </div>
</template>
<script setup lang="ts">
//썸네일 3열씩 표시, width X height는 고정으로 표시될거 같다.

import { type MemberName, NAMES, SceneStep } from '@/components/types';
import Profile from '@/components/Profile.vue';
import { VBtn } from 'vuetify/components/VBtn';
import { useSceneStore } from '@/stores/scene';
import { storeToRefs } from 'pinia';

const sceneStore = useSceneStore();
const { selectPlayerNameOrNull, updatePlayerStep, randomChoiceIndex } = sceneStore;
const { currentPlayerNameOrNull, seats } = storeToRefs(sceneStore);

const selectProfile = (name: MemberName) => {
    selectPlayerNameOrNull(name);
};
const startFindSeat = () => {
    updatePlayerStep(SceneStep.Finding);
    randomChoiceIndex();
};
</script>

<style scoped>
.member-wraper {
    display: flex;
    flex-direction: column;
    background: #455767;
    padding: 16px;
    box-sizing: border-box;
    width: 382px;
    height: 672px;

    border-radius: 20px;
    .header {
        margin-top: 14px;
        margin-bottom: 6px;
        color: #ffffff;
        font-size: 24px;
        line-height: 36px;
        align-self: center;
    }
    .container {
        margin: 24px auto;
        display: grid;
        grid-gap: 16px;
        justify-content: center;
        grid-template-columns: repeat(3, 1fr);

        .member {
            border-radius: 16px;
            box-sizing: border-box;
            position: relative;
            cursor: pointer;

            &.select::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 16px;
                border: 5px solid #ffffff;
            }

            &.disable {
                opacity: 0.2;
                cursor: not-allowed;
            }
        }
    }
}
</style>
