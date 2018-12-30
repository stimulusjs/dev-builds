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
import { TestCase } from "./test_case";
var DOMTestCase = /** @class */ (function (_super) {
    __extends(DOMTestCase, _super);
    function DOMTestCase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureSelector = "#qunit-fixture";
        _this.fixtureHTML = "";
        return _this;
    }
    DOMTestCase.prototype.runTest = function (testName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.renderFixture()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _super.prototype.runTest.call(this, testName)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DOMTestCase.prototype.renderFixture = function (fixtureHTML) {
        if (fixtureHTML === void 0) { fixtureHTML = this.fixtureHTML; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.fixtureElement.innerHTML = fixtureHTML;
                return [2 /*return*/, this.nextFrame];
            });
        });
    };
    Object.defineProperty(DOMTestCase.prototype, "fixtureElement", {
        get: function () {
            var element = document.querySelector(this.fixtureSelector);
            if (element) {
                return element;
            }
            else {
                throw new Error("missing fixture element \"" + this.fixtureSelector + "\"");
            }
        },
        enumerable: true,
        configurable: true
    });
    DOMTestCase.prototype.triggerEvent = function (selectorOrTarget, type, bubbles) {
        if (bubbles === void 0) { bubbles = true; }
        return __awaiter(this, void 0, void 0, function () {
            var eventTarget, event;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventTarget = typeof selectorOrTarget == "string" ? this.findElement(selectorOrTarget) : selectorOrTarget;
                        event = document.createEvent("Events");
                        event.initEvent(type, bubbles, true);
                        // IE <= 11 does not set `defaultPrevented` when `preventDefault()` is called on synthetic events
                        event.preventDefault = function () {
                            Object.defineProperty(this, "defaultPrevented", { get: function () { return true; }, configurable: true });
                        };
                        eventTarget.dispatchEvent(event);
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, event];
                }
            });
        });
    };
    DOMTestCase.prototype.findElement = function (selector) {
        var element = this.fixtureElement.querySelector(selector);
        if (element) {
            return element;
        }
        else {
            throw new Error("couldn't find element \"" + selector + "\"");
        }
    };
    DOMTestCase.prototype.findElements = function () {
        var _this = this;
        var selectors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selectors[_i] = arguments[_i];
        }
        return selectors.map(function (selector) { return _this.findElement(selector); });
    };
    Object.defineProperty(DOMTestCase.prototype, "nextFrame", {
        get: function () {
            return new Promise(function (resolve) { return requestAnimationFrame(resolve); });
        },
        enumerable: true,
        configurable: true
    });
    return DOMTestCase;
}(TestCase));
export { DOMTestCase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb21fdGVzdF9jYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFFdEM7SUFBaUMsK0JBQVE7SUFBekM7UUFBQSxxRUFzREM7UUFyREMscUJBQWUsR0FBVyxnQkFBZ0IsQ0FBQTtRQUMxQyxpQkFBVyxHQUFXLEVBQUUsQ0FBQTs7SUFvRDFCLENBQUM7SUFsRE8sNkJBQU8sR0FBYixVQUFjLFFBQWdCOzs7OzRCQUM1QixxQkFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUE7O3dCQUExQixTQUEwQixDQUFBO3dCQUMxQixxQkFBTSxpQkFBTSxPQUFPLFlBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUE3QixTQUE2QixDQUFBOzs7OztLQUM5QjtJQUVLLG1DQUFhLEdBQW5CLFVBQW9CLFdBQThCO1FBQTlCLDRCQUFBLEVBQUEsY0FBYyxJQUFJLENBQUMsV0FBVzs7O2dCQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUE7Z0JBQzNDLHNCQUFPLElBQUksQ0FBQyxTQUFTLEVBQUE7OztLQUN0QjtJQUVELHNCQUFJLHVDQUFjO2FBQWxCO1lBQ0UsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDNUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxPQUFPLENBQUE7YUFDZjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUE0QixJQUFJLENBQUMsZUFBZSxPQUFHLENBQUMsQ0FBQTthQUNyRTtRQUNILENBQUM7OztPQUFBO0lBRUssa0NBQVksR0FBbEIsVUFBbUIsZ0JBQXNDLEVBQUUsSUFBWSxFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7Ozs7Ozt3QkFDeEYsV0FBVyxHQUFHLE9BQU8sZ0JBQWdCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFBO3dCQUN6RyxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTt3QkFDNUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO3dCQUVwQyxpR0FBaUc7d0JBQ2pHLEtBQUssQ0FBQyxjQUFjLEdBQUc7NEJBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRyxFQUFFLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO3dCQUMxRixDQUFDLENBQUE7d0JBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDaEMscUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBQTs7d0JBQXBCLFNBQW9CLENBQUE7d0JBQ3BCLHNCQUFPLEtBQUssRUFBQTs7OztLQUNiO0lBRUQsaUNBQVcsR0FBWCxVQUFZLFFBQWdCO1FBQzFCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxPQUFPLENBQUE7U0FDZjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBMEIsUUFBUSxPQUFHLENBQUMsQ0FBQTtTQUN2RDtJQUNILENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQUEsaUJBRUM7UUFGWSxtQkFBc0I7YUFBdEIsVUFBc0IsRUFBdEIscUJBQXNCLEVBQXRCLElBQXNCO1lBQXRCLDhCQUFzQjs7UUFDakMsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO0lBQzlELENBQUM7SUFFRCxzQkFBSSxrQ0FBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUE7UUFDL0QsQ0FBQzs7O09BQUE7SUFDSCxrQkFBQztBQUFELENBQUMsQUF0REQsQ0FBaUMsUUFBUSxHQXNEeEMifQ==