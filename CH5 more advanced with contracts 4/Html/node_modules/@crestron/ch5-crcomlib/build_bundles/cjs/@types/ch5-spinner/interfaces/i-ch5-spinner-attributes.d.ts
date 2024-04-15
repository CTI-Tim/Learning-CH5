import { TCh5SpinnerIconPosition } from ".";
import { TCh5CommonInputFeedbackModes } from "../../ch5-common-input/interfaces/t-ch5-common-input";
import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
export interface ICh5SpinnerAttributes extends ICh5CommonAttributes {
    size: number;
    label: string;
    iconPosition: TCh5SpinnerIconPosition;
    selectedValue: number;
    itemHeight: string;
    visibleItemScroll: number;
    feedbackMode: TCh5CommonInputFeedbackModes;
    signalValueSyncTimeout: number;
    indexId: string;
    onclean: {};
    ondirty: {};
    resize: boolean;
    endless: boolean;
    autoSetItemHeight: boolean;
    receiveStateValue: string;
    receiveStateSize: string;
    receiveStateLabel: string;
    receiveStateUrl: string;
    sendEventOnChange: string;
    sendEventOnFocus: string;
    sendEventOnOverflow: string;
    sendEventOnUnderflow: string;
}
