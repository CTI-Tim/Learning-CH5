import { TSignalNonStandardTypeName, TSignalValue } from "../types/core";
export declare function getState(signalType: TSignalNonStandardTypeName, signalName: string, defaultValue?: TSignalValue): TSignalValue | null;
export declare function getBooleanSignalValue(signalName: string, defaultValue?: boolean): boolean | null;
export declare function getNumericSignalValue(signalName: string, defaultValue?: number): number | null;
export declare function getStringSignalValue(signalName: string, defaultValue?: string): string | null;
export declare function getObjectSignalValue(signalName: string, defaultValue?: object): object | null;
