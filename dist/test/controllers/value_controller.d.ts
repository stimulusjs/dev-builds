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
    missingStringValue: string;
    idsValue: any[];
    optionsValue: {
        [key: string]: any;
    };
    loggedNumericValues: number[];
    numericValueChanged(value: number): void;
    loggedMissingStringValues: string[];
    missingStringValueChanged(value: string): void;
}
export {};
