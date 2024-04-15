import { ICh5CommonAttributes } from '../../ch5-common/interfaces';
import { TCh5ListElementOrientation } from '../interfaces/t-ch5-list';
export interface ICh5ListAttributes extends ICh5CommonAttributes {
    size: number | null;
    orientation: TCh5ListElementOrientation | null;
    bufferAmount: number | null;
    itemHeight: string | null;
    itemWidth: string | null;
    minWidth: string | null;
    maxWidth: string | null;
    minHeight: string | null;
    maxHeight: string | null;
    scrollToTime: number;
    indexId: string | null;
    scrollbar: boolean;
    pagedSwipe: boolean;
    endless: boolean;
    receiveStateSize: string | null | undefined;
    receiveStateScrollTo: string | null | undefined;
    receiveStateTemplateVars: string | null | undefined;
}
