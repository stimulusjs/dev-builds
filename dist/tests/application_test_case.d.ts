import { Application, Schema } from "..";
import { DOMTestCase } from "@stimulus/test";
export declare class ApplicationTestCase extends DOMTestCase {
    schema: Schema;
    application: Application;
    runTest(testName: string): Promise<void>;
    setupApplication(): void;
}
//# sourceMappingURL=application_test_case.d.ts.map