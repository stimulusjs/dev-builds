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
var TestCase = /** @class */ (function () {
    function TestCase(assert) {
        this.assert = assert;
    }
    TestCase.defineModule = function (moduleName, qUnit) {
        var _this = this;
        if (moduleName === void 0) { moduleName = this.name; }
        if (qUnit === void 0) { qUnit = QUnit; }
        qUnit.module(moduleName, function (hooks) {
            _this.manifest.forEach(function (_a) {
                var type = _a[0], name = _a[1];
                type = _this.shouldSkipTest(name) ? "skip" : type;
                var method = qUnit[type];
                var test = _this.getTest(name);
                method.call(qUnit, name, test);
            });
        });
    };
    TestCase.getTest = function (testName) {
        var _this = this;
        return function (assert) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.runTest(testName, assert)];
        }); }); };
    };
    TestCase.runTest = function (testName, assert) {
        var testCase = new this(assert);
        return testCase.runTest(testName);
    };
    TestCase.shouldSkipTest = function (testName) {
        return false;
    };
    Object.defineProperty(TestCase, "manifest", {
        get: function () {
            return this.testPropertyNames.map(function (name) { return [name.slice(0, 4), name.slice(5)]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestCase, "testNames", {
        get: function () {
            return this.manifest.map(function (_a) {
                var type = _a[0], name = _a[1];
                return name;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestCase, "testPropertyNames", {
        get: function () {
            return Object.keys(this.prototype).filter(function (name) { return name.match(/^(skip|test|todo) /); });
        },
        enumerable: true,
        configurable: true
    });
    TestCase.prototype.runTest = function (testName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 3, 5]);
                        return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.runTestBody(testName)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.teardown()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TestCase.prototype.runTestBody = function (testName) {
        return __awaiter(this, void 0, void 0, function () {
            var testCase;
            return __generator(this, function (_a) {
                testCase = this["test " + testName] || this["todo " + testName];
                if (typeof testCase == "function") {
                    return [2 /*return*/, testCase.call(this)];
                }
                else {
                    return [2 /*return*/, Promise.reject("test not found: \"" + testName + "\"")];
                }
                return [2 /*return*/];
            });
        });
    };
    TestCase.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    TestCase.prototype.teardown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return TestCase;
}());
export { TestCase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9jYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3QvdGVzdF9jYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUF3Q0Usa0JBQVksTUFBYztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBdkNNLHFCQUFZLEdBQW5CLFVBQW9CLFVBQThCLEVBQUUsS0FBb0I7UUFBeEUsaUJBU0M7UUFUbUIsMkJBQUEsRUFBQSxhQUFxQixJQUFJLENBQUMsSUFBSTtRQUFFLHNCQUFBLEVBQUEsYUFBb0I7UUFDdEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBQSxLQUFLO1lBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBWTtvQkFBWCxZQUFJLEVBQUUsWUFBSTtnQkFDaEMsSUFBSSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO2dCQUNoRCxJQUFNLE1BQU0sR0FBSSxLQUFhLENBQUMsSUFBSSxDQUFhLENBQUE7Z0JBQy9DLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNoQyxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLGdCQUFPLEdBQWQsVUFBZSxRQUFnQjtRQUEvQixpQkFHQztRQUZDLE9BQU8sVUFBTyxNQUFjO1lBQzFCLHNCQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFBO2lCQUFBLENBQUE7SUFDbEMsQ0FBQztJQUVNLGdCQUFPLEdBQWQsVUFBZSxRQUFnQixFQUFFLE1BQWM7UUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFTSx1QkFBYyxHQUFyQixVQUFzQixRQUFnQjtRQUNwQyxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxzQkFBVyxvQkFBUTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUE7UUFDOUUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxxQkFBUzthQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFZO29CQUFYLFlBQUksRUFBRSxZQUFJO2dCQUFNLE9BQUEsSUFBSTtZQUFKLENBQUksQ0FBQyxDQUFBO1FBQ2xELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkJBQWlCO2FBQTVCO1lBQ0UsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQTtRQUNyRixDQUFDOzs7T0FBQTtJQU1LLDBCQUFPLEdBQWIsVUFBYyxRQUFnQjs7Ozs7O3dCQUUxQixxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFsQixTQUFrQixDQUFBO3dCQUNsQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQTs7NEJBRWhDLHFCQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUE7Ozs7OztLQUV4QjtJQUVLLDhCQUFXLEdBQWpCLFVBQWtCLFFBQWdCOzs7O2dCQUMxQixRQUFRLEdBQUksSUFBWSxDQUFDLFVBQVEsUUFBVSxDQUFDLElBQUssSUFBWSxDQUFDLFVBQVEsUUFBVSxDQUFDLENBQUE7Z0JBQ3ZGLElBQUksT0FBTyxRQUFRLElBQUksVUFBVSxFQUFFO29CQUNqQyxzQkFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBO2lCQUMzQjtxQkFBTTtvQkFDTCxzQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLHVCQUFvQixRQUFRLE9BQUcsQ0FBQyxFQUFBO2lCQUN2RDs7OztLQUNGO0lBRUssd0JBQUssR0FBWDs7Ozs7O0tBRUM7SUFFSywyQkFBUSxHQUFkOzs7Ozs7S0FFQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDIn0=