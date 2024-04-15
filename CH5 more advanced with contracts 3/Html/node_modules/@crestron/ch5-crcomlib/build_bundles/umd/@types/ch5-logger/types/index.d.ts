import { LogLevelEnum } from '../enums/index';
export declare type TDataLog = {
    level: LogLevelEnum;
    source: string;
    message: string;
};
export declare type TLogMessageType = any[];
export declare type TAppenderConfig = {
    hostname: string;
    port: string;
    secure: boolean;
};
