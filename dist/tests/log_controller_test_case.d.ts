import { ControllerTestCase } from "./controller_test_case";
import { LogController, ActionLogEntry } from "./log_controller";
export declare class LogControllerTestCase extends ControllerTestCase<LogController> {
    controllerConstructor: typeof LogController;
    setup(): Promise<void>;
    assertActions(...actions: any[]): void;
    assertNoActions(): void;
    readonly actionLog: ActionLogEntry[];
}
//# sourceMappingURL=log_controller_test_case.d.ts.map