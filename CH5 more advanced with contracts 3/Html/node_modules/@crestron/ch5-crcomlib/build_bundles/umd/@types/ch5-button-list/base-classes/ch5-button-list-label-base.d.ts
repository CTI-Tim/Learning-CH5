import { Ch5Log } from "../../ch5-common/ch5-log";
import { ICh5ButtonListLabelDocumentation } from "./../interfaces/i-ch5-button-list-label-documentation";
export declare class Ch5ButtonListLabelBase extends Ch5Log implements ICh5ButtonListLabelDocumentation {
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
}
