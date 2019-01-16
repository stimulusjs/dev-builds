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
import { DOMTestCase } from "@stimulus/test";
var ApplicationStartTests = /** @class */ (function (_super) {
    __extends(ApplicationStartTests, _super);
    function ApplicationStartTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationStartTests.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.iframe = document.createElement("iframe");
                this.iframe.src = "/base/packages/@stimulus/core/src/tests/fixtures/application_start/index.html";
                this.fixtureElement.appendChild(this.iframe);
                return [2 /*return*/];
            });
        });
    };
    ApplicationStartTests.prototype["test starting an application when the document is loading"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.messageFromStartState("loading")];
                    case 1:
                        message = _a.sent();
                        this.assertIn(message.connectState, ["interactive", "complete"]);
                        this.assert.equal(message.targetCount, 3);
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationStartTests.prototype["test starting an application when the document is interactive"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.messageFromStartState("interactive")];
                    case 1:
                        message = _a.sent();
                        this.assertIn(message.connectState, ["interactive", "complete"]);
                        this.assert.equal(message.targetCount, 3);
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationStartTests.prototype["test starting an application when the document is complete"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.messageFromStartState("complete")];
                    case 1:
                        message = _a.sent();
                        this.assertIn(message.connectState, ["complete"]);
                        this.assert.equal(message.targetCount, 3);
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationStartTests.prototype.messageFromStartState = function (startState) {
        var _this = this;
        return new Promise(function (resolve) {
            var receiveMessage = function (event) {
                if (event.source == _this.iframe.contentWindow) {
                    var message = JSON.parse(event.data);
                    if (message.startState == startState) {
                        removeEventListener("message", receiveMessage);
                        resolve(message);
                    }
                }
            };
            addEventListener("message", receiveMessage);
        });
    };
    ApplicationStartTests.prototype.assertIn = function (actual, expected) {
        var state = expected.indexOf(actual) > -1;
        var message = JSON.stringify(actual) + " is not in " + JSON.stringify(expected);
        this.assert.ok(state, message);
    };
    return ApplicationStartTests;
}(DOMTestCase));
export default ApplicationStartTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fc3RhcnRfdGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdHMvY2FzZXMvYXBwbGljYXRpb25fc3RhcnRfdGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRTVDO0lBQW1ELHlDQUFXO0lBQTlEOztJQStDQSxDQUFDO0lBNUNPLHFDQUFLLEdBQVg7OztnQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLCtFQUErRSxDQUFBO2dCQUNqRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7S0FDN0M7SUFFSyw0RkFBMkQsR0FBakU7Ozs7OzRCQUNrQixxQkFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFyRCxPQUFPLEdBQUcsU0FBMkM7d0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFBO3dCQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7OztLQUMxQztJQUVLLGdHQUErRCxHQUFyRTs7Ozs7NEJBQ2tCLHFCQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsRUFBQTs7d0JBQXpELE9BQU8sR0FBRyxTQUErQzt3QkFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUE7d0JBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7O0tBQzFDO0lBRUssNkZBQTRELEdBQWxFOzs7Ozs0QkFDa0IscUJBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBdEQsT0FBTyxHQUFHLFNBQTRDO3dCQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO3dCQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7OztLQUMxQztJQUVPLHFEQUFxQixHQUE3QixVQUE4QixVQUFrQjtRQUFoRCxpQkFhQztRQVpDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBbUI7Z0JBQ3pDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtvQkFDN0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3RDLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7d0JBQ3BDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQTt3QkFDOUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO3FCQUNqQjtpQkFDRjtZQUNILENBQUMsQ0FBQTtZQUNELGdCQUFnQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTyx3Q0FBUSxHQUFoQixVQUFpQixNQUFXLEVBQUUsUUFBZTtRQUMzQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzNDLElBQU0sT0FBTyxHQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHLENBQUE7UUFDakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUEvQ0QsQ0FBbUQsV0FBVyxHQStDN0QifQ==