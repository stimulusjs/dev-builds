import { Controller } from "../../src/controller";
import { ValueDefinition } from "../../src/value_properties";
declare class BaseValueController extends Controller {
    static values: ValueDefinition[];
    stringValue: string;
    explicitStringValue: string;
    numericValue: number;
}
export declare class ValueController extends BaseValueController {
    static values: ValueDefinition[];
    shadowedBooleanValue: boolean;
    floatingPointValue: number;
    stringWithDefaultValue: string;
    loggedNumericValues: number[];
    numericValueChanged(value: number): void;
}
export {};
