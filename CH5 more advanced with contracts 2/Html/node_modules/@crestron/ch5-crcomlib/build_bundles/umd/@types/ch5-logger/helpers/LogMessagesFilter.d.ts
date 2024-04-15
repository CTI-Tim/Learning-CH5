import { TDataLog } from '../types';
import { LogLevelEnum } from '../enums';
export declare class LogMessagesFilter {
    private _regularExpression;
    level: LogLevelEnum;
    source: string;
    static getDefaultLevel(): LogLevelEnum;
    constructor(level?: LogLevelEnum, source?: string, regexStr?: string);
    get regularExpression(): string;
    set regularExpression(value: string);
    undateSourceFromConfig(): void;
    clearFilter(): void;
    applyFilter(data: TDataLog): boolean;
    isMatchingFilterLevel(dataLevel: LogLevelEnum): boolean;
    isMatchingFilterRegex(message: string): boolean;
    isMatchingFilterSource(dataSource: string): boolean;
}
