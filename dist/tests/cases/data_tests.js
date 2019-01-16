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
import { BareControllerTestCase } from "../bare_controller_test_case";
var DataTests = /** @class */ (function (_super) {
    __extends(DataTests, _super);
    function DataTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\"\n      data-" + _this.identifier + "-alpha=\"hello world\"\n      data-" + _this.identifier + "-beta-gamma=\"123\">\n    </div>\n  ";
        return _this;
    }
    DataTests.prototype["test DataSet#get"] = function () {
        this.assert.equal(this.controller.data.get("alpha"), "hello world");
        this.assert.equal(this.controller.data.get("betaGamma"), "123");
        this.assert.equal(this.controller.data.get("nonexistent"), null);
    };
    DataTests.prototype["test DataSet#set"] = function () {
        this.controller.data.set("alpha", "ok");
        this.assert.equal(this.controller.data.get("alpha"), "ok");
        this.assert.equal(this.findElement("div").getAttribute("data-" + this.identifier + "-alpha"), "ok");
    };
    DataTests.prototype["test DataSet#has"] = function () {
        this.assert.ok(this.controller.data.has("alpha"));
        this.assert.ok(this.controller.data.has("betaGamma"));
        this.assert.notOk(this.controller.data.has("nonexistent"));
    };
    DataTests.prototype["test DataSet#delete"] = function () {
        this.controller.data.delete("alpha");
        this.assert.equal(this.controller.data.get("alpha"), null);
        this.assert.notOk(this.controller.data.has("alpha"));
        this.assert.notOk(this.findElement("div").hasAttribute("data-" + this.identifier + "-alpha"));
    };
    return DataTests;
}(BareControllerTestCase));
export default DataTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV90ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0cy9jYXNlcy9kYXRhX3Rlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUVyRTtJQUF1Qyw2QkFBc0I7SUFBN0Q7UUFBQSxxRUFnQ0M7UUEvQkMsaUJBQVcsR0FBRyxrQ0FDWSxLQUFJLENBQUMsVUFBVSx1QkFDOUIsS0FBSSxDQUFDLFVBQVUsMkNBQ2YsS0FBSSxDQUFDLFVBQVUseUNBRXpCLENBQUE7O0lBMEJILENBQUM7SUF4QkMsdUNBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUVELHVDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVEsSUFBSSxDQUFDLFVBQVUsV0FBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDaEcsQ0FBQztJQUVELHVDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCwwQ0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVEsSUFBSSxDQUFDLFVBQVUsV0FBUSxDQUFDLENBQUMsQ0FBQTtJQUMxRixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBaENELENBQXVDLHNCQUFzQixHQWdDNUQifQ==