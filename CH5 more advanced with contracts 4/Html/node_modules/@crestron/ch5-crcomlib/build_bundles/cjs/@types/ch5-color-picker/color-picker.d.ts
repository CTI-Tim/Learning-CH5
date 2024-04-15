import { Subject } from "rxjs";
export declare class ColorPicker {
    pickerId: string;
    private joe;
    colorChanged: Subject<number[]>;
    constructor(pickerId: string, newColor: string);
    private invertHex;
    setColor(newColor: string): void;
    get picker(): any;
}
