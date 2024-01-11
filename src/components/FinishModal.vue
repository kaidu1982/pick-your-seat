<template>
    <div class="background-glass">
        <div class="window" :class="{ show: show }">
            <img :src="'./etc/clap.svg'" />
            <div class="messages">
                <div>축하합니다.</div>
                <div>모두 자리를 찾으셨네요.</div>
                <div>다음에 또 만나요.</div>
            </div>
            <v-btn size="x-large" style="margin-top: 12px" :width="380" @click="saveImage"
                >이미지 내려받기</v-btn
            >
            <v-btn size="x-large" style="margin-top: 12px" :width="380" @click="reset"
                >게임 다시하기</v-btn
            >
        </div>
    </div>
</template>
<script setup lang="ts">
import { VBtn } from 'vuetify/components/VBtn';
import { onMounted, onUnmounted, ref } from 'vue';
import { emitter, useSceneStore } from '@/stores/scene';

const { reset } = useSceneStore();
const saveImage = () => {
    emitter.emit('saveImage');
};
const sound = new Audio('./sound/applause-clapping.wav');
const show = ref(false);
onMounted(() => {
    setTimeout(() => {
        show.value = true;
    }, 100);
    sound.play();
});

onUnmounted(() => {
    show.value = false;
});
</script>
<style lang="scss" scoped>
.background-glass {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 19900;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 40px;
    background: RGBA(0, 0, 0, 0.25);
    .window {
        position: fixed;
        transform: translateY(120%);
        transition: transform ease 0.6s;
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        border-radius: 20px;
        width: 430px;
        height: fit-content;
        padding: 24px;
        background: #eeeeee;
        .messages {
            margin: 42px 0 24px 0;
            text-align: center;
            font-size: 18px;
            color: #1c1c1c;
        }
        &.show {
            transform: translateY(0);
        }
    }
}
</style>
