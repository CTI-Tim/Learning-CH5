import { Ch5Signal } from "../ch5-signal";
export declare type TSignal = boolean | number | string | object;
export declare type TCh5Signal = Ch5Signal<boolean> | Ch5Signal<number> | Ch5Signal<string> | Ch5Signal<object> | null;
export declare type TSignalBagByType = {
    "boolean": {
        [key: string]: object | null;
    };
    "number": {
        [key: string]: object | null;
    };
    "object": {
        [key: string]: object | null;
    };
    "string": {
        [key: string]: object | null;
    };
    [key: string]: {
        [key: string]: object | null;
    };
};
