import { ValueController } from "../controllers/value_controller";
declare const ValueTests_base: import("../../src/constructor").Constructor<import("../cases/controller_test_case").ControllerTests<ValueController>>;
export default class ValueTests extends ValueTests_base {
    fixtureHTML: string;
    "test values are strings by default"(): void;
    "test numeric values"(): void;
    "test boolean values"(): void;
    "test date values"(): void;
    "test accessing a value throws when the attribute is not present"(): void;
    "test accessing a value returns its default when the attribute is not present"(): void;
    "test changed callbacks"(): Promise<void>;
    "test default values trigger changed callbacks"(): Promise<void>;
    has(name: string): boolean;
    get(name: string): string | null;
    set(name: string, value: string): void;
    attr(name: string): string;
    readonly element: Element;
}
export {};
