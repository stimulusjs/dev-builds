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
import { Controller } from "../core";
var BaseTargetController = /** @class */ (function (_super) {
    __extends(BaseTargetController, _super);
    function BaseTargetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTargetController.targets = ["alpha"];
    return BaseTargetController;
}(Controller));
export { BaseTargetController };
var TargetController = /** @class */ (function (_super) {
    __extends(TargetController, _super);
    function TargetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetController.targets = ["beta", "input"];
    return TargetController;
}(BaseTargetController));
export { TargetController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X2NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdHMvdGFyZ2V0X2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUE7QUFFcEM7SUFBMEMsd0NBQVU7SUFBcEQ7O0lBTUEsQ0FBQztJQUxRLDRCQUFPLEdBQUcsQ0FBRSxPQUFPLENBQUUsQ0FBQTtJQUs5QiwyQkFBQztDQUFBLEFBTkQsQ0FBMEMsVUFBVSxHQU1uRDtTQU5ZLG9CQUFvQjtBQVFqQztJQUFzQyxvQ0FBb0I7SUFBMUQ7O0lBVUEsQ0FBQztJQVRRLHdCQUFPLEdBQUcsQ0FBRSxNQUFNLEVBQUUsT0FBTyxDQUFFLENBQUE7SUFTdEMsdUJBQUM7Q0FBQSxBQVZELENBQXNDLG9CQUFvQixHQVV6RDtTQVZZLGdCQUFnQiJ9