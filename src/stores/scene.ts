import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Card, MemberName } from '@/components/types';
import { EVENT_CARD, MemberStep, SceneStep } from '@/components/types';
import { Vector2D } from '@/components/Vector';
import mitt from 'mitt';

export const SEATS_CARD = [
    EVENT_CARD.INDEPENDENT,
    EVENT_CARD.SEASON,
    EVENT_CARD.SEASON,
    EVENT_CARD.SEASON,
    EVENT_CARD.SEASON,
    EVENT_CARD.TREE,
    EVENT_CARD.INDEPENDENT,
    EVENT_CARD.WATER,
    EVENT_CARD.SUN,
    EVENT_CARD.SUN,
    EVENT_CARD.SUN,
    EVENT_CARD.INDEPENDENT,
    EVENT_CARD.CENTER
];
export const ANI_STEP = {
    APPEAR: 0,
    ROTATION_RIGHT: 1,
    ROTATION_DOWN: 2,
    ROTATION_LEFT: 3,
    ROTATION_UP: 4,
    MOVE_LEFT: 5,
    MOVE_RIGHT: 6,
    MOVE_UP_TO_SPECIAL_SEAT: 7,
    STOP: 8
};
export const emitter = mitt();
const bgmAudio = new Audio('./sound/playing-in-color.mp3');
export const useSceneStore = defineStore('scene', () => {
    const sceneStep = ref<SceneStep>(0);
    const playerStep = ref<MemberStep>(0);
    const aniStep = ref<number>(0);
    const goingSeatIndex = ref<number>(-1);
    const cardOrNull = ref<Card | null>(null);

    const currentPlayerNameOrNull = ref<MemberName | null>(null);
    const currentPlayerPosition = ref<Vector2D>(new Vector2D(220, 0));
    const seats = ref<(MemberName | null)[]>(Array(13).fill(null));

    const reset = () => {
        sceneStep.value = 0;
        playerStep.value = 0;
        aniStep.value = 0;
        goingSeatIndex.value = 0;
        cardOrNull.value = null;
        initPlayerPosition();
        seats.value.fill(null);
    };

    const closeCardLayer = () => {
        cardOrNull.value = null;
    };
    const nextSceneStep = () => {
        sceneStep.value++;
    };
    const randomChoiceIndex = () => {
        const emptySeats = seats.value
            .map((seat, index) => (seat === null ? index : null))
            .filter((seat) => seat !== null) as number[];

        if (emptySeats.length > 0) {
            const randomIndex = emptySeats[Math.floor(Math.random() * emptySeats.length)];
            
            if (randomIndex !== undefined) {
                goingSeatIndex.value = randomIndex;
            }
        }
    };

    const seatDown = () => {
        seats.value[goingSeatIndex.value] = currentPlayerNameOrNull.value;
        playerStep.value = MemberStep.Found;

        cardOrNull.value = SEATS_CARD[goingSeatIndex.value] ?? null;
        console.log('cardOrNull.value',cardOrNull.value);
        bgmAudio.pause();
    };

    const confirmAndNext = () => {
        updatePlayerStep(MemberStep.Ready);
        selectPlayerNameOrNull(null);
        initPlayerPosition();

        aniStep.value = ANI_STEP.APPEAR;
    };

    const updatePlayerStep = (step: MemberStep) => {
        playerStep.value = step;
        if (step === MemberStep.Finding) {
            bgmAudio.currentTime = 0;
            bgmAudio.play();
        }
    };
    const selectPlayerNameOrNull = (name: MemberName | null) => {
        if (currentPlayerNameOrNull.value === name) currentPlayerNameOrNull.value = null;
        else currentPlayerNameOrNull.value = name;
    };

    const initPlayerPosition = () => {
        currentPlayerPosition.value.x = 220;
        currentPlayerPosition.value.y = 0;
    };

    const seatsFull = computed((): boolean => {
        return seats.value.filter((seat: MemberName | null) => seat === null).length === 0;
    });

    return {
        sceneStep,
        nextSceneStep,
        seats,
        seatsFull,
        goingSeatIndex,
        randomChoiceIndex,
        cardOrNull,
        seatDown,
        playerStep,
        aniStep,
        updatePlayerStep,
        currentPlayerNameOrNull,
        currentPlayerPosition,
        selectPlayerNameOrNull,
        confirmAndNext,
        closeCardLayer,
        reset
    };
});
