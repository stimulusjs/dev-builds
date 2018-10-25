import { ValueController } from "../controllers/value_controller";
declare const ValueTests_base: import("../../src/constructor").Constructor<import("../cases/controller_test_case").ControllerTests<ValueController>>;
export default class ValueTests extends ValueTests_base {
    fixtureHTML: string;
    "test string values"(): void;
    "test numeric values"(): void;
    "test boolean values"(): void;
    "test json values"(): void;
    "test accessing a string value returns the empty string when the attribute is not present"(): void;
    "test accessing a numeric value returns zero when the attribute is not present"(): void;
    "test accessing a boolean value returns false when the attribute is not present"(): void;
    "test accessing a json value throws when the attribute is not present"(): void;
    "test accessing a value returns its specified default when the attribute is not present"(): void;
    "test accessing a value throws when the default is undefined and the attribute is not present"(): void;
    "test changed callbacks"(): Promise<void>;
    "test default values trigger changed callbacks"(): Promise<void>;
    has(name: string): boolean;
    get(name: string): string | null;
    set(name: string, value: string): void;
    attr(name: string): string;
    readonly element: Element;
}
export {};
