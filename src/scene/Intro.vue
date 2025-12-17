<template>
    <div class="intro">
        <div class="contents">
            <div class="message">
                <div>3층 R&D에 오신것을 환영합니다.</div>
                <div>자리 뽑기를 할 시간이 되었군요.</div>
                <div>이번엔 어떤 자리에 앉게 될까요?</div>
            </div>

            <div class="round-button" @click="start">
                시작하기
            </div>
        </div>
        <img src="/etc/flower.svg" style="position: absolute; bottom: 10%; left: 150px;" />
        <img src="/etc/lego.svg" style="position: absolute; top: 8%; left: 350px;" />
        <img src="/etc/lamp.svg" style="position: absolute; top: 40%; right: 50px;" />
        <img src="/etc/keyboard.svg" style="position: absolute; bottom: 10%; left: 55%;" />
    </div>
</template>
<script setup lang="ts">
import { VBtn } from 'vuetify/components/VBtn';
import { useSceneStore } from '@/stores/scene';
const sceneStore = useSceneStore();
const { nextSceneStep } = sceneStore;

const start = () => {
    nextSceneStep();
};
</script>
<style lang="scss" scoped>
.intro {
    background: #000000;
    width: 100%;
    height: 100%;
    position: relative;
    > .contents {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .message {
            display: flex;
            flex-direction: column;
            align-items: center;
            div {
                font-weight: 500;
                font-size: 18px;
                color: #ffffff;
                width: fit-content;
            }
            margin-bottom: 56px;
        }

        .round-button {
            cursor: pointer;
            margin-top: 12px;
            width: 380px;
            height: 64px;
            border-radius: 48px;
            border: 2px solid #ffffff;
            align-items: center;
            display: flex;
            justify-content: center;
            color: #ffffff;
            font-size: 22px;
            text-align: center;
        }
    }
}
</style>
