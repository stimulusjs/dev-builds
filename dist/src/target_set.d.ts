import { Scope } from "./scope";
export declare class TargetSet {
    readonly scope: Scope;
    constructor(scope: Scope);
    readonly element: Element;
    readonly identifier: string;
    readonly schema: import("./schema").Schema;
    has(targetName: string): boolean;
    find(...targetNames: string[]): Element | undefined;
    findAll(...targetNames: string[]): Element[];
    private findTarget;
    private findAllTargets;
    private getSelectorForTargetName;
    private findLegacyTarget;
    private findAllLegacyTargets;
    private getLegacySelectorForTargetName;
    private deprecate;
    private readonly guide;
}
