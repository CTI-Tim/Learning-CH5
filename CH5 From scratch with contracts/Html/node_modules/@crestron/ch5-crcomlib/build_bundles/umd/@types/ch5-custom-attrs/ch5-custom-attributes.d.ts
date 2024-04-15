import { Ch5AttrsMutationObserver } from "./ch5-attrs-mutation-observer";
export declare class Ch5CustomAttributes extends Ch5AttrsMutationObserver {
    static preventUnsubscribe: boolean;
    private static _instance;
    private static ch5AttrsI18nInstance;
    protected _mutationsObserverConfig: {
        attributes: true;
        childList: true;
        subtree: true;
        attributeOldValue: true;
        attributeFilter: string[];
    };
    constructor();
    static getInstance(): Ch5CustomAttributes;
    initCh5Attributes(): void;
    initCh5AttrsMutationsObserver(): void;
    protected _mutationsCallback(mutationsList: MutationRecord[]): void;
    initCh5AttributesOnLoad(): void;
    protected handleNodesStampedIntoDOM(addedNodes: Element[]): void;
    protected handleNodesRemovalFromDOM(removedNodes: Element[]): void;
    protected handleAttributeChanges(mutation: MutationRecord): void;
}
