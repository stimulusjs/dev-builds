import { Application } from "./application";
import { ClassPropertiesBlessing } from "./class_properties";
import { Constructor } from "./constructor";
import { Context } from "./context";
import { DataMap } from "./data_map";
import { Scope } from "./scope";
import { TargetSet } from "./target_set";
import { ValueDefinition } from "./value_properties";
export declare type ControllerConstructor = Constructor<Controller>;
export declare class Controller {
    static blessings: (typeof ClassPropertiesBlessing)[];
    static targets: string[];
    static values: ValueDefinition[];
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
