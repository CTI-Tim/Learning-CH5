import { Ch5ButtonListIndividualButtonBase } from "./base-classes/ch5-button-list-individual-button-base";
import { Ch5ButtonList } from "./ch5-button-list";
export declare class Ch5ButtonListIndividualButton extends Ch5ButtonListIndividualButtonBase {
    static ELEMENT_NAME: string;
    static registerCustomElement(): void;
    connectedCallback(): void;
    getParentButton(): Ch5ButtonList;
}
