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
    BaseValueController.values = {
        shadowedBoolean: String,
        string: String,
        numeric: Number
    };
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
    ValueController.values = {
        shadowedBoolean: Boolean,
        stringWithDefault: [String, "hello"],
        stringWithoutDefault: [String, undefined],
        json: JSON
    };
    return ValueController;
}(BaseValueController));
export { ValueController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvY29udHJvbGxlcnMvdmFsdWVfY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBR2pEO0lBQWtDLHVDQUFVO0lBQTVDOztJQVNBLENBQUM7SUFSUSwwQkFBTSxHQUF1QjtRQUNsQyxlQUFlLEVBQUUsTUFBTTtRQUN2QixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUE7SUFJSCwwQkFBQztDQUFBLEFBVEQsQ0FBa0MsVUFBVSxHQVMzQztBQUVEO0lBQXFDLG1DQUFtQjtJQUF4RDtRQUFBLHFFQXVCQztRQVRDLHlCQUFtQixHQUFhLEVBQUUsQ0FBQTtRQUtsQyxtQ0FBNkIsR0FBYSxFQUFFLENBQUE7O0lBSTlDLENBQUM7SUFSQyw2Q0FBbUIsR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFHRCx1REFBNkIsR0FBN0IsVUFBOEIsS0FBYTtRQUN6QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFyQk0sc0JBQU0sR0FBdUI7UUFDbEMsZUFBZSxFQUFFLE9BQU87UUFDeEIsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQ3BDLG9CQUFvQixFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztRQUN6QyxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUE7SUFpQkgsc0JBQUM7Q0FBQSxBQXZCRCxDQUFxQyxtQkFBbUIsR0F1QnZEO1NBdkJZLGVBQWUifQ==