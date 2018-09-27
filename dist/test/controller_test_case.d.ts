import { ApplicationTestCase } from "./application_test_case";
import { ControllerConstructor } from "../src/controller";
export declare class ControllerTestCase<T> extends ApplicationTestCase {
    identifier: string | string[];
    controllerConstructor: ControllerConstructor;
    fixtureHTML: string;
    setupApplication(): void;
    readonly controller: T;
    readonly identifiers: string[];
    readonly controllers: T[];
}
