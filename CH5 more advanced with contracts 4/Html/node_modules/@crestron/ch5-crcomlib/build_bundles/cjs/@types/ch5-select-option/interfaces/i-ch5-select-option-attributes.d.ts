import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
import { TCh5SelectOptionIconPosition } from "./types/t-ch5-select-option-icon-position";
export interface ICh5SelectOptionAttributes extends ICh5CommonAttributes {
    iconPosition: TCh5SelectOptionIconPosition | string;
    useDefaultTmpl: boolean;
    receiveStateSelected: string | null;
    receiveStateLabel: string | null;
    receiveStateUrl: string | null;
    receiveStateScriptLabelHTML: string | null;
    sendEventOnClick: string | null;
}
