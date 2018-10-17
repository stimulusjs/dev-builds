import { Context } from "./context";
import { StringMapObserverDelegate } from "@stimulus/mutation-observers";
export declare class ValueObserver implements StringMapObserverDelegate {
    readonly context: Context;
    readonly receiver: any;
    private stringMapObserver;
    private valueDescriptors;
    constructor(context: Context, receiver: any);
    start(): void;
    stop(): void;
    readonly element: Element;
    readonly controller: import("./controller").Controller;
    getStringMapKeyForAttribute(attributeName: string): string | undefined;
    stringMapValueChanged(attributeValue: string | null, key: string): void;
}
