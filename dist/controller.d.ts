import { Application } from "./application";
import { Context } from "./context";
import { DataMap } from "./data_map";
import { Scope } from "./scope";
import { TargetSet } from "./target_set";
export interface ControllerConstructor {
    bless(): void;
    new (context: Context): Controller;
}
export declare class Controller {
    static targets: string[];
    readonly context: Context;
    static bless(): void;
    constructor(context: Context);
    get application(): Application;
    get scope(): Scope;
    get element(): Element;
    get identifier(): string;
    get targets(): TargetSet;
    get data(): DataMap;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}
//# sourceMappingURL=controller.d.ts.map