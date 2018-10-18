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
    stringWithDefaultValue: string;
    loggedNumericValues: number[];
    numericValueChanged(value: number): void;
    loggedStringWithDefaultValues: string[];
    stringWithDefaultValueChanged(value: string): void;
}
export {};
