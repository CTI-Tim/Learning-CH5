import { ICh5CommonAttributesSet3 } from "../../ch5-common/interfaces/i-ch5-common-attributes-set3";
import { TCh5SignalLevelGaugeOrientation, TCh5SignalLevelGaugeSize } from './t-ch5-signal-level-gauge';
export interface ICh5SignalLevelGaugeAttributes extends ICh5CommonAttributesSet3 {
    value: number;
    orientation: TCh5SignalLevelGaugeOrientation;
    minValue: number;
    maxValue: number;
    numberOfBars: number;
    signalBarSpacing: number;
    receiveStateValue: string;
    size: TCh5SignalLevelGaugeSize;
}
