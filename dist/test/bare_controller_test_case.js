import { Controller } from "../src/controller";
import { ControllerTestCase } from "./controller_test_case";
export class BareControllerTestCase extends ControllerTestCase {
    constructor() {
        super(...arguments);
        this.controllerConstructor = Controller;
    }
}
//# sourceMappingURL=bare_controller_test_case.js.map