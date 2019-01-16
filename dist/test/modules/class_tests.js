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
import { ControllerTestCase } from "../cases/controller_test_case";
import { ClassController } from "../controllers/class_controller";
var ValueTests = /** @class */ (function (_super) {
    __extends(ValueTests, _super);
    function ValueTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\"\n      data-" + _this.identifier + "-active-class=\"test--active\"\n      data-" + _this.identifier + "-loading-class=\"busy\"\n      data-loading-class=\"xxx\"\n    ></div>\n  ";
        return _this;
    }
    ValueTests.prototype["test accessing a class property"] = function () {
        this.assert.ok(this.controller.hasActiveClass);
        this.assert.equal(this.controller.activeClass, "test--active");
    };
    ValueTests.prototype["test accessing a missing class property throws an error"] = function () {
        var _this = this;
        this.assert.notOk(this.controller.hasEnabledClass);
        this.assert.raises(function () { return _this.controller.enabledClass; });
    };
    ValueTests.prototype["test classes must be scoped by identifier"] = function () {
        this.assert.equal(this.controller.loadingClass, "busy");
    };
    return ValueTests;
}(ControllerTestCase(ClassController)));
export default ValueTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfdGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L21vZHVsZXMvY2xhc3NfdGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTtBQUVqRTtJQUF3Qyw4QkFBbUM7SUFBM0U7UUFBQSxxRUFzQkM7UUFyQkMsaUJBQVcsR0FBRyxrQ0FDWSxLQUFJLENBQUMsVUFBVSx1QkFDOUIsS0FBSSxDQUFDLFVBQVUsbURBQ2YsS0FBSSxDQUFDLFVBQVUsK0VBR3pCLENBQUE7O0lBZUgsQ0FBQztJQWJDLHVEQUFpQyxHQUFqQztRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELCtFQUF5RCxHQUF6RDtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBRUQsaUVBQTJDLEdBQTNDO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUF3QyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsR0FzQjFFIn0=