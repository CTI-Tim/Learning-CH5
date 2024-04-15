import { Ch5Button } from "./ch5-button";
import { Ch5ButtonMode } from "./ch5-button-mode";
import { Ch5ButtonModeState } from "./ch5-button-mode-state";
import { TCh5ButtonIconPosition, TCh5ButtonType, TCh5ButtonCheckboxPosition, TCh5ButtonHorizontalAlignLabel, TCh5ButtonVerticalAlignLabel, TCh5ButtonIconUrlFillType } from './interfaces/t-ch5-button';
export interface ICh5ButtonExtendedProperties {
    type?: TCh5ButtonType;
    iconClass?: string;
    iconPosition?: TCh5ButtonIconPosition;
    iconUrl?: string;
    checkboxPosition?: TCh5ButtonCheckboxPosition;
    customClass?: string;
    customStyle?: string;
    hAlignLabel?: TCh5ButtonHorizontalAlignLabel;
    vAlignLabel?: TCh5ButtonVerticalAlignLabel;
    label?: string;
    labelHtml?: string;
    iconUrlFillType?: TCh5ButtonIconUrlFillType | null;
}
export declare class Ch5ButtonUtils {
    static getAttributeValue<T>(thisClass: Ch5Button | Ch5ButtonMode | Ch5ButtonModeState, attributeName: string, value: T, defaultOutputValue: T): T;
    static getValidInputValue<T>(masterData: T[], value: T): T;
}
