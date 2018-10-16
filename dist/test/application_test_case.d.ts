import { Application } from "../src/application";
import { DOMTestCase } from "@stimulus/test";
import { Schema } from "../src/schema";
export declare class ApplicationTestCase extends DOMTestCase {
    schema: Schema;
    application: Application;
    runTest(testName: string): Promise<void>;
    setupApplication(): void;
}
