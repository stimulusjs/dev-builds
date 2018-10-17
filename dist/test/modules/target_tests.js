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
import { ControllerTests } from "../cases/controller_test_case";
import { TargetController } from "../controllers/target_controller";
var TargetTests = /** @class */ (function (_super) {
    __extends(TargetTests, _super);
    function TargetTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\">\n      <div data-target=\"" + _this.identifier + ".alpha\" id=\"alpha1\"></div>\n      <div data-target=\"" + _this.identifier + ".alpha\" id=\"alpha2\"></div>\n      <div data-target=\"" + _this.identifier + ".beta\" id=\"beta1\">\n        <div data-target=\"" + _this.identifier + ".gamma\" id=\"gamma1\"></div>\n      </div>\n      <div data-controller=\"" + _this.identifier + "\" id=\"child\">\n        <div data-target=\"" + _this.identifier + ".delta\" id=\"delta1\"></div>\n      </div>\n      <textarea data-target=\"" + _this.identifier + ".input\" id=\"input1\"></textarea>\n    </div>\n  ";
        return _this;
    }
    TargetTests.prototype["test TargetSet#find"] = function () {
        this.assert.equal(this.controller.targets.find("alpha"), this.findElement("#alpha1"));
    };
    TargetTests.prototype["test TargetSet#findAll"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("alpha"), this.findElements("#alpha1", "#alpha2"));
    };
    TargetTests.prototype["test TargetSet#findAll with multiple arguments"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("alpha", "beta"), this.findElements("#alpha1", "#alpha2", "#beta1"));
    };
    TargetTests.prototype["test TargetSet#has"] = function () {
        this.assert.equal(this.controller.targets.has("gamma"), true);
        this.assert.equal(this.controller.targets.has("delta"), false);
    };
    TargetTests.prototype["test TargetSet#find ignores child controller targets"] = function () {
        this.assert.equal(this.controller.targets.find("delta"), null);
        this.findElement("#child").removeAttribute("data-controller");
        this.assert.equal(this.controller.targets.find("delta"), this.findElement("#delta1"));
    };
    TargetTests.prototype["test linked target properties"] = function () {
        this.assert.equal(this.controller.betaTarget, this.findElement("#beta1"));
        this.assert.deepEqual(this.controller.betaTargets, this.findElements("#beta1"));
        this.assert.equal(this.controller.hasBetaTarget, true);
    };
    TargetTests.prototype["test inherited linked target properties"] = function () {
        this.assert.equal(this.controller.alphaTarget, this.findElement("#alpha1"));
        this.assert.deepEqual(this.controller.alphaTargets, this.findElements("#alpha1", "#alpha2"));
    };
    TargetTests.prototype["test singular linked target property throws an error when no target is found"] = function () {
        var _this = this;
        this.findElement("#beta1").removeAttribute("data-target");
        this.assert.equal(this.controller.hasBetaTarget, false);
        this.assert.equal(this.controller.betaTargets.length, 0);
        this.assert.throws(function () { return _this.controller.betaTarget; });
    };
    TargetTests.prototype["test has*Target property names are not localized"] = function () {
        this.assert.equal(this.controller.hasInputTarget, true);
    };
    return TargetTests;
}(ControllerTests(TargetController)));
export default TargetTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3Rlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9tb2R1bGVzL3RhcmdldF90ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFBO0FBRW5FO0lBQXlDLCtCQUFpQztJQUExRTtRQUFBLHFFQWlFQztRQWhFQyxpQkFBVyxHQUFHLGtDQUNZLEtBQUksQ0FBQyxVQUFVLHNDQUNqQixLQUFJLENBQUMsVUFBVSxnRUFDZixLQUFJLENBQUMsVUFBVSxnRUFDZixLQUFJLENBQUMsVUFBVSwwREFDYixLQUFJLENBQUMsVUFBVSxrRkFFYixLQUFJLENBQUMsVUFBVSxxREFDakIsS0FBSSxDQUFDLFVBQVUsbUZBRVosS0FBSSxDQUFDLFVBQVUsdURBRTNDLENBQUE7O0lBb0RILENBQUM7SUFsREMsNENBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUN2RixDQUFDO0lBRUQsK0NBQXdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQ3hDLENBQUE7SUFDSCxDQUFDO0lBRUQsdUVBQWdELEdBQWhEO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxP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