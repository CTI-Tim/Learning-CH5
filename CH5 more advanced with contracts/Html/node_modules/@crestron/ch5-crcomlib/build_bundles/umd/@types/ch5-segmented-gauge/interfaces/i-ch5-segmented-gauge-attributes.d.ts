import { ICh5CommonAttributesSet3 } from "../../ch5-common/interfaces/i-ch5-common-attributes-set3";
import { TCh5SegmentedGaugeOrientation, TCh5SegmentedGaugeGaugeLedStyle, TCh5SegmentedGaugeStateGraphic } from './t-ch5-segmented-gauge';
export interface ICh5SegmentedGaugeAttributes extends ICh5CommonAttributesSet3 {
    orientation: TCh5SegmentedGaugeOrientation;
    gaugeLedStyle: TCh5SegmentedGaugeGaugeLedStyle;
    primaryStateGraphic: TCh5SegmentedGaugeStateGraphic;
    secondaryStateGraphic: TCh5SegmentedGaugeStateGraphic;
    tertiaryStateGraphic: TCh5SegmentedGaugeStateGraphic;
    minValue: number;
    maxValue: number;
    numberOfSegments: number;
    value: number;
    touchSettable: boolean;
    sendEventOnClick: string;
    sendEventOnChange: string;
    receiveStateValue: string;
}
