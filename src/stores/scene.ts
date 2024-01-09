import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { MemberName } from '@/components/types';
import { MemberStep, SceneStep } from '@/components/types';
import { Vector2D } from '@/components/Vector';

export const ANI_STEP = {
    APPEAR: 0,
    ROTATION_RIGHT: 1,
    ROTATION_DOWN: 2,
    ROTATION_LEFT: 3,
    ROTATION_UP: 4,
    MOVE_LEFT: 5,
    MOVE_RIGHT: 6,
    STOP: 7
};
export const useSceneStore = defineStore('scene', () => {
    const sceneStep = ref<SceneStep>(0);
    const playerStep = ref<MemberStep>(0);
    const aniStep = ref<number>(0);
    const goingSeatIndex = ref<number>(-1);

    const currentPlayerNameOrNull = ref<MemberName | null>(null);
    const currentPlayerPosition = ref<Vector2D>(new Vector2D(220, 0));

    const seats = ref<(MemberName | null)[]>(Array(12).fill(null));

    const nextSceneStep = () => {
        sceneStep.value++;
    };
    const randomChoiceIndex = () => {
        const emptySeats = seats.value
            .map((seat, index) => (seat === null ? index : null))
            .filter((seat) => seat !== null) as number[];

        if (emptySeats.length > 0) {
            const randomSeatIndex = emptySeats[Math.floor(Math.random() * emptySeats.length)];
            console.log('randomSeatIndex', randomSeatIndex);

            goingSeatIndex.value = randomSeatIndex;
        }
    };

    const seatDown = () => {
        seats.value[goingSeatIndex.value] = currentPlayerNameOrNull.value;
        playerStep.value = MemberStep.Found;
    };

    const confirmAndNext = () => {
        updatePlayerStep(MemberStep.Ready);
        selectPlayerNameOrNull(null);
        initPlayerPosition();

        aniStep.value = ANI_STEP.APPEAR;
    };

    const nextPlayerStep = () => {
        playerStep.value++;
    };

    const updatePlayerStep = (step: MemberStep) => {
        playerStep.value = step;
    };
    const selectPlayerNameOrNull = (name: MemberName | null) => {
        if (currentPlayerNameOrNull.value === name) currentPlayerNameOrNull.value = null;
        else currentPlayerNameOrNull.value = name;
    };

    const initPlayerPosition = () => {
        currentPlayerPosition.value.x = 220;
        currentPlayerPosition.value.y = 0;
    };

    return {
        sceneStep,
        nextSceneStep,
        seats,
        goingSeatIndex,
        randomChoiceIndex,
        seatDown,
        playerStep,
        aniStep,

        updatePlayerStep,
        currentPlayerNameOrNull,
        currentPlayerPosition,
        selectPlayerNameOrNull,
        confirmAndNext
    };
});
