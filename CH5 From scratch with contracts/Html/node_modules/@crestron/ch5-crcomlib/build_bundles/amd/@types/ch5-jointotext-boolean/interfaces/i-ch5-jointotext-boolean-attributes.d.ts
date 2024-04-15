import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
export interface ICh5JoinToTextBooleanAttributes extends ICh5CommonAttributes {
    value: boolean;
    textWhenTrue: string;
    textWhenFalse: string;
    receiveStateValue: string;
}
