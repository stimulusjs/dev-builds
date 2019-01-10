import { DOMTestCase } from "@stimulus/test";
export interface Observer {
    start(): void;
    stop(): void;
}
export declare class ObserverTestCase extends DOMTestCase {
    observer: Observer;
    calls: any[][];
    private setupCallCount;
    setup(): Promise<void>;
    teardown(): Promise<void>;
    readonly testCalls: any[][];
    recordCall(methodName: string, ...args: any[]): void;
}
