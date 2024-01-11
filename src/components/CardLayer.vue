<template>
    <div class="background-glass" @click.stop>
        <img :class="{ show: show }" :src="svgPath" @click="closeCardLayer()" />
    </div>
</template>

<script lang="ts" setup>
import type { Card } from '@/components/types';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useSceneStore } from '@/stores/scene';

const sceneStore = useSceneStore();

const { closeCardLayer } = sceneStore;

const props = defineProps<{
    card: Card;
}>();

const show = ref(false);
onMounted(() => {
    setTimeout(() => {
        show.value = true;
    }, 100);
});

onUnmounted(() => {
    show.value = false;
});

const svgPath = computed(() => `./card/${props.card}.svg`);
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

    img {
        position: fixed;
        transform: translateY(120%);
        transition: transform ease 0.6s;
        z-index: 1000;
        width: fit-content;
        height: fit-content;
        cursor: pointer;
    }

    img.show {
        transform: translateY(0);
    }
}
</style>
