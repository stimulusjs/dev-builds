import { Controller } from "../..";
import { ControllerTestCase } from "../controller_test_case";
declare class ActionTimingController extends Controller {
    static targets: string[];
    buttonTarget: HTMLButtonElement;
    event?: Event;
    connect(): void;
    record(event: Event): void;
}
export default class ActionTimingTests extends ControllerTestCase<ActionTimingController> {
    controllerConstructor: typeof ActionTimingController;
    identifier: string;
    fixtureHTML: string;
    "test triggering an action on connect"(): Promise<void>;
}
export {};
//# sourceMappingURL=action_timing_tests.d.ts.map