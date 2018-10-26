import { Controller } from "../src/controller";
export class BaseTargetController extends Controller {
}
BaseTargetController.targets = ["alpha"];
export class TargetController extends BaseTargetController {
}
TargetController.targets = ["beta", "input"];
//# sourceMappingURL=target_controller.js.map