import { ICh5ClearRangeDataModel } from "./ch5-clear-range-data-model";
export interface IResynchronizationRequestModel {
    id: string;
    state: string;
    value?: {
        excludePrefixes?: string[];
        range?: ICh5ClearRangeDataModel;
    };
}
