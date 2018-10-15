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
import { LogController } from "../log_controller";
import { LogControllerTestCase } from "../log_controller_test_case";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXM2X3Rlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9jYXNlcy9lczZfdGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBRW5FO0lBQXNDLDRCQUFxQjtJQUEzRDtRQUFBLHFFQWtDQztRQTdCQyxpQkFBVyxHQUFHLHlHQUliLENBQUE7UUFFRCxtQkFBYSxHQUFHLDZGQUVmLENBQUE7O0lBcUJILENBQUM7SUFqQ1EsdUJBQWMsR0FBckIsVUFBc0IsUUFBZ0I7UUFDcEMsT0FBTyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsSUFBSSx3QkFBd0IsRUFBRSxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQVlLLGdDQUFhLEdBQW5COzs7Ozs7d0JBQ0csTUFBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxlQUFBLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTt3QkFDL0UscUJBQU0saUJBQU0sYUFBYSxXQUFFLEVBQUE7O3dCQUEzQixTQUEyQixDQUFBO3dCQUVyQixhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTt3QkFDdEQsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFBO3dCQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQTt3QkFDOUMscUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBQTs7d0JBQXBCLFNBQW9CLENBQUE7Ozs7O0tBQ3JCO0lBRUssMkJBQVEsR0FBZDs7O2dCQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUMvQixPQUFRLE1BQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTs7OztLQUNwQztJQUVLLGlEQUE2QixHQUFuQzs7Ozs0QkFDRSxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBQTs7d0JBQTFDLFNBQTBDLENBQUE7d0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTs7Ozs7S0FDdEY7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUFzQyxxQkFBcUIsR0FrQzFEOztBQUVEO0lBQ0UsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7S0FDaEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFBO0tBQ2I7QUFDSCxDQUFDO0FBRUQ7SUFDRSxPQUFPLE9BQU8sT0FBTyxJQUFJLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFBO0FBQzdFLENBQUMifQ==