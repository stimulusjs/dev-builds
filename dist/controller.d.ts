import { Controller } from "@stimulus/core";
import { Request, Response } from "@stimulus/http";
import { Operation, OperationDelegate } from "./operation";
import { Resource } from "./resource";
export declare class ResourceController extends Controller implements OperationDelegate {
    initialize(): void;
    create(event: Event): void;
    edit(event: Event): void;
    show(event: Event): void;
    update(event: Event): void;
    destroy(event: Event): void;
    issue(name: string, request: Request): void;
    readonly resource: Resource;
    shouldPerformOperation(operation: Operation): boolean;
    operationStarted(operation: Operation): void;
    operationEnded(operation: Operation): void;
    operationSucceededWithResponse(operation: Operation, response: Response): void;
    operationFailedWithError(operation: Operation, error: Error): void;
    showActivityIndicator(): void;
    hideActivityIndicator(): void;
    present(response: Response): Promise<void>;
    dispatchEventForOperation(operation: Operation, name: string): CustomEvent<Operation>;
    readonly activityClass: string;
    resetForm(): void;
    focusPrimaryField(): void;
}
