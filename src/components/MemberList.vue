<template>
    <div class="member-wraper">
        <div class="header">입장할 멤버를 선택하세요.</div>
        <div class="container">
            <div class="member-item" v-for="name in NAMES">
                <div class="member-item-content">
                    <img class="profile-image" :src="`./profile/${name}.svg`" />
                    <span>
                        {{ name.charAt(0).toUpperCase() + name.slice(1) }}
                    </span>
                </div>
                
                <img v-if="seats.includes(name)" class="select-icon" src="/etc/end.svg" width="100px" height="40px" />
                <img v-else class="select-icon" src="/etc/start.svg" width="100px" height="40px" @click="startFindSeat(name)" style="cursor: pointer;" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
//썸네일 3열씩 표시, width X height는 고정으로 표시될거 같다.

import { type MemberName, MemberStep, NAMES } from '@/components/types';
import { useSceneStore } from '@/stores/scene';
import { storeToRefs } from 'pinia';

const sceneStore = useSceneStore();
const { selectPlayerNameOrNull, updatePlayerStep, randomChoiceIndex } = sceneStore;
const { currentPlayerNameOrNull, seats } = storeToRefs(sceneStore);

const startFindSeat = (name: MemberName) => {
    selectPlayerNameOrNull(name);
    updatePlayerStep(MemberStep.Finding);
    randomChoiceIndex();
};
</script>

<style scoped>
.member-wraper {
    display: flex;
    flex-direction: column;
    background: #000000;
    
    box-sizing: border-box;
    width: 400px;
    height: 672px;

    border-radius: 20px;
    .header {
        padding-inline: 16px;
        padding-top: 16px;
        margin-top: 14px;
        margin-bottom: 6px;
        color: #ffffff;
        font-size: 24px;
        line-height: 36px;
        align-self: center;
    }
    .container {
        padding-inline: 16px;
        flex: 1;
        min-height: 0;
        
        display: flex;
        flex-direction: column;
        overflow-y: auto;

        .member-item {
            display: flex;
            flex-direction: row;
            padding: 12px 8px;
            gap: 24px;
            height: 88px;
            width: 100%;
            box-sizing: border-box;
            border-top: 1px solid #5A5A61;
            cursor: pointer;            
            justify-content: space-between;
            align-items: center;

            .member-item-content {
                display: flex;
                flex-direction: row;
                gap: 24px;
                align-items: center;
                span {
                    font-size: 24px;
                    color: #ffffff;
                }
            }
            
        }
    }
    .start-button { 
        margin-bottom: 16px;    
        margin-inline: 16px;
    }
}
</style>
