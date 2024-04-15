import { i18n } from 'i18next';
export declare class Ch5TranslationUtility {
    private static _instance;
    _translatorBeginKey: string;
    _translatorEndKey: string;
    static getInstance(): Ch5TranslationUtility;
    constructor();
    getTranslator(): i18n;
    valuesToTranslation(valueToTranslation: string): RegExpMatchArray | null;
    hasMultipleIdentifiers(valueToTranslation: string): boolean;
    isTranslationIdentifier(value: string): boolean;
    stripDownTranslationCharacters(value: string): string;
    set translatorBeginKey(key: string);
    get translatorBeginKey(): string;
    set translatorEndKey(key: string);
    get translatorEndKey(): string;
    private _t;
    translatedValue(valueToTranslate: string): string;
}
