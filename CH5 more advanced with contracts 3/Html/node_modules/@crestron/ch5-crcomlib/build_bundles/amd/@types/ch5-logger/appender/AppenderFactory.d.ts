import { AppendersEnum } from '../enums/index';
import { RemoteAppender } from './RemoteAppender';
import { TAppenderConfig } from '../types';
export declare class AppenderFactory {
    getAppender(appender: AppendersEnum, sendLogTimeOffset: number | undefined, appenderConfig: TAppenderConfig): RemoteAppender;
}
