import { Logger } from '../logger/index';
import { AbstractAppender } from '../appender/AbstractAppender';
import { LogMessagesFilter } from '../helpers/LogMessagesFilter';
export declare function getLogger(appender: AbstractAppender, overrideGlobalConsole?: boolean, logFilter?: LogMessagesFilter): Logger;
