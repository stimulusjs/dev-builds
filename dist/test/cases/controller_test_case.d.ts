import { ApplicationTestCase } from "./application_test_case";
import { Constructor } from "../../src/constructor";
import { Controller } from "../../src/controller";
export declare class ControllerTests<T extends Controller> extends ApplicationTestCase {
    identifier: string | string[];
    controllerConstructor: Constructor<Controller>;
    fixtureHTML: string;
    setupApplication(): void;
    readonly controller: T;
    readonly identifiers: string[];
    readonly controllers: T[];
}
export declare function ControllerTestCase(): Constructor<ControllerTests<Controller>>;
export declare function ControllerTestCase<T extends Controller>(constructor: Constructor<T>): Constructor<ControllerTests<T>>;
