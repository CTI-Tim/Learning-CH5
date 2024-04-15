import { Ch5ListAbstractHelper } from "./ch5-list-abstract-helper";
export interface ICh5ListBufferedItems {
    bufferActive: boolean;
    bufferingComplete: boolean;
    bufferForwardStartIndex: number;
    forwardBufferedItems: HTMLElement[];
    bufferBackwardsStartIndex: number;
    backwardsBufferedItems: HTMLElement[];
}
export declare class Ch5ListBufferedItems extends Ch5ListAbstractHelper {
    bufferItems(skipForward?: boolean, skipBackwards?: boolean): void;
    _appendForwardBufferedItemsToList(currentScrollPos: number, verticalDir: boolean, itemSizeOffset: number): void;
    maybeAddBufferItems(newPosition: number): void;
    private _bufferItemsForward;
    private _bufferItemsBackwards;
    private _appendBackwardsBufferedItemsToList;
}
