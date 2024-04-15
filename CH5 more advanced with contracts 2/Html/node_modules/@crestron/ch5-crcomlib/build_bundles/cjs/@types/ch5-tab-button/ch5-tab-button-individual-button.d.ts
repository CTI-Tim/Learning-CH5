import { Ch5Log } from "../ch5-common/ch5-log";
import { Ch5TabButton } from "./ch5-tab-button";
import { ICh5PropertySettings } from "../ch5-core/ch5-property";
import { ICh5TabButtonIndividualButtonAttributes } from "./interfaces/i-ch5-tab-button-individual-button-attributes";
export declare class Ch5TabButtonIndividualButton extends Ch5Log implements ICh5TabButtonIndividualButtonAttributes {
    static readonly COMPONENT_PROPERTIES: ICh5PropertySettings[];
    static ELEMENT_NAME: string;
    primaryCssClass: string;
    private _ch5Properties;
    protected _parentCh5TabButton: Ch5TabButton | null;
    set parentComponent(value: Ch5TabButton | null);
    get parentComponent(): Ch5TabButton | null;
    set labelInnerHTML(value: string);
    get labelInnerHTML(): string;
    set iconUrl(value: string);
    get iconUrl(): string;
    set iconClass(value: string);
    get iconClass(): string;
    set onRelease(value: string);
    get onRelease(): string;
    static registerCustomElement(): void;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getParentButton(): Ch5TabButton;
}
