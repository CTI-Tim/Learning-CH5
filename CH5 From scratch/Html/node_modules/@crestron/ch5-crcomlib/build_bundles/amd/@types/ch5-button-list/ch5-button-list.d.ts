import { Ch5SignalElementAttributeRegistryEntries } from "../ch5-common/ch5-signal-attribute-registry";
import { Ch5ButtonListBase } from "./base-classes/ch5-button-list-base";
export declare class Ch5ButtonList extends Ch5ButtonListBase {
    static ELEMENT_NAME: string;
    static readonly SIGNAL_ATTRIBUTE_TYPES: Ch5SignalElementAttributeRegistryEntries;
    static registerCustomElement(): void;
    static registerSignalAttributeTypes(): void;
    constructor();
}
