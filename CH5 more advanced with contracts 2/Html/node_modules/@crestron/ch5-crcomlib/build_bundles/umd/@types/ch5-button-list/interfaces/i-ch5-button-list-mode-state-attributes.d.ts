import { TCh5ButtonListButtonType, TCh5ButtonListButtonHAlignLabel, TCh5ButtonListButtonVAlignLabel, TCh5ButtonListButtonCheckboxPosition, TCh5ButtonListButtonIconPosition, TCh5ButtonListButtonModeState } from "./t-ch5-button-list";
export interface ICh5ButtonListModeStateAttributes {
    state: TCh5ButtonListButtonModeState;
    type: TCh5ButtonListButtonType;
    hAlignLabel: TCh5ButtonListButtonHAlignLabel;
    vAlignLabel: TCh5ButtonListButtonVAlignLabel;
    checkboxPosition: TCh5ButtonListButtonCheckboxPosition;
    iconPosition: TCh5ButtonListButtonIconPosition;
    iconClass: string;
    iconUrl: string;
    customClass: string;
    customStyle: string;
    labelInnerHTML: string;
}
