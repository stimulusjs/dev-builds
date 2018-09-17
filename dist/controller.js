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
import { Controller } from "@stimulus/core";
import { createEvent } from "./event_helpers";
import { Operation } from "./operation";
import { Replacement } from "./replacement";
import { Resource } from "./resource";
var ResourceController = /** @class */ (function (_super) {
    __extends(ResourceController, _super);
    function ResourceController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceController.prototype.initialize = function () {
        if (this.resource.shouldBootstrapContents) {
            this.issue("bootstrap", this.resource.bootstrapRequest);
        }
    };
    ResourceController.prototype.create = function (event) {
        event.preventDefault();
        this.issue("create", this.resource.createRequest);
    };
    ResourceController.prototype.edit = function (event) {
        event.preventDefault();
        this.issue("edit", this.resource.editRequest);
    };
    ResourceController.prototype.show = function (event) {
        event.preventDefault();
        this.issue("show", this.resource.showRequest);
    };
    ResourceController.prototype.update = function (event) {
        event.preventDefault();
        this.issue("update", this.resource.updateRequest);
    };
    ResourceController.prototype.destroy = function (event) {
        event.preventDefault();
        this.issue("destroy", this.resource.destroyRequest);
    };
    ResourceController.prototype.issue = function (name, request) {
        return new Operation(this, name, request).start();
    };
    Object.defineProperty(ResourceController.prototype, "resource", {
        get: function () {
            return new Resource(this.scope);
        },
        enumerable: true,
        configurable: true
    });
    ResourceController.prototype.shouldPerformOperation = function (operation) {
        var event = this.dispatchEventForOperation(operation, "before-" + operation.name);
        return !event.defaultPrevented;
    };
    ResourceController.prototype.operationStarted = function (operation) {
        this.showActivityIndicator();
    };
    ResourceController.prototype.operationEnded = function (operation) {
        this.hideActivityIndicator();
    };
    ResourceController.prototype.operationSucceededWithResponse = function (operation, response) {
        var event = this.dispatchEventForOperation(operation, operation.name);
        if (!event.defaultPrevented) {
            this.present(response);
        }
    };
    ResourceController.prototype.operationFailedWithError = function (operation, error) {
        requestAnimationFrame(function () { return alert(error); });
    };
    ResourceController.prototype.showActivityIndicator = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.element.classList.add(_this.activityClass); });
    };
    ResourceController.prototype.hideActivityIndicator = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.element.classList.remove(_this.activityClass); });
    };
    ResourceController.prototype.present = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var replacement, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Replacement.bind;
                        _b = [void 0, this.element];
                        return [4 /*yield*/, response.html];
                    case 1:
                        replacement = new (_a.apply(Replacement, _b.concat([_c.sent()])))();
                        console.log("replacement =", replacement);
                        requestAnimationFrame(function () {
                            _this.resetForm();
                            replacement.perform();
                            _this.focusPrimaryField();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ResourceController.prototype.dispatchEventForOperation = function (operation, name) {
        var event = createEvent("resource:" + name, operation);
        console.log("dispatching", event.type, event);
        this.element.dispatchEvent(event);
        return event;
    };
    Object.defineProperty(ResourceController.prototype, "activityClass", {
        get: function () {
            return this.data.get("activityClass") || "busy";
        },
        enumerable: true,
        configurable: true
    });
    ResourceController.prototype.resetForm = function () {
        if (this.resource.formTarget instanceof HTMLFormElement) {
            this.resource.formTarget.reset();
        }
    };
    ResourceController.prototype.focusPrimaryField = function () {
        this.resource.primaryFieldTarget.focus();
    };
    return ResourceController;
}(Controller));
export { ResourceController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxhQUFhLENBQUE7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBRXJDO0lBQXdDLHNDQUFVO0lBQWxEOztJQXNHQSxDQUFDO0lBckdDLHVDQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1NBQ3hEO0lBQ0gsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxLQUFZO1FBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRCxpQ0FBSSxHQUFKLFVBQUssS0FBWTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFRCxpQ0FBSSxHQUFKLFVBQUssS0FBWTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sS0FBWTtRQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLEtBQVk7UUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELGtDQUFLLEdBQUwsVUFBTSxJQUFZLEVBQUUsT0FBZ0I7UUFDbEMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ25ELENBQUM7SUFFRCxzQkFBSSx3Q0FBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxtREFBc0IsR0FBdEIsVUFBdUIsU0FBb0I7UUFDekMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxZQUFVLFNBQVMsQ0FBQyxJQUFNLENBQUMsQ0FBQTtRQUNuRixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFBO0lBQ2hDLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsU0FBb0I7UUFDbkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUVELDJDQUFjLEdBQWQsVUFBZSxTQUFvQjtRQUNqQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUM5QixDQUFDO0lBRUQsMkRBQThCLEdBQTlCLFVBQStCLFNBQW9CLEVBQUUsUUFBa0I7UUFDckUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHFEQUF3QixHQUF4QixVQUF5QixTQUFvQixFQUFFLEtBQVk7UUFDekQscUJBQXFCLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsa0RBQXFCLEdBQXJCO1FBQUEsaUJBRUM7UUFEQyxxQkFBcUIsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFBO0lBQzdFLENBQUM7SUFFRCxrREFBcUIsR0FBckI7UUFBQSxpQkFFQztRQURDLHFCQUFxQixDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDLENBQUE7SUFDaEYsQ0FBQztJQUVLLG9DQUFPLEdBQWIsVUFBYyxRQUFrQjs7Ozs7Ozs2QkFDTixXQUFXO3NDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUFFLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUE7O3dCQUEvRCxXQUFXLEdBQUcsY0FBSSxXQUFXLGFBQWUsU0FBbUIsTUFBQzt3QkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUE7d0JBQ3pDLHFCQUFxQixDQUFDOzRCQUNwQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7NEJBQ2hCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQTs0QkFDckIsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7d0JBQzFCLENBQUMsQ0FBQyxDQUFBOzs7OztLQUNIO0lBRUQsc0RBQXlCLEdBQXpCLFVBQTBCLFNBQW9CLEVBQUUsSUFBWTtRQUMxRCxJQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsY0FBWSxJQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqQyxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxzQkFBSSw2Q0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksTUFBTSxDQUFBO1FBQ2pELENBQUM7OztPQUFBO0lBRUQsc0NBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLFlBQVksZUFBZSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDMUMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXRHRCxDQUF3QyxVQUFVLEdBc0dqRCJ9