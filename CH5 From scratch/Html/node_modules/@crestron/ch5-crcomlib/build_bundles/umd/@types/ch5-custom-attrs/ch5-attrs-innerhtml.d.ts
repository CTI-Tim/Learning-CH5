import { CustomAttribute, ICh5AttrsInnerHTML } from './interfaces';
export declare class Ch5AttrsInnerhtml extends CustomAttribute<string> implements ICh5AttrsInnerHTML {
    static DATA_CH5_ATTR_NAME: string;
    static CH5_ATTR_SIG_SUB_KEY: string;
    static handleBeingAddedToDom(el: Element): void;
    static handleBeingRemovedFromDom(el: Element): void;
    static handleSubscribe(el: Element, sigName: string): string;
    static handleUnsubscribe(el: Element, sigName: string, subKey: string): void;
    static handleCh5InnerhtmlAttrChange(newValue: string | null, oldValue: string | null, el: Element): void;
    static registerSignalAttributeTypes(): void;
}
