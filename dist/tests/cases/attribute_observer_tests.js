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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
import { AttributeObserver } from "../../mutation-observers";
import { ObserverTestCase } from "../observer_test_case";
var AttributeObserverTests = /** @class */ (function (_super) {
    __extends(AttributeObserverTests, _super);
    function AttributeObserverTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributeName = "data-test";
        _this.fixtureHTML = "<div id=\"outer\" " + _this.attributeName + "><div id=\"inner\"></div></div>";
        _this.observer = new AttributeObserver(_this.fixtureElement, _this.attributeName, _this);
        return _this;
    }
    AttributeObserverTests.prototype["test elementMatchedAttribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.assert.deepEqual(this.calls, [
                    ["elementMatchedAttribute", this.outerElement, this.attributeName]
                ]);
                return [2 /*return*/];
            });
        });
    };
    AttributeObserverTests.prototype["test elementAttributeValueChanged"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.outerElement.setAttribute(this.attributeName, "hello");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.calls, [
                            ["elementMatchedAttribute", this.outerElement, this.attributeName],
                            ["elementAttributeValueChanged", this.outerElement, this.attributeName]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AttributeObserverTests.prototype["test elementUnmatchedAttribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.outerElement.removeAttribute(this.attributeName);
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.calls, [
                            ["elementMatchedAttribute", this.outerElement, this.attributeName],
                            ["elementUnmatchedAttribute", this.outerElement, this.attributeName]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AttributeObserverTests.prototype["test observes attribute changes to child elements"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.innerElement.setAttribute(this.attributeName, "hello");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.calls, [
                            ["elementMatchedAttribute", this.outerElement, this.attributeName],
                            ["elementMatchedAttribute", this.innerElement, this.attributeName]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AttributeObserverTests.prototype["test ignores other attributes"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.outerElement.setAttribute(this.attributeName + "-x", "hello");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.calls, [
                            ["elementMatchedAttribute", this.outerElement, this.attributeName]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AttributeObserverTests.prototype["test observes removal of nested matched element HTML"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, innerElement, outerElement;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, innerElement = _a.innerElement, outerElement = _a.outerElement;
                        innerElement.setAttribute(this.attributeName, "");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _b.sent();
                        this.fixtureElement.innerHTML = "";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _b.sent();
                        this.assert.deepEqual(this.calls, [
                            ["elementMatchedAttribute", outerElement, this.attributeName],
                            ["elementMatchedAttribute", innerElement, this.attributeName],
                            ["elementUnmatchedAttribute", outerElement, this.attributeName],
                            ["elementUnmatchedAttribute", innerElement, this.attributeName]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AttributeObserverTests.prototype["test ignores synchronously disconnected elements"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, innerElement, outerElement;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, innerElement = _a.innerElement, outerElement = _a.outerElement;
                        outerElement.removeChild(innerElement);
                        innerElement.setAttribute(this.attributeName, "");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _b.sent();
                        this.assert.deepEqual(this.calls, [
                            ["elementMatchedAttribute", outerElement, this.attributeName]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AttributeObserverTests.prototype["test ignores synchronously moved elements"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, innerElement, outerElement;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, innerElement = _a.innerElement, outerElement = _a.outerElement;
                        document.body.appendChild(innerElement);
                        innerElement.setAttribute(this.attributeName, "");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _b.sent();
                        this.assert.deepEqual(this.calls, [
                            ["elementMatchedAttribute", outerElement, this.attributeName]
                        ]);
                        document.body.removeChild(innerElement);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AttributeObserverTests.prototype, "outerElement", {
        get: function () {
            return this.findElement("#outer");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeObserverTests.prototype, "innerElement", {
        get: function () {
            return this.findElement("#inner");
        },
        enumerable: true,
        configurable: true
    });
    // Attribute observer delegate
    AttributeObserverTests.prototype.elementMatchedAttribute = function (element, attributeName) {
        this.recordCall("elementMatchedAttribute", element, attributeName);
    };
    AttributeObserverTests.prototype.elementAttributeValueChanged = function (element, attributeName) {
        this.recordCall("elementAttributeValueChanged", element, attributeName);
    };
    AttributeObserverTests.prototype.elementUnmatchedAttribute = function (element, attributeName) {
        this.recordCall("elementUnmatchedAttribute", element, attributeName);
    };
    return AttributeObserverTests;
}(ObserverTestCase));
export default AttributeObserverTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlX29ic2VydmVyX3Rlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2Nhc2VzL2F0dHJpYnV0ZV9vYnNlcnZlcl90ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQTZCLE1BQU0sMEJBQTBCLENBQUE7QUFDdkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFFeEQ7SUFBb0QsMENBQWdCO0lBQXBFO1FBQUEscUVBa0hDO1FBakhDLG1CQUFhLEdBQUcsV0FBVyxDQUFBO1FBQzNCLGlCQUFXLEdBQUcsdUJBQW1CLEtBQUksQ0FBQyxhQUFhLG9DQUErQixDQUFBO1FBQ2xGLGNBQVEsR0FBRyxJQUFJLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsQ0FBQTs7SUErR2pGLENBQUM7SUE3R08sZ0VBQThCLEdBQXBDOzs7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDaEMsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7aUJBQ25FLENBQUMsQ0FBQTs7OztLQUNIO0lBRUsscUVBQW1DLEdBQXpDOzs7Ozt3QkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3dCQUMzRCxxQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFBOzt3QkFBcEIsU0FBb0IsQ0FBQTt3QkFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTs0QkFDaEMsQ0FBQyx5QkFBeUIsRUFB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