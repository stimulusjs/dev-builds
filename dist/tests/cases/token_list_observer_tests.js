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
import { TokenListObserver } from "../../mutation-observers";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fbGlzdF9vYnNlcnZlcl90ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0cy9jYXNlcy90b2tlbl9saXN0X29ic2VydmVyX3Rlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBUyxpQkFBaUIsRUFBNkIsTUFBTSwwQkFBMEIsQ0FBQTtBQUM5RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUV4RDtJQUFvRCwwQ0FBZ0I7SUFBcEU7UUFBQSxxRUFpRkM7UUFoRkMsbUJBQWEsR0FBRyxXQUFXLENBQUE7UUFDM0IsaUJBQVcsR0FBRyxVQUFRLEtBQUksQ0FBQyxhQUFhLHdCQUFtQixDQUFBO1FBQzNELGNBQVEsR0FBRyxJQUFJLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsQ0FBQTs7SUE4RWpGLENBQUM7SUE1RU8scURBQW1CLEdBQXpCOzs7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDaEMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQzVELENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUM3RCxDQUFDLENBQUE7Ozs7S0FDSDtJQUVLLG9FQUFrQyxHQUF4Qzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUE7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxTQUFTLEVBQUE7O3dCQUFwQixTQUFvQixDQUFBO3dCQUVwQixJQUFJLENB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