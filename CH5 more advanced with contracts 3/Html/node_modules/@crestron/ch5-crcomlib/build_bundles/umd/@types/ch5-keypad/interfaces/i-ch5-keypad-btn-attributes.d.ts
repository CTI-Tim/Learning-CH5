import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
export interface ICh5KeypadButtonAttributes extends ICh5CommonAttributes {
    labelMajor: string;
    labelMinor: string;
    iconClass: string;
    key: string;
    pressed: boolean;
}
