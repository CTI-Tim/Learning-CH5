export declare class Ch5AttrsMutationObserver {
    protected _mutationsObserver: MutationObserver | null;
    protected _mutationsObserverConfig: object;
    protected _skipedNodesNamesPrefix: string;
    protected _skipedNodesNames: string[];
    protected _nodeTypesToUse: number[];
    protected _isValidObserver(observer: any): boolean;
    startBodyMutationsObserver(): void;
    stopBodyMutationsObserver(): void;
    protected _hasCh5Attributes(node: any): boolean;
    protected _viableForCh5Attributes(n: Element): boolean;
    protected _getNodesViableForCh5Attributes(nodeList: NodeList): Element[];
    protected _childNodesWereAdded(mutation: MutationRecord): boolean;
    protected _childNodesWereRemoved(mutation: MutationRecord): boolean;
    protected getAllRegularElementsHavingCh5Attr(): Element[];
    protected getChildElementsHavingCh5Attr(el: Element | Document): Element[];
    protected getNewAttributeValue(mutation: MutationRecord): string | null;
}
