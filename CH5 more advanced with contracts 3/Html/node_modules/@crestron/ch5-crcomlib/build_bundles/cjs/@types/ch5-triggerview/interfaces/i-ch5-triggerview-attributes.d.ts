import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
export interface ICh5TriggerViewAttributes extends ICh5CommonAttributes {
    activeView: number;
    endless: boolean;
    gestureable: boolean;
    nested: boolean;
    sendEventShowChildIndex: string;
    receiveStateShowChildIndex: string;
    disableAnimation: boolean;
}
