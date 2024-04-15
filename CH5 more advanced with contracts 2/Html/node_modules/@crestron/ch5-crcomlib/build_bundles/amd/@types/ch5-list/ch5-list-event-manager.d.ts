import { Ch5List } from "./ch5-list";
import { Ch5ListAbstractHelper } from "./ch5-list-abstract-helper";
export declare const stepAllowancePx = 50;
export declare class Ch5ListEventManager extends Ch5ListAbstractHelper {
    protected _dragAllowanceAngle: number;
    protected _currentDragAngle: number;
    protected _listHasMoved: boolean;
    private _hammer;
    private _updateManager;
    constructor(list: Ch5List);
    removeEvents(additionalElement: HTMLElement): void;
    initializeEvents(additionalElement: HTMLElement): void;
    protected initializeTouchEvents(additionalElement: HTMLElement): void;
    protected initializeMouseEvents(additionalElement: HTMLElement): void;
    protected checkTouchSupport(): boolean;
    onWindowResize(): void;
    onPointerDown(event: MouseEvent | TouchEvent): void;
    onPointerMove(event: MouseEvent | TouchEvent): void;
    onPointerEnd(event: MouseEvent | TouchEvent): void;
    onPointerCancel(): void;
    updateDragEventListeners(element: HTMLElement): void;
    private onOrientationChange;
    stopPointerTracking(): void;
    private _addTrackingPoint;
}
