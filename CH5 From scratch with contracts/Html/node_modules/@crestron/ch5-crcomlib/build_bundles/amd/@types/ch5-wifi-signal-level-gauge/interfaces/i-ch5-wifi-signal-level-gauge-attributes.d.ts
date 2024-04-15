import { ICh5CommonAttributesSet3 } from "../../ch5-common/interfaces/i-ch5-common-attributes-set3";
import { TCh5WifiSignalLevelGaugeGaugeStyle, TCh5WifiSignalLevelGaugeAlignment, TCh5WifiSignalLevelGaugeSize } from './t-ch5-wifi-signal-level-gauge';
export interface ICh5WifiSignalLevelGaugeAttributes extends ICh5CommonAttributesSet3 {
    value: number;
    receiveStateValue: string;
    gaugeStyle: TCh5WifiSignalLevelGaugeGaugeStyle;
    alignment: TCh5WifiSignalLevelGaugeAlignment;
    minValue: number;
    maxValue: number;
    size: TCh5WifiSignalLevelGaugeSize;
}
