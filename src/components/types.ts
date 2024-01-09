export const MEMBER_NAMES = {
    DAVID: 'david',
    KEVIN: 'kevin',
    YOHA: 'yoha',
    ALVIN: 'alvin',
    RYAN: 'ryan',
    ARBERT: 'albert',
    ARNOLD: 'arnold',
    CHALSE: 'chalse',
    SAM: 'sam',
    AARON: 'aaron',
    AIDEN: 'aiden',
    POTATO: 'potato'
} as const;

export const EVENT_CARD = {
    WATER: 'loadOfWater',
    SEASON: 'season',
    INDEPENDENT: 'independent',
    TREE: 'slaveOfTree',
    SUN: 'sun'
} as const;

export const MEMBER_ACTION = {
    LEFT: 'left',
    RIGHT: 'right',
    STANDING: 'standing',
    STRAIGHT: 'straight',
    BACK: 'back',
    HI: 'hi'
} as const;
export const NAMES = Object.values(MEMBER_NAMES).sort();

export type MemberName = (typeof MEMBER_NAMES)[keyof typeof MEMBER_NAMES];
export type Action = (typeof MEMBER_ACTION)[keyof typeof MEMBER_ACTION];
export type Card = (typeof EVENT_CARD)[keyof typeof EVENT_CARD];

export enum MemberStep {
    Ready = 0,
    Finding = 1,
    Found = 2
}

export enum SceneStep {
    Intro = 0,
    Office = 1
}
