import { TCh5JoinInfoNumericFormats } from "../interfaces/t-ch5-jointotext-numeric";
import { NumericFormat } from "./numeric-format";
export declare class NumericFormatFactory {
    private static INSTANCE;
    private constructor();
    static getInstance(): NumericFormatFactory;
    getFormat(type: TCh5JoinInfoNumericFormats): NumericFormat;
}
