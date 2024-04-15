export declare type TSigNameTypeSub = {
    sigName: string;
    sigType: 'b' | 'n' | 's';
    sigSub: string;
};
export declare const subscribeStateScriptSigSubs: {
    [key: string]: TSigNameTypeSub[];
};
export declare function generateSubSigScriptKey(): string;
export declare function unsubscribeStateScript(subKey: string): void;
export declare function subscribeStateScript(signalScript: string, callback: (update: string) => {}, defaultValue?: string): string;
