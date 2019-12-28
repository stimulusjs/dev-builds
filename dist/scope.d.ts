import { DataMap } from "./data_map";
import { Schema } from "./schema";
import { TargetSet } from "./target_set";
export declare class Scope {
    readonly schema: Schema;
    readonly identifier: string;
    readonly element: Element;
    readonly targets: TargetSet;
    readonly data: DataMap;
    constructor(schema: Schema, identifier: string, element: Element);
    findElement(selector: string): Element | undefined;
    findAllElements(selector: string): Element[];
    containsElement: (element: Element) => boolean;
    private queryElements;
    private readonly controllerSelector;
}
//# sourceMappingURL=scope.d.ts.map