import { ApplicationTestCase } from "./application_test_case";
import { ControllerConstructor } from "..";
export declare class ControllerTestCase<T> extends ApplicationTestCase {
    identifier: string | string[];
    controllerConstructor: ControllerConstructor;
    fixtureHTML: string;
    setupApplication(): void;
    get controller(): T;
    get identifiers(): string[];
    get controllers(): T[];
}
//# sourceMappingURL=controller_test_case.d.ts.map