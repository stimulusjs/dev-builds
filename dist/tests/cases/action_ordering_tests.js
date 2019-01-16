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
import { LogControllerTestCase } from "../log_controller_test_case";
var ActionOrderingTests = /** @class */ (function (_super) {
    __extends(ActionOrderingTests, _super);
    function ActionOrderingTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.identifier = ["c", "d"];
        _this.fixtureHTML = "\n    <div data-controller=\"c d\" data-action=\"click->c#log\">\n      <button data-action=\"c#log d#log2\"></button>\n    </div>\n  ";
        return _this;
    }
    ActionOrderingTests.prototype["test adding an action to the right"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "c#log d#log2 c#log3";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.element });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionOrderingTests.prototype["test adding an action to the left"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "c#log3 c#log d#log2";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.element });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionOrderingTests.prototype["test removing an action from the right"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "c#log d#log2";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.element });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionOrderingTests.prototype["test removing an action from the left"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "d#log2 c#log3";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.element });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionOrderingTests.prototype["test replacing an action on the left"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "d#log2 c#log3";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.actionValue = "c#log d#log2 c#log3";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.element });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionOrderingTests.prototype["test stopping an action"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "c#log d#stop c#log3";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "stop", identifier: "d", eventType: "click", currentTarget: this.buttonElement });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionOrderingTests.prototype["test disconnecting a controller disconnects its actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.controllerValue = "c";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.element });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ActionOrderingTests.prototype, "controllerValue", {
        set: function (value) {
            this.element.setAttribute("data-controller", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionOrderingTests.prototype, "actionValue", {
        set: function (value) {
            this.buttonElement.setAttribute("data-action", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionOrderingTests.prototype, "element", {
        get: function () {
            return this.findElement("div");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionOrderingTests.prototype, "buttonElement", {
        get: function () {
            return this.findElement("button");
        },
        enumerable: true,
        configurable: true
    });
    return ActionOrderingTests;
}(LogControllerTestCase));
export default ActionOrderingTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uX29yZGVyaW5nX3Rlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2Nhc2VzL2FjdGlvbl9vcmRlcmluZ190ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUVuRTtJQUFpRCx1Q0FBcUI7SUFBdEU7UUFBQSxxRUE4R0M7UUE3R0MsZ0JBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUN2QixpQkFBVyxHQUFHLHdJQUliLENBQUE7O0lBd0dILENBQUM7SUF0R08sbUVBQW9DLEdBQTFDOzs7Ozt3QkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFBO3dCQUN4QyxxQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFBOzt3QkFBcEIsU0FBb0IsQ0FBQTt3QkFDcEIscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFBOzt3QkFBcEQsU0FBb0QsQ0FBQTt3QkFFcEQsSUFBSSxDQUFDLGFBQWEsQ0FDaEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUN2RixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQ3hGLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFDeEYsRUFB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