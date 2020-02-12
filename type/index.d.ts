/// <reference path="dom.d.ts" />

import { Writable, Readable } from 'svelte/store';
import { TransitionConfig } from 'svelte/transition';
import { AnimationConfig } from 'svelte/animate';

export declare function AutoSubscribe<T>(store: Writable<T> | Readable<T>): T;
export declare type TransitionFunction = (node: Element, params: object) => TransitionConfig | (() => TransitionConfig);
export declare function ConfigTransition<T extends TransitionFunction>(effect: T, params?: Partial<Parameters<T>[1]>): TransitionConfig;
export declare type AnimationFunction = (node: Element, animation: {
    from: DOMRect;
    to: DOMRect;
}, params: object) => AnimationConfig;
export declare function ConfigAnimation<T extends AnimationFunction>(effect: T, params?: Partial<Parameters<T>[2]>): AnimationConfig;
export declare type ActionFunction = (node: HTMLElement, params: any) => Svelte.ActionConfig;
export declare function ConfigAction<T extends ActionFunction>(action: T, params?: any): Svelte.ActionConfig;
export declare function ConfigEvent<T extends {
    [key: string]: Function;
}>(event_map: T): "ConfigEvent";
export declare function ConfigProps<T extends {
    [key: string]: any;
}>(props: T): "ConfigProps";
