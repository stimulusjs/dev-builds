import { Context } from "./context";
import { StringMapObserverDelegate } from "@stimulus/mutation-observers";
export declare class ValueObserver implements StringMapObserverDelegate {
    readonly context: Context;
    readonly receiver: any;
    private stringMapObserver;
    private keysByAttributeName;
    constructor(context: Context, receiver: any);
    start(): void;
    stop(): void;
    readonly element: Element;
    readonly controller: import("./controller").Controller;
    getStringMapKeyForAttribute(attributeName: string): string;
    stringMapValueChanged(attributeValue: string | null, key: string): void;
    private getKeysByAttributeName;
    private readonly valueAttributeMap;
}
