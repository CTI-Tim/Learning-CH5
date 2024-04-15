import { Ch5Signal } from './ch5-signal';
import { TSignal } from './types/signal.type';
export declare class Ch5SignalFactory {
    private static _instance;
    private _signals;
    static getInstance(): Ch5SignalFactory;
    static clear(): void;
    private constructor();
    clearSignals(keepObjSignals: boolean): void;
    getStates(): any;
    getBooleanSignal(name: string, createNewIfNotFound?: boolean): Ch5Signal<boolean> | null;
    getObjectAsBooleanSignal(name: string, createNewIfNotFound?: boolean): Ch5Signal<object | boolean> | null;
    getNumberSignal(name: string, createNewIfNotFound?: boolean): Ch5Signal<number> | null;
    getStringSignal(name: string, createNewIfNotFound?: boolean): Ch5Signal<string> | null;
    getObjectSignal(name: string, createNewIfNotFound?: boolean): Ch5Signal<object> | null;
    getState<T extends TSignal>(name: string, typeInstance: T, createNewIfNotFound?: boolean): Ch5Signal<T> | null;
}
