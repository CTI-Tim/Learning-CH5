import { Ch5SignalFactory } from "./ch5-signal-factory";
import { ICh5PlatformInfo } from "./types/ch5-platform-info";
export declare type ICh5PlatformUpdateCallback = (platformInfo: ICh5PlatformInfo) => void;
export declare class Ch5Platform {
    private static readonly CSIG_PLATFORM_INFO;
    private static _instance;
    private readonly _ch5PlatformInfoSignal;
    private _ch5PlatformInfo;
    private _updateCallbacks;
    private constructor();
    static getInstance(ch5SignalFactory?: Ch5SignalFactory): Ch5Platform;
    init(): void;
    registerUpdateCallback(callback: ICh5PlatformUpdateCallback): void;
    getPlatformInfo(): ICh5PlatformInfo;
}
