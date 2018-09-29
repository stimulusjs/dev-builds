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
import { ValueListObserver } from "../../src/value_list_observer";
import { ObserverTestCase } from "../observer_test_case";
var ValueListObserverTests = /** @class */ (function (_super) {
    __extends(ValueListObserverTests, _super);
    function ValueListObserverTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributeName = "data-test";
        _this.fixtureHTML = "<div " + _this.attributeName + "=\"one\"></div>";
        _this.observer = new ValueListObserver(_this.fixtureElement, _this.attributeName, _this);
        _this.lastValueId = 0;
        return _this;
    }
    ValueListObserverTests.prototype["test elementMatchedValue"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.assert.deepEqual(this.calls, [
                    ["elementMatchedValue", this.element, 1, "one"]
                ]);
                return [2 /*return*/];
            });
        });
    };
    ValueListObserverTests.prototype["test adding a token to the right"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "one two";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementMatchedValue", this.element, 2, "two"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test adding a token to the left"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "two one";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementUnmatchedValue", this.element, 1, "one"],
                            ["elementMatchedValue", this.element, 2, "two"],
                            ["elementMatchedValue", this.element, 3, "one"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test removing a token from the right"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "one two";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.valueString = "one";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementMatchedValue", this.element, 2, "two"],
                            ["elementUnmatchedValue", this.element, 2, "two"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test removing a token from the left"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "one two";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.valueString = "two";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementMatchedValue", this.element, 2, "two"],
                            ["elementUnmatchedValue", this.element, 1, "one"],
                            ["elementUnmatchedValue", this.element, 2, "two"],
                            ["elementMatchedValue", this.element, 3, "two"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test removing the only token"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementUnmatchedValue", this.element, 1, "one"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test removing and re-adding a token produces a new value"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.valueString = "one";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementUnmatchedValue", this.element, 1, "one"],
                            ["elementMatchedValue", this.element, 2, "one"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ValueListObserverTests.prototype, "element", {
        get: function () {
            return this.findElement("div");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueListObserverTests.prototype, "valueString", {
        set: function (value) {
            this.element.setAttribute(this.attributeName, value);
        },
        enumerable: true,
        configurable: true
    });
    // Value observer delegate
    ValueListObserverTests.prototype.parseValueForToken = function (token) {
        return { id: ++this.lastValueId, token: token };
    };
    ValueListObserverTests.prototype.elementMatchedValue = function (element, value) {
        this.recordCall("elementMatchedValue", element, value.id, value.token.content);
    };
    ValueListObserverTests.prototype.elementUnmatchedValue = function (element, value) {
        this.recordCall("elementUnmatchedValue", element, value.id, value.token.content);
    };
    return ValueListObserverTests;
}(ObserverTestCase));
export default ValueListObserverTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfbGlzdF9vYnNlcnZlcl90ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvY2FzZXMvdmFsdWVfbGlzdF9vYnNlcnZlcl90ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQTZCLE1BQU0sK0JBQStCLENBQUE7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFPeEQ7SUFBb0QsMENBQWdCO0lBQXBFO1FBQUEscUVBb0dDO1FBbkdDLG1CQUFhLEdBQUcsV0FBVyxDQUFBO1FBQzNCLGlCQUFXLEdBQUcsVUFBUSxLQUFJLENBQUMsYUFBYSxvQkFBZSxDQUFBO1FBQ3ZELGNBQVEsR0FBRyxJQUFJLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsQ0FBQTtRQUMvRSxpQkFBVyxHQUFHLENBQUMsQ0FBQTs7SUFnR2pCLENBQUM7SUE5Rk8sNERBQTBCLEdBQWhDOzs7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDaEMsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7aUJBQ2hELENBQUMsQ0FBQTs7OztLQUNIO0lBRUssb0VBQWtDLEdBQXhDOzs7Ozt3QkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQTt3QkFDNUIscUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBQTs7d0JBQXBCLFNBQW9CLENBQUE7d0JBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7NEJBQ3BDLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE9BQU8s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