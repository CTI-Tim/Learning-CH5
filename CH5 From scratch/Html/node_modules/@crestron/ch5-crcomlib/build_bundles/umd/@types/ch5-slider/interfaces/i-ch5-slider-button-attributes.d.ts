import { TCh5SliderButtonShape, TCh5IconUrlFillType, TCh5SliderButtonKey, TCh5SliderButtonVerticalAlignLabel, TCh5SliderButtonType, TCh5SliderButtonHorizontalAlignLabel } from './t-ch5-slider-button';
export interface ICh5SliderButtonAttributes {
    key: TCh5SliderButtonKey;
    label: string;
    labelInnerHTML: string;
    iconClass: string;
    iconUrl: string;
    sendEventOnClick: string;
    receiveStateLabel: string;
    receiveStateIconClass: string;
    receiveStateIconUrl: string;
    iconUrlFillType: TCh5IconUrlFillType | null;
    type: TCh5SliderButtonType;
    hAlignLabel: TCh5SliderButtonHorizontalAlignLabel;
    vAlignLabel: TCh5SliderButtonVerticalAlignLabel;
    selected: boolean;
    pressed: boolean;
    shape: TCh5SliderButtonShape;
}
