import { Request, Response } from "@stimulus/http";
import { Resource } from "./resource";
export interface OperationDelegate {
    readonly resource: Resource;
    shouldPerformOperation(operation: Operation): boolean;
    operationStarted(operation: Operation): void;
    operationEnded(operation: Operation): void;
    operationSucceededWithResponse(operation: Operation, response: Response): void;
    operationFailedWithError(operation: Operation, error: Error): void;
}
export declare class Operation {
    readonly delegate: OperationDelegate;
    readonly name: string;
    readonly request: Request;
    private state;
    constructor(delegate: OperationDelegate, name: string, request: Request);
    start(): void;
    cancel(): void;
    accept(): void;
    receive(response: Response): void;
    handleError(error: Error): void;
    private perform;
}
