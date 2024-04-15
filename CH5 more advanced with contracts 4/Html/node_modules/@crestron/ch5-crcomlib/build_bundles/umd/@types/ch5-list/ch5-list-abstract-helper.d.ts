import { Ch5ListTemplate } from "./ch5-list-template";
import { Ch5ListEventManager } from "./ch5-list-event-manager";
import { Ch5ListAnimation } from "./ch5-list-animation";
import { Ch5List } from "./ch5-list";
export declare abstract class Ch5ListAbstractHelper {
    protected _list: Ch5List;
    protected _templateHelper: Ch5ListTemplate;
    protected _eventManager: Ch5ListEventManager;
    protected _animationHelper: Ch5ListAnimation;
    constructor(list: Ch5List);
    addTemplateHelper(templateHelper: Ch5ListTemplate): void;
    addAnimationHelper(animationHelper: Ch5ListAnimation): void;
    addEventManager(eventManager: Ch5ListEventManager): void;
}
