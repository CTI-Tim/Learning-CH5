import { ICustomAttribute } from "./i-custom-attribute";
export declare abstract class CustomAttribute<T> implements ICustomAttribute<T> {
    private _type;
    get type(): T;
    set type(value: T);
}
