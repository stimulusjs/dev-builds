import { Constructor } from "./constructor";
/** @hidden */
export declare function ValuePropertiesBlessing<T>(constructor: Constructor<T>): PropertyDescriptorMap;
/** @hidden */
export declare function propertiesForValueDefinitionPair<T>(valueDefinitionPair: ValueDefinitionPair): PropertyDescriptorMap;
export declare type ValueDescriptor = {
    key: string;
    name: string;
    type: ValueType;
    defaultValue: any;
};
export declare type ValueDescriptorMap = {
    [attributeName: string]: ValueDescriptor;
};
export declare type ValueDefinition = ValueTypeConstant | [ValueTypeConstant, any];
export declare type ValueDefinitionMap = {
    [key: string]: ValueDefinition;
};
export declare type ValueDefinitionPair = [string, ValueDefinition];
export declare type ValueType = "boolean" | "json" | "number" | "string";
export declare type ValueTypeConstant = typeof Boolean | typeof JSON | typeof Number | typeof String;
