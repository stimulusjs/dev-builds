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
        _this.loggedStringWithDefaultValues = [];
        return _this;
    }
    ValueController.prototype.numericValueChanged = function (value) {
        this.loggedNumericValues.push(value);
    };
    ValueController.prototype.stringWithDefaultValueChanged = function (value) {
        this.loggedStringWithDefaultValues.push(value);
    };
    ValueController.values = [
        { name: "shadowedBoolean", type: "boolean" },
        { name: "floatingPoint", type: "float" },
        { name: "stringWithDefault", defaultValue: "hello" }
    ];
    return ValueController;
}(BaseValueController));
export { ValueController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvY29udHJvbGxlcnMvdmFsdWVfY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBR2pEO0lBQWtDLHVDQUFVO0lBQTVDOztJQVdBLENBQUM7SUFWUSwwQkFBTSxHQUFzQjtRQUNqQyxpQkFBaUI7UUFDakIsUUFBUTtRQUNSLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7UUFDMUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7S0FDckMsQ0FBQTtJQUtILDBCQUFDO0NBQUEsQUFYRCxDQUFrQyxVQUFVLEdBVzNDO0FBRUQ7SUFBcUMsbUNBQW1CO0lBQXhEO1FBQUEscUVBb0JDO1FBVEMseUJBQW1CLEdBQWEsRUFBRSxDQUFBO1FBS2xDLG1DQUE2QixHQUFhLEVBQUUsQ0FBQTs7SUFJOUMsQ0FBQztJQVJDLDZDQUFtQixHQUFuQixVQUFvQixLQUFhO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUdELHVEQUE2QixHQUE3QixVQUE4QixLQUFhO1FBQ3pDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQWxCTSxzQkFBTSxHQUFzQjtRQUNqQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1FBQzVDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1FBQ3hDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7S0FDckQsQ0FBQTtJQWVILHNCQUFDO0NBQUEsQUFwQkQsQ0FBcUMsbUJBQW1CLEdBb0J2RDtTQXBCWSxlQUFlIn0=