import { Ch5Label } from "../ch5-label";
import { Ch5SliderButton } from "./ch5-slider-button";
export declare class Ch5SliderButtonLabel extends Ch5Label {
    parent?: Ch5SliderButton | undefined;
    static readonly ELEMENT = "ch5-slider-button-label";
    primaryCssClass: string;
    private _parentCh5Slider;
    private debounceCreateBtnLabel;
    constructor(parent?: Ch5SliderButton | undefined);
    static get observedAttributes(): string[];
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected createInternalHtml(): void;
    protected initAttributes(): void;
    getParentButton(): Ch5SliderButton;
    protected attachEventListeners(): void;
    protected removeEventListeners(): void;
    unsubscribeFromSignals(): void;
    protected updateCssClass(): void;
    protected handleLabel(): void;
    getCssClassDisabled(): string;
}
