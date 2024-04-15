import { TVideoTouchManagerParams } from "./interfaces";
export declare class Ch5VideoTouchManager {
    private customOnTouchHandlers;
    constructor(params: TVideoTouchManagerParams);
    private updateHandlersIfUnavailable;
    private _onTouchStart;
    private _onTouchMove;
    private _onTouchEnd;
    private _onTouchCancel;
    private checkAndReturnDefault;
    destructor(): void;
}
