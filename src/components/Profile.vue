<template>
    <div class="profile-wrapper">
        <Profile />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { MemberName } from '@/components/types';

const props = defineProps<{
    name: MemberName;
}>();
const Profile = defineAsyncComponent(() => import(`./profile/${props.name}.vue`));
</script>

<style scoped>
.profile-wrapper {
    width: 106px;
    height: 106px;
    border-radius: 16px;
}
</style>
