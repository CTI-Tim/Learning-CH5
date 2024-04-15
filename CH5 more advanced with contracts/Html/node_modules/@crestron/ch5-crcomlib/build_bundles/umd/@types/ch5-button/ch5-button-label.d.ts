import { Ch5Log } from "../ch5-common/ch5-log";
import { ICh5ButtonLabelAttributes } from "./interfaces/i-ch5-button-label-attributes";
export declare class Ch5ButtonLabel extends Ch5Log implements ICh5ButtonLabelAttributes {
    static readonly ELEMENT_NAME: string;
    constructor();
    static registerSignalAttributeTypes(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
