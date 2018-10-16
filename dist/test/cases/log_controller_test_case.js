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
import { ControllerTests } from "./controller_test_case";
import { LogController } from "../controllers/log_controller";
var LogControllerTestCase = /** @class */ (function (_super) {
    __extends(LogControllerTestCase, _super);
    function LogControllerTestCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogControllerTestCase.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LogController.actionLog = [];
                        return [4 /*yield*/, _super.prototype.setup.call(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogControllerTestCase.prototype.assertActions = function () {
        var _this = this;
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        this.assert.equal(this.actionLog.length, actions.length);
        actions.forEach(function (expected, index) {
            var keys = Object.keys(expected);
            var actual = slice(_this.actionLog[index] || {}, keys);
            var result = keys.every(function (key) { return expected[key] === actual[key]; });
            _this.assert.pushResult({ result: result, actual: actual, expected: expected, message: "" });
        });
    };
    LogControllerTestCase.prototype.assertNoActions = function () {
        this.assert.equal(this.actionLog.length, 0);
    };
    Object.defineProperty(LogControllerTestCase.prototype, "actionLog", {
        get: function () {
            return LogController.actionLog;
        },
        enumerable: true,
        configurable: true
    });
    return LogControllerTestCase;
}(ControllerTests(LogController)));
export { LogControllerTestCase };
function slice(object, keys) {
    return keys.reduce(function (result, key) { return (result[key] = object[key], result); }, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nX2NvbnRyb2xsZXJfdGVzdF9jYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9jYXNlcy9sb2dfY29udHJvbGxlcl90ZXN0X2Nhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQWtCLE1BQU0sK0JBQStCLENBQUE7QUFFN0U7SUFBMkMseUNBQThCO0lBQXpFOztJQXdCQSxDQUFDO0lBdkJPLHFDQUFLLEdBQVg7Ozs7O3dCQUNFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO3dCQUM1QixxQkFBTSxpQkFBTSxLQUFLLFdBQUUsRUFBQTs7d0JBQW5CLFNBQW1CLENBQUE7Ozs7O0tBQ3BCO0lBRUQsNkNBQWEsR0FBYjtRQUFBLGlCQVNDO1FBVGEsaUJBQWlCO2FBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtZQUFqQiw0QkFBaUI7O1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV4RCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFFLEtBQUs7WUFDOUIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNsQyxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDdkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQTtZQUMvRCxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ25FLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsc0JBQUksNENBQVM7YUFBYjtZQUNFLE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQTtRQUNoQyxDQUFDOzs7T0FBQTtJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUEyQyxlQUFlLENBQUMsYUFBYSxDQUFDLEdBd0J4RTs7QUFFRCxlQUFlLE1BQVcsRUFBRSxJQUFjO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQVcsRUFBRSxHQUFXLElBQUssT0FBQSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQW5DLENBQW1DLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDM0YsQ0FBQyJ9