import { Constructor } from "./constructor";
/** @hidden */
export declare function ValuePropertiesBlessing<T>(constructor: Constructor<T>): PropertyDescriptorMap;
/** @hidden */
export declare function propertiesForValueDefinition<T>(valueDefinition: ValueDefinition): PropertyDescriptorMap;
export declare type ValueDescriptor = {
    key: string;
    name: string;
    type: "boolean" | "date" | "json" | "number" | "string";
    defaultValue: any;
};
export declare type ValueDescriptorMap = {
    [attributeName: string]: ValueDescriptor;
};
export declare type ValueDefinition = string | Partial<ValueDescriptor>;
