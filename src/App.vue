<script setup lang="ts">
import Intro from '@/scene/Intro.vue';
import { useSceneStore } from '@/stores/scene';
import { storeToRefs } from 'pinia';
import { SceneStep } from '@/components/types';
import Office from '@/scene/Office.vue';
const sceneStore = useSceneStore();
const { sceneStep } = storeToRefs(sceneStore);
</script>

<template>
    <div id="main">
        <intro v-if="SceneStep.Intro === sceneStep" />
        <office v-else-if="SceneStep.Office === sceneStep" />
    </div>
</template>

<style scoped>
#main {
    width: 100vw;
    height: 100vh;
}
</style>
