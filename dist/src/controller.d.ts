import { Application } from "./application";
import { Constructor } from "./blessing";
import { Context } from "./context";
import { DataMap } from "./data_map";
import { Scope } from "./scope";
import { TargetPropertiesBlessing } from "./target_properties";
import { TargetSet } from "./target_set";
export declare type ControllerConstructor = Constructor<Controller>;
export declare class Controller {
    static blessings: (typeof TargetPropertiesBlessing)[];
    static targets: string[];
    readonly context: Context;
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
