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
}(ControllerTests()));
export default DataTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV90ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvbW9kdWxlcy9kYXRhX3Rlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFFL0Q7SUFBdUMsNkJBQWlCO0lBQXhEO1FBQUEscUVBZ0NDO1FBL0JDLGlCQUFXLEdBQUcsa0NBQ1ksS0FBSSxDQUFDLFVBQVUsdUJBQzlCLEtBQUksQ0FBQyxVQUFVLDJDQUNmLEtBQUksQ0FBQyxVQUFVLHlDQUV6QixDQUFBOztJQTBCSCxDQUFDO0lBeEJDLHVDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQTtRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCx1Q0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFRLElBQUksQ0FBQyxVQUFVLFdBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hHLENBQUM7SUFFRCx1Q0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsMENBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFRLElBQUksQ0FBQyxVQUFVLFdBQVEsQ0FBQyxDQUFDLENBQUE7SUFDMUYsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUF1QyxlQUFlLEVBQUUsR0FnQ3ZEIn0=