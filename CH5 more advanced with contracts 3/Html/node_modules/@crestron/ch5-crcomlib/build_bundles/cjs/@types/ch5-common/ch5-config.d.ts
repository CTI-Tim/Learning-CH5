import { Ch5Common } from "./ch5-common";
export declare type TCh5ConfigAttributes = {
    [attrName: string]: string;
};
export declare type TCh5ConfigTemplateVars = {
    [varName: string]: string;
};
export declare type TCh5Config = {
    "attributes": {
        "id": {
            [id: string]: TCh5ConfigAttributes;
        };
        "component": {
            [component: string]: TCh5ConfigAttributes;
        };
    };
    "templatevariables": {
        "id": {
            [id: string]: TCh5ConfigTemplateVars[];
        };
    };
};
export declare class Ch5Config {
    protected static _defaultConfig: TCh5Config;
    protected static _config: TCh5Config;
    static loadConfig(newConfig: TCh5Config): void;
    static setAttributeForId(elementId: string, attributeName: string, attributeValue: string): void;
    static setAttributeForComponent(componentName: string, attributeName: string, attributeValue: string): void;
    static setTemplateVarsForId(elementId: string, tempVarsItems: any[]): void;
    static getConfig(): TCh5Config;
    static getAttributesForId(elementId: string): TCh5ConfigAttributes;
    static getAttributesForComponent(componentName: string): TCh5ConfigAttributes;
    static getAttributesForElement(cr: Ch5Common): TCh5ConfigAttributes;
    static getTemplateVarsForElementById(elementId: string): TCh5ConfigTemplateVars[];
    static getTemplateVarsForElement(cr: Ch5Common): TCh5ConfigTemplateVars[];
}
