import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
import { TCh5JoinInfoNumericFormats } from "./t-ch5-jointotext-numeric";
export interface ICh5JoinToTextNumericAttributes extends ICh5CommonAttributes {
    value: string;
    type: TCh5JoinInfoNumericFormats;
    receiveStateValue: string;
    decimalLength: number;
    length: number;
    min: number;
    max: number;
}
