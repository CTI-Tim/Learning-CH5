export interface IMousePosition {
    start: {
        x: number;
        y: number;
        time: Date;
    };
    end: {
        x: number;
        y: number;
        time: Date;
    };
}
export declare class Ch5MouseVelocity implements IMousePosition {
    start: {
        x: number;
        y: number;
        time: Date;
    };
    end: {
        x: number;
        y: number;
        time: Date;
    };
    step: number;
    constructor(step: number);
    static calculateVelocity(start: number, end: number, step: number, timeDiff: number): number;
    get x1(): number;
    get y1(): number;
    get x2(): number;
    get y2(): number;
    get timeStart(): number;
    get timeEnd(): number;
    get timeDiff(): number;
    getYSteps(): number;
}
