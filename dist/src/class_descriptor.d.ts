export interface ClassDescriptor {
    identifier: string | null;
    name: string;
    className: string;
}
export declare function parseClassDescriptorStringForIdentifier(descriptorString: string, matchingIdentifier: string): {
    identifier: string;
    name: string;
    className: string;
} | undefined;
