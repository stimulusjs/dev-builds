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
var LifecycleTests = /** @class */ (function (_super) {
    __extends(LifecycleTests, _super);
    function LifecycleTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LifecycleTests.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.controllerElement = this.controller.element;
                return [2 /*return*/];
            });
        });
    };
    LifecycleTests.prototype["test Controller#initialize"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var controller;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller = this.controller;
                        this.assert.equal(controller.initializeCount, 1);
                        return [4 /*yield*/, this.reconnectControllerElement()];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller, controller);
                        this.assert.equal(controller.initializeCount, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    LifecycleTests.prototype["test Controller#connect"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.equal(this.controller.connectCount, 1);
                        return [4 /*yield*/, this.reconnectControllerElement()];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.connectCount, 2);
                        this.assert.equal(this.controller.constructor["blessCount"], 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    LifecycleTests.prototype["test Controller#disconnect"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var controller;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller = this.controller;
                        this.assert.equal(controller.disconnectCount, 0);
                        return [4 /*yield*/, this.disconnectControllerElement()];
                    case 1:
                        _a.sent();
                        this.assert.equal(controller.disconnectCount, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    LifecycleTests.prototype.reconnectControllerElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.disconnectControllerElement()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.connectControllerElement()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LifecycleTests.prototype.connectControllerElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fixtureElement.appendChild(this.controllerElement);
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LifecycleTests.prototype.disconnectControllerElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fixtureElement.removeChild(this.controllerElement);
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LifecycleTests;
}(LogControllerTestCase));
export default LifecycleTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX3Rlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2Nhc2VzL2xpZmVjeWNsZV90ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUVuRTtJQUE0QyxrQ0FBcUI7SUFBakU7O0lBMkNBLENBQUM7SUF4Q08sOEJBQUssR0FBWDs7O2dCQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQTs7OztLQUNqRDtJQUVLLHNEQUE0QixHQUFsQzs7Ozs7O3dCQUNRLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO3dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFBO3dCQUNoRCxxQkFBTSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUE7d0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUE7d0JBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7O0tBQ2pEO0lBRUssbURBQXlCLEdBQS9COzs7Ozt3QkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQTt3QkFDbEQscUJBQU0sSUFBSSxDQUFDLDBCQUEwQixFQUFFLEVBQUE7O3dCQUF2QyxTQUF1QyxDQUFBO3dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQTt3QkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFtQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7OztLQUN6RTtJQUVLLHNEQUE0QixHQUFsQzs7Ozs7O3dCQUNRLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO3dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFBO3dCQUNoRCxxQkFBTSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBQTs7d0JBQXhDLFNBQXdDLENBQUE7d0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7O0tBQ2pEO0lBRUssbURBQTBCLEdBQWhDOzs7OzRCQUNFLHFCQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFBOzt3QkFBeEMsU0FBd0MsQ0FBQTt3QkFDeEMscUJBQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFBOzs7OztLQUN0QztJQUVLLGlEQUF3QixHQUE5Qjs7Ozs7d0JBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7d0JBQ3ZELHFCQUFNLElBQUksQ0FBQyxTQUFTLEVBQUE7O3dCQUFwQixTQUFvQixDQUFBOzs7OztLQUNyQjtJQUVLLG9EQUEyQixHQUFqQzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7d0JBQ3ZELHFCQUFNLElBQUksQ0FBQyxTQUFTLEVBQUE7O3dCQUFwQixTQUFvQixDQUFBOzs7OztLQUNyQjtJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNDRCxDQUE0QyxxQkFBcUIsR0EyQ2hFIn0=