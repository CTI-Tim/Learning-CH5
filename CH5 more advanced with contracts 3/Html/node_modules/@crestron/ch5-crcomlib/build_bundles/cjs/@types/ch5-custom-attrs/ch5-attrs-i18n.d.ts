import { CustomAttribute, ICh5AttrsI18n, SavedElementInfo } from './interfaces';
export declare class Ch5AttrsI18n extends CustomAttribute<string> implements ICh5AttrsI18n {
    static DATA_CH5_ATTR_NAME: string;
    static DATA_CH5_EL_ID_PREFIX: string;
    static RANDOM_NUMBER_LENGTH: number;
    static EXPECTED_SUBATTRIBUTE_POSITION: number;
    static SUBATTRIBUTE_TYPE: string;
    translatableData: SavedElementInfo[];
    private initialIndexValue;
    updateOnChange(): void;
    handleBeingAddedToDom(el: Element): void;
    private getTextDisplayInfo;
    private updateValueToDom;
    private checkElementExistInDom;
    private removeExtraNode;
    private getTranslatedValue;
    private doTranslation;
}
