import { Ch5Common } from "../ch5-common/ch5-common";
import { Ch5SignalElementAttributeRegistryEntries } from "../ch5-common/ch5-signal-attribute-registry";
import { ICh5JoinToTextStringAttributes } from "./interfaces/i-ch5-jointotext-string-attributes";
export declare class Ch5JoinToTextString extends Ch5Common implements ICh5JoinToTextStringAttributes {
    static readonly SIGNAL_ATTRIBUTE_TYPES: Ch5SignalElementAttributeRegistryEntries;
    static readonly ELEMENT_NAME = "ch5-jointotext-string";
    private _receiveStateValue;
    private _textWhenEmpty;
    private _value;
    private _subReceiveStateValue;
    set textWhenEmpty(value: string);
    get textWhenEmpty(): string;
    set receiveStateValue(value: string);
    get receiveStateValue(): string;
    set value(value: string);
    get value(): string;
    static registerSignalAttributeTypes(): void;
    static registerCustomElement(): void;
    static get observedAttributes(): string[];
    connectedCallback(): void;
    protected initAttributes(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    private setTextContent;
}
