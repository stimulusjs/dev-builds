import { Context } from "./context";
import { StringMapObserverDelegate } from "@stimulus/mutation-observers";
export declare class DataMapObserver implements StringMapObserverDelegate {
    readonly context: Context;
    readonly receiver: any;
    private stringMapObserver;
    constructor(context: Context, receiver: any);
    start(): void;
    stop(): void;
    readonly element: Element;
    readonly identifier: string;
    getStringMapKeyForAttribute(attributeName: string): string | undefined;
    stringMapValueChanged(value: string | null, key: string): void;
    private readonly prefix;
}
