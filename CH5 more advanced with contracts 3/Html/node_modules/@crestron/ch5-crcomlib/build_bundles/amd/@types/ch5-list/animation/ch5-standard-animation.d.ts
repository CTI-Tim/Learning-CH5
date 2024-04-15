import { Ch5Animation } from "./ch5-animation";
import { TCh5ListElementOrientation } from '../interfaces/t-ch5-list';
export declare class Ch5StandardAnimation extends Ch5Animation {
    protected animationTimeWatcher: number;
    constructor(duration: number, easeMode: string, wrapper: HTMLElement);
    animate(element: HTMLElement, currentPosition: number, mode: TCh5ListElementOrientation): void;
    protected handleTransition(element: HTMLElement): void;
}
