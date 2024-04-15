import { Ch5Template } from "./ch5-template";
export declare class Ch5TemplateStructure {
    private static _numInstances;
    private _element;
    private _templateElement;
    private _wrapperDiv;
    private _instanceId;
    private _elementIds;
    private static nextInstanceNum;
    constructor(element: Ch5Template);
    set element(element: Ch5Template);
    get element(): Ch5Template;
    set templateElement(template: HTMLTemplateElement);
    get templateElement(): HTMLTemplateElement;
    get instanceId(): string | null;
    get elementIds(): string[] | null;
    private initializeWrapperDiv;
    private getTemplateContent;
    generateTemplate(templateId: string, context: string): void;
}
