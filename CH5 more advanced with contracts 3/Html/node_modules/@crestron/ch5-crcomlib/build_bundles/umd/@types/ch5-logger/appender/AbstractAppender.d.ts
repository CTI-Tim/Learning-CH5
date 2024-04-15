import { LogMessage } from '../helpers/index';
import { Observable, BehaviorSubject } from 'rxjs';
export declare abstract class AbstractAppender {
    private _sendLogTimeOffset;
    isInitialized: boolean;
    isInitializedSubject: BehaviorSubject<boolean>;
    constructor(sendLogTimeOffsetInMiliseconds: number);
    set sendLogTimeOffset(sendLogTimeOffset: Observable<number>);
    get sendLogTimeOffset(): Observable<number>;
    abstract closeSocketConnection(): void;
    abstract configObserver(config: {}, hasConfig: boolean): void;
    abstract log(data: LogMessage): void;
}
