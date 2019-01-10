var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Controller } from "../../src/controller";
var BaseClassController = /** @class */ (function (_super) {
    __extends(BaseClassController, _super);
    function BaseClassController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseClassController.classes = ["active"];
    return BaseClassController;
}(Controller));
var ClassController = /** @class */ (function (_super) {
    __extends(ClassController, _super);
    function ClassController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassController.classes = ["enabled", "loading"];
    return ClassController;
}(BaseClassController));
export { ClassController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvY29udHJvbGxlcnMvY2xhc3NfY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBRWpEO0lBQWtDLHVDQUFVO0lBQTVDOztJQUtBLENBQUM7SUFKUSwyQkFBTyxHQUFHLENBQUUsUUFBUSxDQUFFLENBQUE7SUFJL0IsMEJBQUM7Q0FBQSxBQUxELENBQWtDLFVBQVUsR0FLM0M7QUFFRDtJQUFxQyxtQ0FBbUI7SUFBeEQ7O0lBTUEsQ0FBQztJQUxRLHVCQUFPLEdBQUcsQ0FBRSxTQUFTLEVBQUUsU0FBUyxDQUFFLENBQUE7SUFLM0Msc0JBQUM7Q0FBQSxBQU5ELENBQXFDLG1CQUFtQixHQU12RDtTQU5ZLGVBQWUifQ==