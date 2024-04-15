import { TCh5ListElementOrientation } from "./interfaces";
export declare class Ch5ListSizeResolver {
    elements: HTMLElement[];
    viewPortSize: number;
    fullListSize: number;
    hiddenListSize: number;
    orientation: TCh5ListElementOrientation;
    constructor(elements: HTMLElement[], orientation: TCh5ListElementOrientation);
    getItemsPerPage(): number;
    getTotalSize(): number;
    getOverflowSize(): number;
    getFullSize(): number;
    updateViewport(viewport: HTMLElement): void;
    private init;
    private getElementSize;
}
