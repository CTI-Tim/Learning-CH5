export declare class Ch5ButtonPressInfo {
    private readonly _threshold;
    private _startX;
    private _startY;
    private _endX;
    private _endY;
    valid(): boolean;
    saveStart(x: number, y: number): void;
    saveEnd(x: number, y: number): void;
    set startX(x: number);
    get startX(): number;
    set startY(y: number);
    get startY(): number;
    set endX(x: number);
    get endX(): number;
    set endY(y: number);
    get endY(): number;
    private calculatePointDiff;
}
