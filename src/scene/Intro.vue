<template>
    <div class="intro">
        <div class="contents">
            <div class="message">
                <div>3층 R&D에 오신것을 환영합니다.</div>
                <div>자리 뽑기가 시작 되었습니다.</div>
                <div>누구와, 어떤 자리에 앉게 될까요?</div>
            </div>

            <v-btn size="large" :width="330" @click="start">시작하기</v-btn>
        </div>
        <div class="btn"></div>
    </div>
</template>
<script setup lang="ts">
import { VBtn } from 'vuetify/components/VBtn';
import { useRouter } from 'vue-router';

const router = useRouter();

const start = () => {
    router.push('/office');
};
</script>
<style lang="scss" scoped>
.intro {
    background: #455767;
    width: 100%;
    height: 100%;
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
    }
}
</style>
