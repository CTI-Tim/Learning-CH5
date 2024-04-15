import { AxiosResponse } from "axios";
import { LogMessage, LogMessagesFilter } from "../helpers/index";
export declare class RequestService {
    private _uri;
    private _requestAPI;
    constructor(uri: string);
    post(endpoint: string, data: LogMessage): Promise<boolean>;
    get(endpoint: string): Promise<AxiosResponse<LogMessagesFilter>> | boolean;
    set uri(uri: string);
    get uri(): string;
}
