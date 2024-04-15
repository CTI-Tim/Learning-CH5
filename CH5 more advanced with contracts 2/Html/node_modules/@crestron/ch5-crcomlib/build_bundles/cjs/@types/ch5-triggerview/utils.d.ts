export declare function clamp(x: number, min?: number, max?: number): number;
export declare function booleanSetter(element: HTMLElement, attributeName: string, flag: boolean): void;
export declare function booleanGetter(element: HTMLElement, attributeName: string, defaultValue?: boolean): boolean;
export declare function intSetter(element: HTMLElement, attributeName: string, value: number): void;
export declare function intGetter(element: HTMLElement, attributeName: string, defaultValue?: number): number;
export declare function normalizeEvent(ev: any): {
    x: any;
    y: any;
    id: any;
    event: any;
    targetElement: any;
};
export declare function getCSSCustomProperty(element: HTMLElement, propertyName: string): string;
