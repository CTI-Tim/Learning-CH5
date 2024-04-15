import { Ch5SignalFactory } from "../../ch5-core";
export declare class ComponentHelper {
    static instance: ComponentHelper;
    private constructor();
    static getInstance(): ComponentHelper;
    static getAttributeAsString(thisRef: any, keyToCheck: string, defaultValue?: string): string;
    static getAttributeAsBool(thisRef: any, keyToCheck: string, defaultValue: boolean): boolean;
    static clearComponentContent(thisRef: any): void;
    static isNullOrUndefined(input: any): boolean;
    static setAttributeToElement(thisRef: any, attr: string, defaultValue: string): string;
    static getBoolFromString(str: string): boolean;
    static clearSignalValue(csf: Ch5SignalFactory, obj: any, receiveAttribute: string, signalReceiveAttribute: string): void;
    static setAttributesBasedValue(hasAttribute: boolean, valToAssign: any, defaultValue: string): any;
    static setAttributeValueOnControl(thisRef: any, attrKey: string, value: string, validValues: string[], callback: any): void;
    static setAttributeValueOnControlAsBool(thisRef: any, attrKey: string, value: boolean, defaultValue: boolean, callback: any): void;
}
