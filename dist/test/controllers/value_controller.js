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
        _this.loggedMissingStringValues = [];
        return _this;
    }
    ValueController.prototype.numericValueChanged = function (value) {
        this.loggedNumericValues.push(value);
    };
    ValueController.prototype.missingStringValueChanged = function (value) {
        this.loggedMissingStringValues.push(value);
    };
    ValueController.values = {
        shadowedBoolean: Boolean,
        missingString: String,
        ids: Array,
        options: Object,
        "time-24hr": Boolean
    };
    return ValueController;
}(BaseValueController));
export { ValueController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvY29udHJvbGxlcnMvdmFsdWVfY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBR2pEO0lBQWtDLHVDQUFVO0lBQTVDOztJQVVBLENBQUM7SUFUUSwwQkFBTSxHQUF1QjtRQUNsQyxlQUFlLEVBQUUsTUFBTTtRQUN2QixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUE7SUFLSCwwQkFBQztDQUFBLEFBVkQsQ0FBa0MsVUFBVSxHQVUzQztBQUVEO0lBQXFDLG1DQUFtQjtJQUF4RDtRQUFBLHFFQXdCQztRQVRDLHlCQUFtQixHQUFhLEVBQUUsQ0FBQTtRQUtsQywrQkFBeUIsR0FBYSxFQUFFLENBQUE7O0lBSTFDLENBQUM7SUFSQyw2Q0FBbUIsR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFHRCxtREFBeUIsR0FBekIsVUFBMEIsS0FBYTtRQUNyQyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUF0Qk0sc0JBQU0sR0FBdUI7UUFDbEMsZUFBZSxFQUFFLE9BQU87UUFDeEIsYUFBYSxFQUFFLE1BQU07UUFDckIsR0FBRyxFQUFFLEtBQUs7UUFDVixPQUFPLEVBQUUsTUFBTTtRQUNmLFdBQVcsRUFBRSxPQUFPO0tBQ3JCLENBQUE7SUFpQkgsc0JBQUM7Q0FBQSxBQXhCRCxDQUFxQyxtQkFBbUIsR0F3QnZEO1NBeEJZLGVBQWUifQ==