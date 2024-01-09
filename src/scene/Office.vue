<template>
    <div class="area">
        <div class="office">
            <seats-n-loads />
            <member-wrapper />
        </div>
    </div>
</template>
<script setup lang="ts">
import MemberWrapper from '@/components/MemberWrapper.vue';

import SeatsNLoads from '@/components/SeatsNLoads.vue';
</script>
<style lang="scss" scoped>
.area {
    width: 100vw;
    height: 100vh;
    background: #e8cb8b;
    .office {
        overflow: auto;
        background: #e8cb8b;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
        padding: 25px;
        display: flex;
        flex-direction: row;
    }
}
</style>
