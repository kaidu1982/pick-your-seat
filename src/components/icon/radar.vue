<template>
    <div class="radar">
        <div class="circle" />
        <div class="count">{{ count }}</div>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
let timeoutId: any = undefined;
const count = ref<number>(0);

const addCount = () => {
    count.value++;

    timeoutId = setTimeout(addCount, 1000);
};

onUnmounted(() => {
    clearTimeout(timeoutId);
});

addCount();
</script>

<style scoped>
.radar {
    width: 64px;
    height: 64px;
    position: relative;

    .circle {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: conic-gradient(
            rgba(115, 161, 255, 1) 0deg,
            rgba(115, 161, 255, 0.5) 180deg,
            rgba(115, 161, 255, 0) 360deg
        );

        animation: radar-animation 1s linear infinite;
    }

    .count {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        font-size: 22px;
        font-weight: 700;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
@keyframes radar-animation {
    to {
        transform: rotate(-360deg);
    }
}
</style>
