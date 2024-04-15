export declare class Ch5TriggerViewSwiper {
    slides: HTMLElement[];
    private _activeView;
    get activeView(): number;
    set activeView(input: number);
    constructor(id: string);
    incrementActiveView(endless: boolean): void;
    decrementActiveView(endless: boolean): void;
}
