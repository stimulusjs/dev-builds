var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ControllerTestCase } from "./controller_test_case";
import { TargetController } from "./target_controller";
var TargetControllerTestCase = /** @class */ (function (_super) {
    __extends(TargetControllerTestCase, _super);
    function TargetControllerTestCase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controllerConstructor = TargetController;
        return _this;
    }
    return TargetControllerTestCase;
}(ControllerTestCase));
export { TargetControllerTestCase };
//# sourceMappingURL=target_controller_test_case.js.map