import { TSignalNonStandardTypeName } from "../types/core";
import { Ch5SignalErrorCallback, TAllSignalSubscriptionUpdateCallbacks } from "../types/callbacks";
export declare function subscribeState(signalType: TSignalNonStandardTypeName, signalName: string, callback: TAllSignalSubscriptionUpdateCallbacks, errCallback?: Ch5SignalErrorCallback): string;
