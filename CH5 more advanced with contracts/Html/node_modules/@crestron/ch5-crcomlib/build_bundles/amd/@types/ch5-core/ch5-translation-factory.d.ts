import { i18n } from 'i18next';
export declare class Ch5TranslationFactory {
    receiveUpdateSub: string;
    protected _translator: i18n;
    get translator(): i18n;
    set translator(translator: i18n);
    private runListeners;
}
export declare const translationFactory: Ch5TranslationFactory;
export declare const languageChangedSignalName = "language_changed";
