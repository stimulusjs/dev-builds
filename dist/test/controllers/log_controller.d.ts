import { Controller } from "../../src/controller";
export declare type ActionLogEntry = {
    name: string;
    controller: Controller;
    identifier: string;
    eventType: string;
    currentTarget: EventTarget | null;
    defaultPrevented: boolean;
};
export declare class LogController extends Controller {
    static actionLog: ActionLogEntry[];
    initializeCount: number;
    connectCount: number;
    disconnectCount: number;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    log(event: Event): void;
    log2(event: Event): void;
    log3(event: Event): void;
    stop(event: Event): void;
    readonly actionLog: ActionLogEntry[];
    private recordAction;
}
