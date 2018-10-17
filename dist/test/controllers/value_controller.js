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
var BaseValueController = /** @class */ (function (_super) {
    __extends(BaseValueController, _super);
    function BaseValueController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseValueController.values = [
        "shadowedBoolean",
        "string",
        { name: "explicitString", type: "string" },
        { name: "numeric", type: "integer" }
    ];
    return BaseValueController;
}(Controller));
var ValueController = /** @class */ (function (_super) {
    __extends(ValueController, _super);
    function ValueController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loggedNumericValues = [];
        return _this;
    }
    ValueController.prototype.numericValueChanged = function (value) {
        this.loggedNumericValues.push(value);
    };
    ValueController.values = [
        { name: "shadowedBoolean", type: "boolean" },
        { name: "floatingPoint", type: "float" },
        { name: "stringWithDefault", defaultValue: "hello" }
    ];
    return ValueController;
}(BaseValueController));
export { ValueController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvY29udHJvbGxlcnMvdmFsdWVfY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBR2pEO0lBQWtDLHVDQUFVO0lBQTVDOztJQVdBLENBQUM7SUFWUSwwQkFBTSxHQUFzQjtRQUNqQyxpQkFBaUI7UUFDakIsUUFBUTtRQUNSLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7UUFDMUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7S0FDckMsQ0FBQTtJQUtILDBCQUFDO0NBQUEsQUFYRCxDQUFrQyxVQUFVLEdBVzNDO0FBRUQ7SUFBcUMsbUNBQW1CO0lBQXhEO1FBQUEscUVBZ0JDO1FBTEMseUJBQW1CLEdBQWEsRUFBRSxDQUFBOztJQUtwQyxDQUFDO0lBSEMsNkNBQW1CLEdBQW5CLFVBQW9CLEtBQWE7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBZE0sc0JBQU0sR0FBc0I7UUFDakMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtRQUM1QyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtRQUN4QyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFO0tBQ3JELENBQUE7SUFXSCxzQkFBQztDQUFBLEFBaEJELENBQXFDLG1CQUFtQixHQWdCdkQ7U0FoQlksZUFBZSJ9