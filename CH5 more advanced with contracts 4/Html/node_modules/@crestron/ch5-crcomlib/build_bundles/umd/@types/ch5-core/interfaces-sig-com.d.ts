export interface ISigComSendToNative {
    bridgeSendBooleanToNative(signalName: string, value: boolean | object): void;
    bridgeSendIntegerToNative(signalName: string, value: number): void;
    bridgeSendStringToNative(signalName: string, value: string): void;
    bridgeSendObjectToNative(signalName: string, jsonEncodedString: string): void;
    bridgeSendArrayToNative(jsonEncodedArray: any[]): void;
}
export interface ISigComSubscribe {
    bridgeSubscribeBooleanSignalFromNative(signalName: string): void;
    bridgeSubscribeIntegerSignalFromNative(signalName: string): void;
    bridgeSubscribeStringSignalFromNative(signalName: string): void;
    bridgeSubscribeObjectSignalFromNative(signalName: string): void;
}
export interface ISigComUnsubscribe {
    bridgeUnsubscribeBooleanSignalFromNative(signalName: string): void;
    bridgeUnsubscribeIntegerSignalFromNative(signalName: string): void;
    bridgeUnsubscribeStringSignalFromNative(signalName: string): void;
    bridgeUnsubscribeObjectSignalFromNative(signalName: string): void;
}
export interface ISigComReceiveFromNative {
    bridgeReceiveBooleanFromNative(signalName: string, value: boolean): void;
    bridgeReceiveIntegerFromNative(signalName: string, value: number): void;
    bridgeReceiveStringFromNative(signalName: string, value: string): void;
    bridgeReceiveObjectFromNative(signalName: string, value: object): void;
    bridgeReceiveArrayFromNative(nameValuePairs: any[]): void;
}
export interface ISigComSendWebkit {
    messageHandlers: ISigComSendWebkitMessageHandlers;
}
export declare type ISWebXPanel = {
    bridgeSendBooleanToNative(signalName: string, value: boolean | object): void;
    bridgeSendIntegerToNative(signalName: string, value: number): void;
    bridgeSendStringToNative(signalName: string, value: string): void;
    bridgeSendObjectToNative(signalName: string, jsonEncodedString: string): void;
};
export interface ISigComSendWebkitMessageHandlers {
    bridgeSendBooleanToNative: IWebkitMessageHandler;
    bridgeSendIntegerToNative: IWebkitMessageHandler;
    bridgeSendStringToNative: IWebkitMessageHandler;
    bridgeSendObjectToNative: IWebkitMessageHandler;
    bridgeSendArrayToNative: IWebkitMessageHandler;
    bridgeSubscribeBooleanSignalFromNative: IWebkitMessageHandler;
    bridgeSubscribeIntegerSignalFromNative: IWebkitMessageHandler;
    bridgeSubscribeStringSignalFromNative: IWebkitMessageHandler;
    bridgeSubscribeObjectSignalFromNative: IWebkitMessageHandler;
    bridgeUnsubscribeBooleanSignalFromNative: IWebkitMessageHandler;
    bridgeUnsubscribeIntegerSignalFromNative: IWebkitMessageHandler;
    bridgeUnsubscribeStringSignalFromNative: IWebkitMessageHandler;
    bridgeUnsubscribeObjectSignalFromNative: IWebkitMessageHandler;
}
export interface IWebkitMessageHandler {
    postMessage(obj: object | string): void;
}
