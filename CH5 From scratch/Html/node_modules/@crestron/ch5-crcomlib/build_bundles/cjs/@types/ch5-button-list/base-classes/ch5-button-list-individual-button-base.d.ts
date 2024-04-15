import { Ch5Log } from "../../ch5-common/ch5-log";
import { ICh5PropertySettings } from "../../ch5-core/ch5-property";
import { ICh5ButtonListIndividualButtonAttributes } from './../interfaces/i-ch5-button-list-individual-button-attributes';
import { Ch5ButtonListBase } from "./ch5-button-list-base";
export declare class Ch5ButtonListIndividualButtonBase extends Ch5Log implements ICh5ButtonListIndividualButtonAttributes {
    static readonly COMPONENT_PROPERTIES: ICh5PropertySettings[];
    private _ch5Properties;
    private _parentCh5ButtonList;
    set parentComponent(value: Ch5ButtonListBase | null);
    get parentComponent(): Ch5ButtonListBase | null;
    set labelInnerHTML(value: string);
    get labelInnerHTML(): string;
    set iconUrl(value: string);
    get iconUrl(): string;
    set iconClass(value: string);
    get iconClass(): string;
    set onRelease(value: string);
    get onRelease(): string;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected initAttributes(): void;
}
