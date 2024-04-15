import { ICh5CommonAttributesSet3 } from "../../ch5-common/interfaces/i-ch5-common-attributes-set3";
export interface ICh5ColorPickerAttributes extends ICh5CommonAttributesSet3 {
    maxValue: number;
    receiveStateRedValue: string;
    receiveStateGreenValue: string;
    receiveStateBlueValue: string;
    sendEventColorRedOnChange: string;
    sendEventColorGreenOnChange: string;
    sendEventColorBlueOnChange: string;
}
