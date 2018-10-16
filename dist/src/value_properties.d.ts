import { Constructor } from "./constructor";
/** @hidden */
export declare function ValuePropertiesBlessing<T>(constructor: Constructor<T>): PropertyDescriptorMap;
/** @hidden */
export declare function propertiesForValueDefinition<T>(valueDefinition: ValueDefinition): PropertyDescriptorMap;
declare type ValueDefinition = string | {
    name: string;
    type: "boolean" | "integer" | "float" | "string" | undefined;
    default: any;
};
export {};
