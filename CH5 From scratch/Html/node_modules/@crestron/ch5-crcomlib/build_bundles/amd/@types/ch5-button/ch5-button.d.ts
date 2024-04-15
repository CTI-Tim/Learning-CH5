import { Ch5ButtonBase } from "./ch5-button-base";
import { ICh5ButtonListContractObj } from "./interfaces/t-for-ch5-button-list-contract";
export declare class Ch5Button extends Ch5ButtonBase {
    buttonListContractObj?: ICh5ButtonListContractObj | undefined;
    static readonly ELEMENT_NAME = "ch5-button";
    static registerSignalAttributeTypes(): void;
    static registerSignalAttributeDefaults(): void;
    static registerCustomElement(): void;
    constructor(buttonListContractObj?: ICh5ButtonListContractObj | undefined);
}
