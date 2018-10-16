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
import { Application } from "../../src/application";
import { DOMTestCase } from "@stimulus/test";
import { defaultSchema } from "../../src/schema";
var TestApplication = /** @class */ (function (_super) {
    __extends(TestApplication, _super);
    function TestApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestApplication.prototype.handleError = function (error, message, detail) {
        throw error;
    };
    return TestApplication;
}(Application));
var ApplicationTestCase = /** @class */ (function (_super) {
    __extends(ApplicationTestCase, _super);
    function ApplicationTestCase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = defaultSchema;
        _this.application = new TestApplication(_this.fixtureElement, _this.schema);
        return _this;
    }
    ApplicationTestCase.prototype.runTest = function (testName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        this.setupApplication();
                        this.application.start();
                        return [4 /*yield*/, _super.prototype.runTest.call(this, testName)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.application.stop();
                        return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApplicationTestCase.prototype.setupApplication = function () {
        // Override in subclasses to register controllers
    };
    return ApplicationTestCase;
}(DOMTestCase));
export { ApplicationTestCase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fdGVzdF9jYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9jYXNlcy9hcHBsaWNhdGlvbl90ZXN0X2Nhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUM1QyxPQUFPLEVBQVUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFeEQ7SUFBOEIsbUNBQVc7SUFBekM7O0lBSUEsQ0FBQztJQUhDLHFDQUFXLEdBQVgsVUFBWSxLQUFZLEVBQUUsT0FBZSxFQUFFLE1BQWM7UUFDdkQsTUFBTSxLQUFLLENBQUE7SUFDYixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBOEIsV0FBVyxHQUl4QztBQUVEO0lBQXlDLHVDQUFXO0lBQXBEO1FBQUEscUVBaUJDO1FBaEJDLFlBQU0sR0FBVyxhQUFhLENBQUE7UUFDOUIsaUJBQVcsR0FBZ0IsSUFBSSxlQUFlLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7O0lBZWxGLENBQUM7SUFiTyxxQ0FBTyxHQUFiLFVBQWMsUUFBZ0I7Ozs7Ozt3QkFFMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7d0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7d0JBQ3hCLHFCQUFNLGlCQUFNLE9BQU8sWUFBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTdCLFNBQTZCLENBQUE7Ozt3QkFFN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTs7Ozs7O0tBRTFCO0lBRUQsOENBQWdCLEdBQWhCO1FBQ0UsaURBQWlEO0lBQ25ELENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBeUMsV0FBVyxHQWlCbkQifQ==