<template>
    <div class="seats-n-loads" ref="seatsLoadsRef">
        <div class="left seats">
            <seat :name="seats[0]" :direction="'bottom'" />
            <seat :name="seats[1]" :direction="'bottom'" />
            <seat :name="seats[2]" :direction="'top'" />
            <seat :name="seats[3]" :direction="'bottom'" />
            <seat :name="seats[4]" :direction="'top'" />
            <seat :name="seats[5]" :direction="'bottom'" />
        </div>
        <div class="roads">
            <exit />
            <canvas ref="canvasRef" />

            <animate-move
                class="character-animation"
                v-if="currentPlayerNameOrNull && playerStep === MemberStep.Finding"
                :width="58"
                :height="110"
                :name="currentPlayerNameOrNull"
                :action="computedAction"
                :style="position"
            />
        </div>
        <div class="right seats">
            <seat :name="seats[6]" :direction="'top'" />
            <seat :name="seats[7]" :direction="'bottom'" />
            <seat :name="seats[8]" :direction="'top'" />
            <seat :name="seats[9]" :direction="'bottom'" />
            <seat :name="seats[10]" :direction="'top'" />
            <seat :name="seats[11]" :direction="'bottom'" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Exit from '@/components/exit.vue';
import { computed, onMounted, ref, type Ref } from 'vue';
import { ANI_STEP, emitter, useSceneStore } from '@/stores/scene';
import { storeToRefs } from 'pinia';
import { MEMBER_ACTION, MemberStep } from '@/components/types';
import Seat from '@/components/Seat.vue';
import AnimateMove from '@/components/AnimateMove.vue';

import html2canvas from 'html2canvas';

const sceneStore = useSceneStore();
const { seatDown } = sceneStore;
const {
    currentPlayerNameOrNull,
    goingSeatIndex,
    playerStep,
    seats,
    currentPlayerPosition,
    aniStep
} = storeToRefs(sceneStore);

const startXOnPillRoad = 100;
const startYOnPillRoad = 70;
const heightOnPillRoad = 560;
const widthOnPillRoad = 240;
const radiusOnPillRoad = 30;
const moveVelocity = 100;
const roadWidth = 16;
const heightPerSeat = 100;
const canvasRef: Ref<HTMLCanvasElement | undefined> = ref<HTMLCanvasElement>();
const seatsLoadsRef: Ref<HTMLElement | undefined> = ref<HTMLElement>();

const computedAction = computed(() => {
    if (aniStep.value === ANI_STEP.APPEAR) return MEMBER_ACTION.STRAIGHT;
    else if (aniStep.value === ANI_STEP.ROTATION_RIGHT || aniStep.value === ANI_STEP.MOVE_RIGHT)
        return MEMBER_ACTION.RIGHT;
    else if (aniStep.value === ANI_STEP.ROTATION_LEFT || aniStep.value === ANI_STEP.MOVE_LEFT)
        return MEMBER_ACTION.LEFT;
    else if (aniStep.value === ANI_STEP.ROTATION_DOWN) return MEMBER_ACTION.STRAIGHT;
    else if (aniStep.value === ANI_STEP.ROTATION_UP) return MEMBER_ACTION.BACK;
    else return MEMBER_ACTION.STANDING;
});

const seatsYPosition = [
    startYOnPillRoad + radiusOnPillRoad + 10,
    startYOnPillRoad + radiusOnPillRoad + heightPerSeat + 10,
    startYOnPillRoad + radiusOnPillRoad + heightPerSeat * 2 + 10,
    startYOnPillRoad + radiusOnPillRoad + heightPerSeat * 3 + 10,
    startYOnPillRoad + radiusOnPillRoad + heightPerSeat * 4 + 10,
    startYOnPillRoad + radiusOnPillRoad + heightPerSeat * 5 + 10
];
const canvasDraw = () => {
    const ctx = (canvasRef.value as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    const width = 440;
    const height = 648;

    const path = new Path2D();

    path.moveTo(startXOnPillRoad + widthOnPillRoad * 0.5, 0);
    path.lineTo(startXOnPillRoad + widthOnPillRoad * 0.5, startYOnPillRoad);
    path.roundRect(
        startXOnPillRoad,
        startYOnPillRoad,
        widthOnPillRoad,
        heightOnPillRoad,
        radiusOnPillRoad
    );
    seatsYPosition.forEach((y: number) => {
        path.moveTo(100, y);
        path.lineTo(0, y);

        path.moveTo(width - 100, y);
        path.lineTo(width, y);
    });

    ctx.lineWidth = roadWidth;
    ctx.strokeStyle = '#E5C47A';
    ctx.stroke(path);

    if (playerStep.value === MemberStep.Finding) {
        move(0.1);
    }

    setTimeout(() => {
        canvasDraw();
    }, 100);
};

onMounted(() => {
    const canvasEl = canvasRef.value as HTMLCanvasElement;
    const devicePixelRatio = window.devicePixelRatio ?? 1;
    canvasEl.width = devicePixelRatio * canvasEl.clientWidth;
    canvasEl.height = devicePixelRatio * canvasEl.clientHeight;

    const mainContext = (canvasRef.value as HTMLCanvasElement).getContext(
        '2d'
    ) as CanvasRenderingContext2D;

    mainContext.scale(devicePixelRatio, devicePixelRatio);

    canvasDraw();
});

const move = (tpf: number) => {
    const moveDistance = moveVelocity * tpf;
    if (aniStep.value === ANI_STEP.APPEAR) {
        currentPlayerPosition.value.y += moveVelocity * tpf;
        if (startYOnPillRoad <= currentPlayerPosition.value.y) {
            aniStep.value = ANI_STEP.ROTATION_RIGHT;
            currentPlayerPosition.value.y = startYOnPillRoad;
        }
    } else if (aniStep.value === ANI_STEP.ROTATION_RIGHT) {
        currentPlayerPosition.value.x += moveDistance;
        if (startXOnPillRoad + widthOnPillRoad <= currentPlayerPosition.value.x) {
            aniStep.value = ANI_STEP.ROTATION_DOWN;
            currentPlayerPosition.value.x = startXOnPillRoad + widthOnPillRoad;
        }
    } else if (aniStep.value === ANI_STEP.ROTATION_DOWN) {
        currentPlayerPosition.value.y += moveDistance;
        if (currentPlayerPosition.value.y >= startYOnPillRoad + heightOnPillRoad) {
            aniStep.value = ANI_STEP.ROTATION_LEFT;
            currentPlayerPosition.value.y = startYOnPillRoad + heightOnPillRoad;
        }

        if (6 <= goingSeatIndex.value && goingSeatIndex.value < 12) {
            if (seatsYPosition[goingSeatIndex.value - 6] <= currentPlayerPosition.value.y) {
                currentPlayerPosition.value.y = seatsYPosition[goingSeatIndex.value - 6];
                aniStep.value = ANI_STEP.MOVE_RIGHT;
            }
        }
    } else if (aniStep.value === ANI_STEP.ROTATION_LEFT) {
        currentPlayerPosition.value.x -= moveDistance;
        if (startXOnPillRoad >= currentPlayerPosition.value.x) {
            aniStep.value = ANI_STEP.ROTATION_UP;
            currentPlayerPosition.value.x = startXOnPillRoad;
        }
    } else if (aniStep.value === ANI_STEP.ROTATION_UP) {
        currentPlayerPosition.value.y -= moveDistance;
        if (startYOnPillRoad >= currentPlayerPosition.value.y) {
            aniStep.value = ANI_STEP.ROTATION_RIGHT;
            currentPlayerPosition.value.y = startYOnPillRoad;
        }

        if (0 <= goingSeatIndex.value && goingSeatIndex.value < 6) {
            if (seatsYPosition[goingSeatIndex.value] >= currentPlayerPosition.value.y) {
                currentPlayerPosition.value.y = seatsYPosition[goingSeatIndex.value];
                aniStep.value = ANI_STEP.MOVE_LEFT;
            }
        }
    } else if (aniStep.value === ANI_STEP.MOVE_LEFT) {
        currentPlayerPosition.value.x -= moveDistance;
        if (0 >= currentPlayerPosition.value.x) {
            currentPlayerPosition.value.x = 0;
            aniStep.value = ANI_STEP.STOP;
            seatDown();
        }
    } else if (aniStep.value === ANI_STEP.MOVE_RIGHT) {
        currentPlayerPosition.value.x += moveDistance;
        if (currentPlayerPosition.value.x >= widthOnPillRoad + startXOnPillRoad * 2) {
            currentPlayerPosition.value.x = widthOnPillRoad + startXOnPillRoad * 2;
            aniStep.value = ANI_STEP.STOP;
            seatDown();
        }
    }
};

const position = computed(() => {
    return {
        left: `${currentPlayerPosition.value.x}px`,
        top: `${currentPlayerPosition.value.y}px`
    };
});

onMounted(() => {
    emitter.on('saveImage', () => {
        saveImage();
    });
});
const saveImage = async () => {
    try {
        if (seatsLoadsRef.value) {
            const element = seatsLoadsRef.value;
            const thumbnailWidth = 872;
            const scale = thumbnailWidth / element.offsetWidth;
            const canvas = await html2canvas(element, {
                scale: scale,
                backgroundColor: '#e8cb8b'
            });
            const dataURL = canvas.toDataURL('image/png');
            const fileName = `jennifer-rnd-seats.png`;
            const downloadLink = document.createElement('a');
            downloadLink.href = dataURL;
            downloadLink.download = fileName;
            downloadLink.click();
        }
    } catch (e) {
        console.error('can not save image', e);
    }
};
</script>

<style lang="scss" scoped>
.seats-n-loads {
    display: flex;
    flex-direction: row;
    padding: 0 56px;
    .seats {
        margin-top: auto;
        display: flex;
        flex-direction: column;
    }
    .roads {
        width: 440px;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        canvas {
            margin-top: auto;
            width: 440px;
            height: 648px;
        }

        .character-animation {
            position: absolute;
            z-index: 10;
            transform: translate(-50%, -70%);
        }
    }
}
</style>
