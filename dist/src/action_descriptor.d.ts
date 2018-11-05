export interface ActionDescriptor {
    eventTarget: EventTarget;
    eventName: string;
    identifier: string;
    methodName: string;
}
export declare function parseActionDescriptorString(descriptorString: string): Partial<ActionDescriptor>;
export declare function stringifyEventTarget(eventTarget: EventTarget): "window" | "document" | undefined;
