import { Schema } from "./schema";
import { Scope } from "./scope";
export declare class TargetSet {
    readonly scope: Scope;
    constructor(scope: Scope);
    get element(): Element;
    get identifier(): string;
    get schema(): Schema;
    has(targetName: string): boolean;
    find(...targetNames: string[]): Element | undefined;
    findAll(...targetNames: string[]): Element[];
    private getSelectorForTargetNames;
    private getSelectorForTargetName;
}
//# sourceMappingURL=target_set.d.ts.map