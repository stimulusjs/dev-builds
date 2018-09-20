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
import { ApplicationTestCase } from "../application_test_case";
import { LogController } from "../log_controller";
var AController = /** @class */ (function (_super) {
    __extends(AController, _super);
    function AController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AController;
}(LogController));
var BController = /** @class */ (function (_super) {
    __extends(BController, _super);
    function BController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BController;
}(LogController));
var CController = /** @class */ (function (_super) {
    __extends(CController, _super);
    function CController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CController;
}(LogController));
var ApplicationTests = /** @class */ (function (_super) {
    __extends(ApplicationTests, _super);
    function ApplicationTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "<div data-controller=\"a\"><div data-controller=\"b\">";
        _this.definitions = [
            { controllerConstructor: AController, identifier: "a" },
            { controllerConstructor: BController, identifier: "b" }
        ];
        return _this;
    }
    ApplicationTests.prototype["test Application#register"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.equal(this.controllers.length, 0);
                        this.application.register("log", LogController);
                        return [4 /*yield*/, this.renderFixture("<div data-controller=\"log\">")];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controllers[0].initializeCount, 1);
                        this.assert.equal(this.controllers[0].connectCount, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationTests.prototype["test Application#load"] = function () {
        this.assert.equal(this.controllers.length, 0);
        this.application.load(this.definitions);
        this.assert.equal(this.controllers.length, 2);
        this.assert.ok(this.controllers[0] instanceof AController);
        this.assert.equal(this.controllers[0].initializeCount, 1);
        this.assert.equal(this.controllers[0].connectCount, 1);
        this.assert.equal(this.controllers[0].constructor["blessCount"], 1);
        this.assert.ok(this.controllers[1] instanceof BController);
        this.assert.equal(this.controllers[1].initializeCount, 1);
        this.assert.equal(this.controllers[1].connectCount, 1);
        this.assert.equal(this.controllers[1].constructor["blessCount"], 1);
    };
    ApplicationTests.prototype["test Application#unload"] = function () {
        this.application.load(this.definitions);
        var originalControllers = this.controllers;
        this.application.unload("a");
        this.assert.equal(originalControllers[0].disconnectCount, 1);
        this.assert.equal(this.controllers.length, 1);
        this.assert.ok(this.controllers[0] instanceof BController);
    };
    ApplicationTests.prototype["test reloading an already-loaded module"] = function () {
        this.application.load(this.definitions);
        var originalControllers = this.controllers;
        this.application.load({ controllerConstructor: CController, identifier: "a" });
        this.assert.equal(this.controllers.length, 2);
        this.assert.equal(originalControllers[0].disconnectCount, 1);
        this.assert.notEqual(originalControllers[0], this.controllers[1]);
        this.assert.ok(this.controllers[1] instanceof CController);
        this.assert.equal(this.controllers[1].initializeCount, 1);
        this.assert.equal(this.controllers[1].connectCount, 1);
        this.assert.equal(this.controllers[1].constructor["blessCount"], 1);
    };
    Object.defineProperty(ApplicationTests.prototype, "controllers", {
        get: function () {
            return this.application.controllers;
        },
        enumerable: true,
        configurable: true
    });
    return ApplicationTests;
}(ApplicationTestCase));
export default ApplicationTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fdGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L2Nhc2VzL2FwcGxpY2F0aW9uX3Rlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFBO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUVqRDtJQUEwQiwrQkFBYTtJQUF2Qzs7SUFBeUMsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUExQyxDQUEwQixhQUFhLEdBQUc7QUFDMUM7SUFBMEIsK0JBQWE7SUFBdkM7O0lBQXlDLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFBMUMsQ0FBMEIsYUFBYSxHQUFHO0FBQzFDO0lBQTBCLCtCQUFhO0lBQXZDOztJQUF5QyxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBQTFDLENBQTBCLGFBQWEsR0FBRztBQUUxQztJQUE4QyxvQ0FBbUI7SUFBakU7UUFBQSxxRUE2REM7UUE1REMsaUJBQVcsR0FBRyx3REFBb0QsQ0FBQTtRQUMxRCxpQkFBVyxHQUFHO1lBQ3BCLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDdkQsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRTtTQUN4RCxDQUFBOztJQXdESCxDQUFDO0lBdERPLHVEQUEyQixHQUFqQzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7d0JBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQTt3QkFDL0MscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQywrQkFBNkIsQ0FBQyxFQUFBOzt3QkFBdkQsU0FBdUQsQ0FBQTt3QkFFdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7d0JBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7OztLQUN2RDtJQUVELG1EQUF1QixHQUF2QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUU3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLFdBQVcsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBbUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUU1RSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLFdBQVcsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBbUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM5RSxDQUFDO0lBRUQscURBQXlCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZDLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUU1QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxXQUFXLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQscUVBQXlDLEdBQXpDO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZDLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUU1QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksV0FBVyxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFtQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzlFLENBQUM7SUFFRCxzQkFBSSx5Q0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQThCLENBQUE7UUFDeEQsQ0FBQzs7O09BQUE7SUFDSCx1QkFBQztBQUFELENBQUMsQUE3REQsQ0FBOEMsbUJBQW1CLEdBNkRoRSJ9