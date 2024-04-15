import { Ch5Log } from "../ch5-common/ch5-log";
import { Ch5Image } from "./ch5-image";
import { ICH5ImageModeAttributes } from "./interfaces/i-ch5-image-mode-attributes";
export declare class Ch5ImageMode extends Ch5Log implements ICH5ImageModeAttributes {
    static readonly ELEMENT_NAME: string;
    _url: string;
    private _parentCh5Image;
    set url(value: string);
    get url(): string;
    static get observedAttributes(): string[];
    constructor();
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    getParentImage(): Ch5Image;
}
