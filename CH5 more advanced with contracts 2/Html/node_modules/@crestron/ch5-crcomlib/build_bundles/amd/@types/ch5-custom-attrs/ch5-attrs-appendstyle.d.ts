import { CustomAttribute, ICh5AttrsAppendstyle } from './interfaces';
export declare class Ch5AttrsAppendstyle extends CustomAttribute<string> implements ICh5AttrsAppendstyle {
    static DATA_CH5_ATTR_NAME: string;
    static CH5_ATTR_SIG_SUB_KEY: string;
    static handleBeingAddedToDom(el: Element): void;
    static handleBeingRemovedFromDom(el: Element): void;
    static handleSubscribe(el: Element, sigName: string): string;
    static handleUnsubscribe(el: Element, sigName: string, subKey: string): void;
    static handleCh5AppendstyleAttrChange(newValue: string | null, oldValue: string | null, el: Element): void;
    static registerSignalAttributeTypes(): void;
}
