import { CustomAttribute, Ch5AttrShowTypes, ICh5AttrsShowPulse } from './interfaces';
export declare class Ch5AttrsShowPulse extends CustomAttribute<Ch5AttrShowTypes> implements ICh5AttrsShowPulse {
    static DATA_CH5_ATTR_NAME: string;
    static NOSHOW_VALUES: string[];
    static DEFAULT_NOSHOW_VALUE: string;
    static KEEP_SIG_SUBS_ATTR: string;
    static SIGNAL_SUBSCRIPTION_KEY_ATTR: string;
    static checkAndSubscribeToSignal(el: Element): void;
    static handleElAddedToDOM(el: Element): void;
    static elHasRemovableSigSubscription(el: Element): boolean;
    protected static unsubscribeDataCh5ShowPulseSig(sigName: string, sigSubsKey: string): void;
    static removeSigSubscription(el: Element): void;
    static handleCh5ShowPulseAttributeChange(newValue: string | null, oldValue: string | null, n: Element): void;
    static handleDataCh5ShowPulseReceived(el: Element, show: boolean): void;
    static showElement(el: Element): void;
    static getNoShowType(el: Element): string;
    static hideElement(el: Element, noshowType: string): void;
    static registerSignalAttributeTypes(): void;
}
