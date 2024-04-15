import { TCh5ButtonType } from "../../ch5-button/interfaces/t-ch5-button";
import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
export interface ICh5FormAttributes extends ICh5CommonAttributes {
    submitButtonLabel: string;
    submitButtonIcon: string;
    submitButtonStyle: string;
    submitButtonType: TCh5ButtonType;
    cancelButtonLabel: string;
    cancelButtonIcon: string;
    cancelButtonStyle: string;
    cancelButtonType: TCh5ButtonType;
    submitId: string;
    cancelId: string;
    hideCancelButton: boolean;
    hideSubmitButton: boolean;
}
