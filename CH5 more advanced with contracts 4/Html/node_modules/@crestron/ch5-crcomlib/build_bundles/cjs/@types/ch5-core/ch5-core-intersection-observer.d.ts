import { subscribeInViewPortChangeCallback } from "./utility-functions/subscribe-in-view-port-change";
export declare class Ch5CoreIntersectionObserver {
    static observerThreshold: number[];
    static observerRootMargin: string;
    private static _instance;
    private _intersectionObserverConfig;
    private _intersectionObserver;
    private constructor();
    static getInstance(customRootMargin?: string): Ch5CoreIntersectionObserver;
    private intersectionObserverCallback;
    observe(element: Element, callback: subscribeInViewPortChangeCallback): void;
    unobserve(element: Element): void;
    disconnect(): void;
}
