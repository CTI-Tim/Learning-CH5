export declare type Ch5RcbSimpleObject = {
    'rcb': {
        'value': number;
        'time': number;
    };
};
export declare type Ch5RcbExtendedObject = {
    'rcb': {
        'value': number;
        'time': number;
        'startv': number;
        'startt': number;
    };
};
export declare type Ch5RcbObject = Ch5RcbSimpleObject | Ch5RcbExtendedObject;
export declare function bridgeReceiveIntegerFromNative(signalName: string, value: number): void;
export declare function bridgeReceiveBooleanFromNative(signalName: string, value: boolean): void;
export declare function bridgeReceiveStringFromNative(signalName: string, value: string): void;
export declare function bridgeReceiveObjectFromNative(signalName: string, value: object): void;
