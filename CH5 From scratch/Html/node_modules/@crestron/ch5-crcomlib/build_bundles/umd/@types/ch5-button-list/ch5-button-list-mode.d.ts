import { Ch5ButtonListModeBase } from "./base-classes/ch5-button-list-mode-base";
import { Ch5ButtonList } from "./ch5-button-list";
export declare class Ch5ButtonListMode extends Ch5ButtonListModeBase {
    static ELEMENT_NAME: string;
    static registerCustomElement(): void;
    connectedCallback(): void;
    getParentButton(): Ch5ButtonList;
}
