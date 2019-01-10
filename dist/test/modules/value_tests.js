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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ControllerTestCase } from "../cases/controller_test_case";
import { ValueController } from "../controllers/value_controller";
var ValueTests = /** @class */ (function (_super) {
    __extends(ValueTests, _super);
    function ValueTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\"\n      data-" + _this.identifier + "-shadowed-boolean-value=\"true\"\n      data-" + _this.identifier + "-numeric-value=\"123\"\n      data-" + _this.identifier + "-string-value=\"ok\"\n      data-" + _this.identifier + "-ids-value=\"[1,2,3]\"\n      data-" + _this.identifier + "-options-value='{\"one\":[2,3]}'\n      data-" + _this.identifier + "-time-24hr-value=\"true\">\n    </div>\n  ";
        return _this;
    }
    ValueTests.prototype["test string values"] = function () {
        this.assert.deepEqual(this.controller.stringValue, "ok");
        this.controller.stringValue = "cool";
        this.assert.deepEqual(this.controller.stringValue, "cool");
        this.assert.deepEqual(this.get("string-value"), "cool");
    };
    ValueTests.prototype["test numeric values"] = function () {
        this.assert.deepEqual(this.controller.numericValue, 123);
        this.controller.numericValue = 456;
        this.assert.deepEqual(this.controller.numericValue, 456);
        this.assert.deepEqual(this.get("numeric-value"), "456");
        this.controller.numericValue = "789";
        this.assert.deepEqual(this.controller.numericValue, 789);
        this.controller.numericValue = 1.23;
        this.assert.deepEqual(this.controller.numericValue, 1.23);
        this.assert.deepEqual(this.get("numeric-value"), "1.23");
        this.controller.numericValue = Infinity;
        this.assert.deepEqual(this.controller.numericValue, Infinity);
        this.assert.deepEqual(this.get("numeric-value"), "Infinity");
        this.controller.numericValue = "garbage";
        this.assert.ok(isNaN(this.controller.numericValue));
        this.assert.equal(this.get("numeric-value"), "garbage");
    };
    ValueTests.prototype["test boolean values"] = function () {
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.controller.shadowedBooleanValue = false;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "false");
        this.controller.shadowedBooleanValue = "";
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "");
        this.controller.shadowedBooleanValue = 0;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "0");
        this.controller.shadowedBooleanValue = 1;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "1");
    };
    ValueTests.prototype["test array values"] = function () {
        var _this = this;
        this.assert.deepEqual(this.controller.idsValue, [1, 2, 3]);
        this.controller.idsValue.push(4);
        this.assert.deepEqual(this.controller.idsValue, [1, 2, 3]);
        this.controller.idsValue = [];
        this.assert.deepEqual(this.controller.idsValue, []);
        this.assert.deepEqual(this.get("ids-value"), "[]");
        this.controller.idsValue = null;
        this.assert.throws(function () { return _this.controller.idsValue; });
        this.controller.idsValue = {};
        this.assert.throws(function () { return _this.controller.idsValue; });
    };
    ValueTests.prototype["test object values"] = function () {
        var _this = this;
        this.assert.deepEqual(this.controller.optionsValue, { "one": [2, 3] });
        this.controller.optionsValue["one"] = 0;
        this.assert.deepEqual(this.controller.optionsValue, { "one": [2, 3] });
        this.controller.optionsValue = {};
        this.assert.deepEqual(this.controller.optionsValue, {});
        this.assert.deepEqual(this.get("options-value"), "{}");
        this.controller.optionsValue = null;
        this.assert.throws(function () { return _this.controller.optionsValue; });
        this.controller.optionsValue = [];
        this.assert.throws(function () { return _this.controller.optionsValue; });
    };
    ValueTests.prototype["test accessing a string value returns the empty string when the attribute is missing"] = function () {
        this.controller.stringValue = undefined;
        this.assert.notOk(this.has("string-value"));
        this.assert.deepEqual(this.controller.stringValue, "");
    };
    ValueTests.prototype["test accessing a numeric value returns zero when the attribute is missing"] = function () {
        this.controller.numericValue = undefined;
        this.assert.notOk(this.has("numeric-value"));
        this.assert.deepEqual(this.controller.numericValue, 0);
    };
    ValueTests.prototype["test accessing a boolean value returns false when the attribute is missing"] = function () {
        this.controller.shadowedBooleanValue = undefined;
        this.assert.notOk(this.has("shadowed-boolean-value"));
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
    };
    ValueTests.prototype["test accessing an array value returns an empty array when the attribute is missing"] = function () {
        this.controller.idsValue = undefined;
        this.assert.notOk(this.has("ids-value"));
        this.assert.deepEqual(this.controller.idsValue, []);
        this.controller.idsValue.push(1);
        this.assert.deepEqual(this.controller.idsValue, []);
    };
    ValueTests.prototype["test accessing an object value returns an empty object when the attribute is missing"] = function () {
        this.controller.optionsValue = undefined;
        this.assert.notOk(this.has("options-value"));
        this.assert.deepEqual(this.controller.optionsValue, {});
        this.controller.optionsValue.hello = true;
        this.assert.deepEqual(this.controller.optionsValue, {});
    };
    ValueTests.prototype["test changed callbacks"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.deepEqual(this.controller.loggedNumericValues, [123]);
                        this.controller.numericValue = 0;
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedNumericValues, [123, 0]);
                        this.set("numeric-value", "1");
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedNumericValues, [123, 0, 1]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueTests.prototype["test default values trigger changed callbacks"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.deepEqual(this.controller.loggedMissingStringValues, [""]);
                        this.controller.missingStringValue = "hello";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedMissingStringValues, ["", "hello"]);
                        this.controller.missingStringValue = undefined;
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedMissingStringValues, ["", "hello", ""]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueTests.prototype["test keys may be specified in kebab-case"] = function () {
        this.assert.equal(this.controller.time24hrValue, true);
    };
    ValueTests.prototype.has = function (name) {
        return this.element.hasAttribute(this.attr(name));
    };
    ValueTests.prototype.get = function (name) {
        return this.element.getAttribute(this.attr(name));
    };
    ValueTests.prototype.set = function (name, value) {
        return this.element.setAttribute(this.attr(name), value);
    };
    ValueTests.prototype.attr = function (name) {
        return "data-" + this.identifier + "-" + name;
    };
    Object.defineProperty(ValueTests.prototype, "element", {
        get: function () {
            return this.controller.element;
        },
        enumerable: true,
        configurable: true
    });
    return ValueTests;
}(ControllerTestCase(ValueController)));
export default ValueTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfdGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L21vZHVsZXMvdmFsdWVfdGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFBO0FBRWpFO0lBQXdDLDhCQUFtQztJQUEzRTtRQUFBLHFFQW9MQztRQW5MQyxpQkFBVyxHQUFHLGtDQUNZLEtBQUksQ0FBQyxVQUFVLHVCQUM5QixLQUFJLENBQUMsVUFBVSxxREFDZixLQUFJLENBQUMsVUFBVSwyQ0FDZixLQUFJLENBQUMsVUFBVSx5Q0FDZixLQUFJLENBQUMsVUFBVSwyQ0FDZixLQUFJLENBQUMsVUFBVSxxREFDZixLQUFJLENBQUMsVUFBVSwrQ0FFekIsQ0FBQTs7SUEwS0gsQ0FBQztJQXhLQywwQ0FBb0IsR0FBcEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV4RCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUE7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsMkNBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFFeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsS0FBWSxDQUFBO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRXhELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBRXhELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBRTVELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLFNBQWdCLENBQUE7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMs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