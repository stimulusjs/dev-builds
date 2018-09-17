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
var OperationState;
(function (OperationState) {
    OperationState[OperationState["initialized"] = 0] = "initialized";
    OperationState[OperationState["started"] = 1] = "started";
    OperationState[OperationState["accepted"] = 2] = "accepted";
    OperationState[OperationState["succeeded"] = 3] = "succeeded";
    OperationState[OperationState["canceled"] = 4] = "canceled";
    OperationState[OperationState["failed"] = 5] = "failed";
})(OperationState || (OperationState = {}));
var Operation = /** @class */ (function () {
    function Operation(delegate, name, request) {
        this.state = OperationState.initialized;
        this.delegate = delegate;
        this.name = name;
        this.request = request;
    }
    Operation.prototype.start = function () {
        if (this.state == OperationState.initialized) {
            this.state = OperationState.started;
            if (this.delegate.shouldPerformOperation(this)) {
                this.accept();
            }
            else {
                this.cancel();
            }
        }
    };
    Operation.prototype.cancel = function () {
        if (this.state == OperationState.started) {
            this.state = OperationState.canceled;
            this.delegate.operationEnded(this);
        }
    };
    Operation.prototype.accept = function () {
        if (this.state == OperationState.started) {
            this.state = OperationState.accepted;
            this.delegate.operationStarted(this);
            this.perform();
        }
    };
    Operation.prototype.receive = function (response) {
        if (this.state == OperationState.accepted) {
            this.state = OperationState.succeeded;
            this.delegate.operationEnded(this);
            this.delegate.operationSucceededWithResponse(this, response);
        }
    };
    Operation.prototype.handleError = function (error) {
        if (this.state == OperationState.accepted) {
            this.state = OperationState.failed;
            this.delegate.operationEnded(this);
            this.delegate.operationFailedWithError(this, error);
        }
    };
    Operation.prototype.perform = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.request.perform()];
                    case 1:
                        response = _a.sent();
                        if (response.ok) {
                            this.receive(response);
                        }
                        else {
                            throw new Error("HTTP " + response.statusCode);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Operation;
}());
export { Operation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL29wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLElBQUssY0FPSjtBQVBELFdBQUssY0FBYztJQUNqQixpRUFBVyxDQUFBO0lBQ1gseURBQU8sQ0FBQTtJQUNQLDJEQUFRLENBQUE7SUFDUiw2REFBUyxDQUFBO0lBQ1QsMkRBQVEsQ0FBQTtJQUNSLHVEQUFNLENBQUE7QUFDUixDQUFDLEVBUEksY0FBYyxLQUFkLGNBQWMsUUFPbEI7QUFFRDtJQU1FLG1CQUFZLFFBQTJCLEVBQUUsSUFBWSxFQUFFLE9BQWdCO1FBRi9ELFVBQUssR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFBO1FBR3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQ3hCLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFBO1lBQ25DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO2FBQ2Q7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO2FBQ2Q7U0FDRjtJQUNILENBQUM7SUFFRCwwQkFBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFBO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ25DO0lBQ0gsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUE7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDZjtJQUNILENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsUUFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1NBQzdEO0lBQ0gsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNwRDtJQUNILENBQUM7SUFFYSwyQkFBTyxHQUFyQjs7Ozs7Ozt3QkFFcUIscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXZDLFFBQVEsR0FBRyxTQUE0Qjt3QkFDN0MsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFOzRCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7eUJBQ3ZCOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBUSxRQUFRLENBQUMsVUFBWSxDQUFDLENBQUE7eUJBQy9DOzs7O3dCQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBSyxDQUFDLENBQUE7Ozs7OztLQUUxQjtJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQyJ9