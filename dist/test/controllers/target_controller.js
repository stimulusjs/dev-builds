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
var BaseTargetController = /** @class */ (function (_super) {
    __extends(BaseTargetController, _super);
    function BaseTargetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTargetController.targets = ["alpha"];
    return BaseTargetController;
}(Controller));
var TargetController = /** @class */ (function (_super) {
    __extends(TargetController, _super);
    function TargetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetController.targets = ["beta", "input"];
    return TargetController;
}(BaseTargetController));
export { TargetController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X2NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L2NvbnRyb2xsZXJzL3RhcmdldF9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFFakQ7SUFBbUMsd0NBQVU7SUFBN0M7O0lBTUEsQ0FBQztJQUxRLDRCQUFPLEdBQUcsQ0FBRSxPQUFPLENBQUUsQ0FBQTtJQUs5QiwyQkFBQztDQUFBLEFBTkQsQ0FBbUMsVUFBVSxHQU01QztBQUVEO0lBQXNDLG9DQUFvQjtJQUExRDs7SUFVQSxDQUFDO0lBVFEsd0JBQU8sR0FBRyxDQUFFLE1BQU0sRUFBRSxPQUFPLENBQUUsQ0FBQTtJQVN0Qyx1QkFBQztDQUFBLEFBVkQsQ0FBc0Msb0JBQW9CLEdBVXpEO1NBVlksZ0JBQWdCIn0=