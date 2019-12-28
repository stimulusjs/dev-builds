export interface ActionDescriptor {
    eventTarget: EventTarget;
    eventOptions: AddEventListenerOptions;
    eventName: string;
    identifier: string;
    methodName: string;
}
export declare function parseDescriptorString(descriptorString: string): Partial<ActionDescriptor>;
export declare function stringifyEventTarget(eventTarget: EventTarget): "window" | "document" | undefined;
//# sourceMappingURL=action_descriptor.d.ts.map