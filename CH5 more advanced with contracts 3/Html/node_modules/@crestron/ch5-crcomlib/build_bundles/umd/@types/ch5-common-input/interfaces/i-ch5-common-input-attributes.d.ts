import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
import { TCh5CommonInputFeedbackModes } from "./t-ch5-common-input";
export interface ICh5CommonInputAttributes extends ICh5CommonAttributes {
    feedbackMode: TCh5CommonInputFeedbackModes;
    signalValueSyncTimeout: number | string;
}
