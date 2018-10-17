import { LogController, ActionLogEntry } from "../controllers/log_controller";
declare const LogControllerTestCase_base: import("../../src/constructor").Constructor<import("./controller_test_case").ControllerTestCase<LogController>>;
export declare class LogControllerTestCase extends LogControllerTestCase_base {
    setup(): Promise<void>;
    assertActions(...actions: any[]): void;
    assertNoActions(): void;
    readonly actionLog: ActionLogEntry[];
}
export {};
