import { Ch5CommonLog } from './ch5-common-log';
export declare class Ch5Log extends HTMLElement {
    protected _id: string;
    protected _crId: string;
    logger: Ch5CommonLog;
    constructor();
    static get observedAttributes(): string[];
    getCrId(): string;
    info(message?: any, ...optionalParams: any[]): void;
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    protected initAttributes(): void;
    protected toBoolean(val: any, isEmptyValueEqualToTrue?: boolean): boolean;
}
