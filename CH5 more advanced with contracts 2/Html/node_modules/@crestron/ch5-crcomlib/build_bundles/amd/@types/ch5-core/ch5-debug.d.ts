import { LogLevelEnum } from '../ch5-logger/enums/index';
export declare type TCh5DebugConfig = {
    [key: string]: boolean | string | LogLevelEnum;
};
export declare class Ch5Debug {
    static DEBUG_MESSAGE_FILTER_SOURCE_KEY: string;
    static DEBUG_MESSAGE_FILTER_LEVEL_KEY: string;
    static CONSOLE_OVERRIDDEN: boolean;
    protected static _defaultConfig: TCh5DebugConfig;
    protected static _config: TCh5DebugConfig;
    static shouldDisplay(key: string): boolean;
    static info(key: string, message?: any, ...optionalParams: any[]): void;
    static loadConfig(config: TCh5DebugConfig): void;
    static setConfigKeyValue(key: string, value: boolean | string | LogLevelEnum): void;
    static getConfig(): TCh5DebugConfig;
    static getConfigKeyValue(key: string): string | boolean | LogLevelEnum;
    static enableAll(): void;
    static disableAll(): void;
}
