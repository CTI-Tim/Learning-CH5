import { Ch5Spinner } from './ch5-spinner';
export declare class Ch5SpinnerEvents {
    protected _element: Ch5Spinner;
    constructor(element: Ch5Spinner);
    set element(element: Ch5Spinner);
    get element(): Ch5Spinner;
    dispatchFocus(): void;
    dispatchBlur(): void;
    dispatchChange(message: string): void;
    dispatchDirty(message: string): void;
    dispatchClean(): void;
    protected dispatch(eventName: string, message?: string, cancelable?: boolean): CustomEvent;
    protected createEvent(eventName: string, message: string, cancelable?: boolean): CustomEvent;
    dispatchMouseUp(): void;
    dispatchTouchEnd(): void;
}
