import { TCh5ButtonCheckboxPosition, TCh5ButtonHorizontalAlignLabel, TCh5ButtonIconPosition, TCh5ButtonIconUrlFillType, TCh5ButtonType, TCh5ButtonVerticalAlignLabel } from ".";
export interface ICh5ButtonModeCommonAttributes {
    labelInnerHTML: string;
    type: TCh5ButtonType | null;
    iconClass: string;
    iconPosition: TCh5ButtonIconPosition | null;
    iconUrl: string;
    iconUrlFillType: TCh5ButtonIconUrlFillType | null;
    customClass: string;
    customStyle: string;
    checkboxPosition: TCh5ButtonCheckboxPosition | null;
    hAlignLabel: TCh5ButtonHorizontalAlignLabel | null;
    vAlignLabel: TCh5ButtonVerticalAlignLabel | null;
}
