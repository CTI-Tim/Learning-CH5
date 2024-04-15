interface Ch5SignalElementAttributeRegistryEntry {
    readonly direction?: "event" | "state";
    readonly booleanJoin?: number;
    readonly numericJoin?: number;
    readonly stringJoin?: number;
    readonly contractName?: boolean;
}
export interface Ch5SignalElementAttributeRegistryEntries {
    [attributeName: string]: Ch5SignalElementAttributeRegistryEntry;
}
export interface CH5SignalElementDefaultAttributeEntry {
    attributes: string[];
    defaultValue: string;
}
export interface CH5SignalElementDefaultAttributeEntries {
    contractName?: CH5SignalElementDefaultAttributeEntry;
    booleanJoin?: CH5SignalElementDefaultAttributeEntry;
    numericJoin?: CH5SignalElementDefaultAttributeEntry;
    stringJoin?: CH5SignalElementDefaultAttributeEntry;
}
export interface CH5SignalElementRegistryEntry {
    attributes: Ch5SignalElementAttributeRegistryEntries;
    addAttributeWhen?: CH5SignalElementDefaultAttributeEntries;
}
export declare class Ch5SignalAttributeRegistry {
    static readonly BOOLEAN_JOIN = "booleanJoin";
    static readonly NUMERIC_JOIN = "numericJoin";
    static readonly STRING_JOIN = "stringJoin";
    static readonly CONTRACT_NAME = "contractName";
    private static readonly CUSTOM_ATTRIBUTE_PSUEDO_ELEMENT_NAME;
    private static _instance;
    static get instance(): Ch5SignalAttributeRegistry;
    private _registry;
    private constructor();
    addElementAttributeEntries(elementName: string, entries: Ch5SignalElementAttributeRegistryEntries): void;
    addCustomAttributeEntry(attributeName: string, entry: Ch5SignalElementAttributeRegistryEntry): void;
    addElementDefaultAttributeEntries(elementName: string, entries: CH5SignalElementDefaultAttributeEntries): void;
    getElementAttributeEntry(elementName: string, attributeName: string): Ch5SignalElementAttributeRegistryEntry | undefined;
    getElementDefaultAttributeEntries(elementName: string): CH5SignalElementDefaultAttributeEntries | undefined;
}
export {};
