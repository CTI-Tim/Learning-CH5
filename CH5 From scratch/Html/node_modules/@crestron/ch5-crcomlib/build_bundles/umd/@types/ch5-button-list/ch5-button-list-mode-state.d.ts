import { Ch5ButtonListModeStateBase } from "./base-classes/ch5-button-list-mode-state-base";
import { Ch5ButtonList } from "./ch5-button-list";
export declare class Ch5ButtonListModeState extends Ch5ButtonListModeStateBase {
    static ELEMENT_NAME: string;
    static registerCustomElement(): void;
    connectedCallback(): void;
    getParentButton(): Ch5ButtonList;
}
