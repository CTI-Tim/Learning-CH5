import { ICh5AttributesColorChip } from "../../ch5-common/interfaces/i-ch5-common-attributes-color-chip";
export interface ICh5ColorChipAttributes extends ICh5AttributesColorChip {
    previewColor: string;
    maxValue: number;
    sendEventOnClick: string;
    receiveStateRedValue: string;
    receiveStateGreenValue: string;
    receiveStateBlueValue: string;
    sendEventColorRedOnChange: string;
    sendEventColorGreenOnChange: string;
    sendEventColorBlueOnChange: string;
}
