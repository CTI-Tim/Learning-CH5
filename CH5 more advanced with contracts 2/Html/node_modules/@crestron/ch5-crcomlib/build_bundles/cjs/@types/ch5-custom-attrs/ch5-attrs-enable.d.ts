import { CustomAttribute, ICh5AttrsEnable } from './interfaces';
export declare class Ch5AttrsEnable extends CustomAttribute<string> implements ICh5AttrsEnable {
    static DATA_CH5_ATTR_NAME: string;
    static KEEP_SIG_SUBS_ATTR: string;
    static SIGNAL_SUBSCRIPTION_KEY_ATTR: string;
    static checkAndSubscribeToSignal(el: Element): void;
    static handleElAddedToDOM(el: Element): void;
    static elHasRemovableSigSubscription(el: Element): boolean;
    protected static unsubscribeDataCh5EnableSig(sigName: string, sigSubsKey: string): void;
    static removeSigSubscription(el: Element): void;
    static handleCh5EnableAttributeChange(newValue: string | null, oldValue: string | null, n: Element): void;
    static handleDataCh5EnableReceived(el: Element, enable: boolean): void;
    static registerSignalAttributeTypes(): void;
}
