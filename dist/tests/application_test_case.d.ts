import { Application, Schema } from "../core";
import { DOMTestCase } from "@stimulus/test";
export declare class ApplicationTestCase extends DOMTestCase {
    schema: Schema;
    application: Application;
    runTest(testName: string): Promise<void>;
    setupApplication(): void;
}
