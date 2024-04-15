import { TCh5OverlayPanelStretch, TCh5OverlayPanelOverflow, TCh5OverlayPanelPositionOffset } from ".";
import { ICh5CommonAttributes } from "../../ch5-common/interfaces";
export interface ICh5OverlayPanelAttributes extends ICh5CommonAttributes {
    closeIcon: string;
    stretch: TCh5OverlayPanelStretch | null;
    overflow: TCh5OverlayPanelOverflow;
    positionTo: string;
    positionOffset: TCh5OverlayPanelPositionOffset;
    dismissable: boolean;
    closable: boolean;
    receiveStatePositionTo: string;
    receiveStatePositionOffset: string;
    sendEventOnBeforeShow: string;
    sendEventOnAfterShow: string;
    sendEventOnBeforeHide: string;
    sendEventOnAfterHide: string;
}
