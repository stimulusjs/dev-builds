import { Schema } from "./schema";
import { Scope } from "./scope";
export declare class TargetSet {
    readonly scope: Scope;
    constructor(scope: Scope);
    readonly element: Element;
    readonly identifier: string;
    readonly schema: Schema;
    has(targetName: string): boolean;
    find(...targetNames: string[]): Element | undefined;
    findAll(...targetNames: string[]): Element[];
    private getSelectorForTargetNames;
    private getSelectorForTargetName;
}
