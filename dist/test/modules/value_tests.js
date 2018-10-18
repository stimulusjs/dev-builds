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
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\"\n      data-" + _this.identifier + "-shadowed-boolean=\"true\"\n      data-" + _this.identifier + "-numeric=\"123\"\n      data-" + _this.identifier + "-string=\"ok\"\n      data-" + _this.identifier + "-explicit-string=\"$#!%\">\n    </div>\n  ";
        return _this;
    }
    ValueTests.prototype["test values are strings by default"] = function () {
        this.assert.deepEqual(this.controller.stringValue, "ok");
        this.controller.stringValue = "cool";
        this.assert.deepEqual(this.controller.stringValue, "cool");
        this.assert.deepEqual(this.get("string"), "cool");
        this.assert.deepEqual(this.controller.explicitStringValue, "$#!%");
    };
    ValueTests.prototype["test numeric values"] = function () {
        this.assert.deepEqual(this.controller.numericValue, 123);
        this.controller.numericValue = 456;
        this.assert.deepEqual(this.controller.numericValue, 456);
        this.assert.deepEqual(this.get("numeric"), "456");
        this.controller.numericValue = "789";
        this.assert.deepEqual(this.controller.numericValue, 789);
        this.controller.numericValue = 1.23;
        this.assert.deepEqual(this.controller.numericValue, 1.23);
        this.assert.deepEqual(this.get("numeric"), "1.23");
        this.controller.numericValue = Infinity;
        this.assert.deepEqual(this.controller.numericValue, Infinity);
        this.assert.deepEqual(this.get("numeric"), "Infinity");
        this.controller.numericValue = "garbage";
        this.assert.ok(isNaN(this.controller.numericValue));
        this.assert.equal(this.get("numeric"), "garbage");
    };
    ValueTests.prototype["test boolean values"] = function () {
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.controller.shadowedBooleanValue = false;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
        this.assert.deepEqual(this.get("shadowed-boolean"), "false");
        this.controller.shadowedBooleanValue = "";
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.assert.deepEqual(this.get("shadowed-boolean"), "");
        this.controller.shadowedBooleanValue = 0;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
        this.assert.deepEqual(this.get("shadowed-boolean"), "0");
        this.controller.shadowedBooleanValue = 1;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.assert.deepEqual(this.get("shadowed-boolean"), "1");
    };
    ValueTests.prototype["test accessing a value throws when the attribute is not present"] = function () {
        var _this = this;
        this.controller.stringValue = undefined;
        this.assert.notOk(this.has("string"));
        this.assert.raises(function () { return _this.controller.stringValue; });
    };
    ValueTests.prototype["test accessing a value returns its default when the attribute is not present"] = function () {
        this.assert.deepEqual(this.controller.stringWithDefaultValue, "hello");
        this.assert.notOk(this.has("string-with-default"));
        this.controller.stringWithDefaultValue = "goodbye";
        this.assert.deepEqual(this.controller.stringWithDefaultValue, "goodbye");
        this.assert.deepEqual(this.get("string-with-default"), "goodbye");
        this.controller.stringWithDefaultValue = undefined;
        this.assert.deepEqual(this.controller.stringWithDefaultValue, "hello");
        this.assert.notOk(this.has("string-with-default"));
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
                        this.set("numeric", "1");
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
                        this.assert.deepEqual(this.controller.loggedStringWithDefaultValues, ["hello"]);
                        this.controller.stringWithDefaultValue = "goodbye";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedStringWithDefaultValues, ["hello", "goodbye"]);
                        this.controller.stringWithDefaultValue = undefined;
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedStringWithDefaultValues, ["hello", "goodbye", "hello"]);
                        return [2 /*return*/];
                }
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfdGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L21vZHVsZXMvdmFsdWVfdGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFBO0FBRWpFO0lBQXdDLDhCQUFtQztJQUEzRTtRQUFBLHFFQTZIQztRQTVIQyxpQkFBVyxHQUFHLGtDQUNZLEtBQUksQ0FBQyxVQUFVLHVCQUM5QixLQUFJLENBQUMsVUFBVSwrQ0FDZixLQUFJLENBQUMsVUFBVSxxQ0FDZixLQUFJLENBQUMsVUFBVSxtQ0FDZixLQUFJLENBQUMsVUFBVSwrQ0FFekIsQ0FBQTs7SUFxSEgsQ0FBQztJQW5IQywwREFBb0MsR0FBcEM7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV4RCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUE7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUVqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFFRCwyQ0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FB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