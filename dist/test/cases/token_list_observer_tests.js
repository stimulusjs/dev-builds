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
import { TokenListObserver } from "../../src/token_list_observer";
import { ObserverTestCase } from "../observer_test_case";
var TokenListObserverTests = /** @class */ (function (_super) {
    __extends(TokenListObserverTests, _super);
    function TokenListObserverTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributeName = "data-test";
        _this.fixtureHTML = "<div " + _this.attributeName + "=\"one two\"></div>";
        _this.observer = new TokenListObserver(_this.fixtureElement, _this.attributeName, _this);
        return _this;
    }
    TokenListObserverTests.prototype["test tokenMatched"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.assert.deepEqual(this.calls, [
                    ["tokenMatched", this.element, this.attributeName, "one", 0],
                    ["tokenMatched", this.element, this.attributeName, "two", 1]
                ]);
                return [2 /*return*/];
            });
        });
    };
    TokenListObserverTests.prototype["test adding a token to the right"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tokenString = "one two three";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["tokenMatched", this.element, this.attributeName, "three", 2]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenListObserverTests.prototype["test inserting a token in the middle"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tokenString = "one three two";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["tokenUnmatched", this.element, this.attributeName, "two", 1],
                            ["tokenMatched", this.element, this.attributeName, "three", 1],
                            ["tokenMatched", this.element, this.attributeName, "two", 2]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenListObserverTests.prototype["test removing the leftmost token"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tokenString = "two";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["tokenUnmatched", this.element, this.attributeName, "one", 0],
                            ["tokenUnmatched", this.element, this.attributeName, "two", 1],
                            ["tokenMatched", this.element, this.attributeName, "two", 0]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenListObserverTests.prototype["test removing the rightmost token"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tokenString = "one";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["tokenUnmatched", this.element, this.attributeName, "two", 1]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenListObserverTests.prototype["test removing the only token"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tokenString = "one";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.tokenString = "";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["tokenUnmatched", this.element, this.attributeName, "two", 1],
                            ["tokenUnmatched", this.element, this.attributeName, "one", 0]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(TokenListObserverTests.prototype, "element", {
        get: function () {
            return this.findElement("div");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenListObserverTests.prototype, "tokenString", {
        set: function (value) {
            this.element.setAttribute(this.attributeName, value);
        },
        enumerable: true,
        configurable: true
    });
    // Token observer delegate
    TokenListObserverTests.prototype.tokenMatched = function (token) {
        this.recordCall("tokenMatched", token.element, token.attributeName, token.content, token.index);
    };
    TokenListObserverTests.prototype.tokenUnmatched = function (token) {
        this.recordCall("tokenUnmatched", token.element, token.attributeName, token.content, token.index);
    };
    return TokenListObserverTests;
}(ObserverTestCase));
export default TokenListObserverTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fbGlzdF9vYnNlcnZlcl90ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvY2FzZXMvdG9rZW5fbGlzdF9vYnNlcnZlcl90ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQVMsaUJBQWlCLEVBQTZCLE1BQU0sK0JBQStCLENBQUE7QUFDbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFFeEQ7SUFBb0QsMENBQWdCO0lBQXBFO1FBQUEscUVBaUZDO1FBaEZDLG1CQUFhLEdBQUcsV0FBVyxDQUFBO1FBQzNCLGlCQUFXLEdBQUcsVUFBUSxLQUFJLENBQUMsYUFBYSx3QkFBbUIsQ0FBQTtRQUMzRCxjQUFRLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLEtBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLENBQUE7O0lBOEVqRixDQUFDO0lBNUVPLHFEQUFtQixHQUF6Qjs7O2dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2hDLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUM1RCxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDN0QsQ0FBQyxDQUFBOzs7O0tBQ0g7SUFFSyxvRUFBa0MsR0FBeEM7Ozs7O3dCQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFBO3dCQUNsQyxxQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFBOzt3QkFBcEIsU0FBb0IsQ0FBQTt3QkFFcEIsSUFBSSxDQUFDLE1BQU0s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