export interface ClassDescriptor {
    identifier: string;
    name: string;
    className: string;
}
export declare function parseDescriptorString(descriptorString: string): {
    identifier: string;
    name: string;
    className: string;
} | undefined;
