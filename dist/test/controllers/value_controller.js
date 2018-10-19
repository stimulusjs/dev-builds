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
        { name: "numeric", type: "number" }
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
        { name: "stringWithDefault", defaultValue: "hello" },
        { name: "date", type: "date" },
        { name: "json", type: "json" }
    ];
    return ValueController;
}(BaseValueController));
export { ValueController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvY29udHJvbGxlcnMvdmFsdWVfY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBR2pEO0lBQWtDLHVDQUFVO0lBQTVDOztJQVdBLENBQUM7SUFWUSwwQkFBTSxHQUFzQjtRQUNqQyxpQkFBaUI7UUFDakIsUUFBUTtRQUNSLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7UUFDMUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7S0FDcEMsQ0FBQTtJQUtILDBCQUFDO0NBQUEsQUFYRCxDQUFrQyxVQUFVLEdBVzNDO0FBRUQ7SUFBcUMsbUNBQW1CO0lBQXhEO1FBQUEscUVBc0JDO1FBVEMseUJBQW1CLEdBQWEsRUFBRSxDQUFBO1FBS2xDLG1DQUE2QixHQUFhLEVBQUUsQ0FBQTs7SUFJOUMsQ0FBQztJQVJDLDZDQUFtQixHQUFuQixVQUFvQixLQUFhO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUdELHVEQUE2QixHQUE3QixVQUE4QixLQUFhO1FBQ3pDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQXBCTSxzQkFBTSxHQUFzQjtRQUNqQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1FBQzVDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7UUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDOUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7S0FDL0IsQ0FBQTtJQWdCSCxzQkFBQztDQUFBLEFBdEJELENBQXFDLG1CQUFtQixHQXNCdkQ7U0F0QlksZUFBZSJ9