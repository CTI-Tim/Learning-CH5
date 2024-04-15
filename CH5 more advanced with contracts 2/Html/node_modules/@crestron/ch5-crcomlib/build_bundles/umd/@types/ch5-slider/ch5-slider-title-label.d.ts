import { ICh5SliderTitleLabelAttributes } from './interfaces/i-ch5-slider-title-label-attributes';
import { Ch5Slider } from ".";
import { Ch5Label } from "../ch5-label";
export declare class Ch5SliderTitleLabel extends Ch5Label implements ICh5SliderTitleLabelAttributes {
    parent?: Ch5Slider | undefined;
    static readonly ELEMENT = "ch5-slider-title-label";
    primaryCssClass: string;
    private _parentCh5Slider;
    constructor(parent?: Ch5Slider | undefined);
    static get observedAttributes(): string[];
    static registerSignalAttributeTypes(): void;
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected createInternalHtml(): void;
    protected initAttributes(): void;
    getParentButton(): Ch5Slider;
    protected attachEventListeners(): void;
    protected removeEventListeners(): void;
    unsubscribeFromSignals(): void;
    protected updateCssClass(): void;
    getCssClassDisabled(): string;
}
