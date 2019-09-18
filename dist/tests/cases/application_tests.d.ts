import { ApplicationTestCase } from "../application_test_case";
import { LogController } from "../log_controller";
export default class ApplicationTests extends ApplicationTestCase {
    fixtureHTML: string;
    private definitions;
    "test Application#register"(): Promise<void>;
    "test Application#load"(): void;
    "test Application#unload"(): void;
    "test reloading an already-loaded module"(): void;
    readonly controllers: LogController[];
}
//# sourceMappingURL=application_tests.d.ts.map