import { Scope } from "./scope";
export declare class ClassMap {
    readonly scope: Scope;
    constructor(scope: Scope);
    has(name: string): boolean;
    get(name: string): string;
    readonly values: {
        [name: string]: string;
    };
    readonly descriptorStrings: string[];
    readonly classAttribute: string;
    readonly schema: import("./schema").Schema;
    readonly element: Element;
    readonly identifier: string;
}
