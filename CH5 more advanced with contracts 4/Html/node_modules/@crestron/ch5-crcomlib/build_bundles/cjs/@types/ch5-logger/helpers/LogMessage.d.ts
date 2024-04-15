import { TDataLog } from '../types/index';
import { LogLevelEnum } from '../enums/index';
import { LogMessagesFilter } from './LogMessagesFilter';
export declare class LogMessage {
    date: Date;
    readonly level: LogLevelEnum;
    readonly message: string;
    readonly source: string;
    constructor(data: TDataLog, logFilter: LogMessagesFilter);
    protected getStringTime(): string;
    toString(): string;
}
