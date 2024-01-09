<script setup lang="ts">
import Intro from '@/scene/Intro.vue';
import { useSceneStore } from '@/stores/scene';
import { storeToRefs } from 'pinia';
import { SceneStep } from '@/components/types';
import Office from '@/scene/Office.vue';
const sceneStore = useSceneStore();
const { step } = storeToRefs(sceneStore);
</script>

<template>
    <div id="main">
        <router-view></router-view>
    </div>
</template>

<style scoped>
#main {
    width: 100vw;
    height: 100vh;
}
</style>
