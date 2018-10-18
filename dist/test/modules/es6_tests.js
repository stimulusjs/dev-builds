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
import { LogController } from "../controllers/log_controller";
import { LogControllerTestCase } from "../cases/log_controller_test_case";
var ES6Tests = /** @class */ (function (_super) {
    __extends(ES6Tests, _super);
    function ES6Tests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"es6\">\n      <button data-action=\"es6#log\">Log</button>\n    </div>\n  ";
        _this.fixtureScript = "\n    _stimulus.application.register(\"es6\", class extends _stimulus.LogController {})\n  ";
        return _this;
    }
    ES6Tests.shouldSkipTest = function (testName) {
        return !(supportsES6Classes() && supportsReflectConstruct());
    };
    ES6Tests.prototype.renderFixture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scriptElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window["_stimulus"] = { LogController: LogController, application: this.application };
                        return [4 /*yield*/, _super.prototype.renderFixture.call(this)];
                    case 1:
                        _a.sent();
                        scriptElement = document.createElement("script");
                        scriptElement.textContent = this.fixtureScript;
                        this.fixtureElement.appendChild(scriptElement);
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ES6Tests.prototype.teardown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.application.unload("test");
                delete window["_stimulus"];
                return [2 /*return*/];
            });
        });
    };
    ES6Tests.prototype["test ES6 controller classes"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerEvent("button", "click")];
                    case 1:
                        _a.sent();
                        this.assertActions({ eventType: "click", currentTarget: this.findElement("button") });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ES6Tests;
}(LogControllerTestCase));
export default ES6Tests;
function supportsES6Classes() {
    try {
        return eval("(class {}), true");
    }
    catch (error) {
        return false;
    }
}
function supportsReflectConstruct() {
    return typeof Reflect == "object" && typeof Reflect.construct == "function";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXM2X3Rlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9tb2R1bGVzL2VzNl90ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUE7QUFFekU7SUFBc0MsNEJBQXFCO0lBQTNEO1FBQUEscUVBa0NDO1FBN0JDLGlCQUFXLEdBQUcseUdBSWIsQ0FBQTtRQUVELG1CQUFhLEdBQUcsNkZBRWYsQ0FBQTs7SUFxQkgsQ0FBQztJQWpDUSx1QkFBYyxHQUFyQixVQUFzQixRQUFnQjtRQUNwQyxPQUFPLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLHdCQUF3QixFQUFFLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBWUssZ0NBQWEsR0FBbkI7Ozs7Ozt3QkFDRyxNQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxhQUFhLGVBQUEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO3dCQUMvRSxxQkFBTSxpQkFBTSxhQUFhLFdBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUE7d0JBRXJCLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3dCQUN0RCxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUE7d0JBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFBO3dCQUM5QyxxQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFBOzt3QkFBcEIsU0FBb0IsQ0FBQTs7Ozs7S0FDckI7SUFFSywyQkFBUSxHQUFkOzs7Z0JBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQy9CLE9BQVEsTUFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBOzs7O0tBQ3BDO0lBRUssaURBQTZCLEdBQW5DOzs7OzRCQUNFLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFBOzt3QkFBMUMsU0FBMEMsQ0FBQTt3QkFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBOzs7OztLQUN0RjtJQUNILGVBQUM7QUFBRCxDQUFDLEFBbENELENBQXNDLHFCQUFxQixHQWtDMUQ7O0FBRUQ7SUFDRSxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtLQUNoQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxLQUFLLENBQUE7S0FDYjtBQUNILENBQUM7QUFFRDtJQUNFLE9BQU8sT0FBTyxPQUFPLElBQUksUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUE7QUFDN0UsQ0FBQyJ9