export interface IDebouncerDetails {
    start: number | undefined;
    timeoutIdentifier: any;
}
export declare const debounce: (debouncer: IDebouncerDetails, callback: () => void, debounceTime?: number) => void;
