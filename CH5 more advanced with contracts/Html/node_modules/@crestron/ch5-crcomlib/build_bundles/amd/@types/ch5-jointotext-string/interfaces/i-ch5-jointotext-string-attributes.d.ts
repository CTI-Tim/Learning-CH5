import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
export interface ICh5JoinToTextStringAttributes extends ICh5CommonAttributes {
    value: string;
    textWhenEmpty: string;
    receiveStateValue: string;
}
