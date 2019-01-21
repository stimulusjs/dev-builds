import { LogController, ActionLogEntry } from "../controllers/log_controller";
declare const LogControllerTestCase_base: import("../../constructor").Constructor<import("./controller_test_case").ControllerTests<LogController>>;
export declare class LogControllerTestCase extends LogControllerTestCase_base {
    setup(): Promise<void>;
    assertActions(...actions: any[]): void;
    assertNoActions(): void;
    readonly actionLog: ActionLogEntry[];
}
export {};
//# sourceMappingURL=log_controller_test_case.d.ts.map