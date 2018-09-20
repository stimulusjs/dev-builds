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
    readonly application: Application;
    readonly scope: Scope;
    readonly element: Element;
    readonly identifier: string;
    readonly targets: TargetSet;
    readonly data: DataMap;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}
