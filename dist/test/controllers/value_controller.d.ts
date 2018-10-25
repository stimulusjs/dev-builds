import { Controller } from "../../src/controller";
import { ValueDefinitionMap } from "../../src/value_properties";
declare class BaseValueController extends Controller {
    static values: ValueDefinitionMap;
    stringValue: string;
    numericValue: number;
}
export declare class ValueController extends BaseValueController {
    static values: ValueDefinitionMap;
    shadowedBooleanValue: boolean;
    stringWithDefaultValue: string;
    stringWithoutDefaultValue: string;
    dateValue: Date;
    jsonValue: any;
    loggedNumericValues: number[];
    numericValueChanged(value: number): void;
    loggedStringWithDefaultValues: string[];
    stringWithDefaultValueChanged(value: string): void;
}
export {};
