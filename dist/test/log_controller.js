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
import { Controller } from "../src/controller";
var LogController = /** @class */ (function (_super) {
    __extends(LogController, _super);
    function LogController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initializeCount = 0;
        _this.connectCount = 0;
        _this.disconnectCount = 0;
        return _this;
    }
    LogController.bless = function () {
        _super.bless.call(this);
        this.blessCount++;
    };
    LogController.prototype.initialize = function () {
        this.initializeCount++;
    };
    LogController.prototype.connect = function () {
        this.connectCount++;
    };
    LogController.prototype.disconnect = function () {
        this.disconnectCount++;
    };
    LogController.prototype.log = function (event) {
        this.recordAction("log", event);
    };
    LogController.prototype.log2 = function (event) {
        this.recordAction("log2", event);
    };
    LogController.prototype.log3 = function (event) {
        this.recordAction("log3", event);
    };
    LogController.prototype.stop = function (event) {
        this.recordAction("stop", event);
        event.stopImmediatePropagation();
    };
    Object.defineProperty(LogController.prototype, "actionLog", {
        get: function () {
            return this.constructor.actionLog;
        },
        enumerable: true,
        configurable: true
    });
    LogController.prototype.recordAction = function (name, event) {
        this.actionLog.push({
            name: name,
            controller: this,
            identifier: this.identifier,
            eventType: event.type,
            currentTarget: event.currentTarget,
            defaultPrevented: event.defaultPrevented
        });
    };
    LogController.blessCount = 0;
    LogController.actionLog = [];
    return LogController;
}(Controller));
export { LogController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nX2NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2xvZ19jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFXOUM7SUFBbUMsaUNBQVU7SUFBN0M7UUFBQSxxRUF1REM7UUFwREMscUJBQWUsR0FBRyxDQUFDLENBQUE7UUFDbkIsa0JBQVksR0FBRyxDQUFDLENBQUE7UUFDaEIscUJBQWUsR0FBRyxDQUFDLENBQUE7O0lBa0RyQixDQUFDO0lBaERRLG1CQUFLLEdBQVo7UUFDRSxPQUFNLEtBQUssV0FBRSxDQUFBO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCwyQkFBRyxHQUFILFVBQUksS0FBWTtRQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssS0FBWTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssS0FBWTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssS0FBWTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2hDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFBO0lBQ2xDLENBQUM7SUFFRCxzQkFBSSxvQ0FBUzthQUFiO1lBQ0UsT0FBUSxJQUFJLENBQUMsV0FBb0MsQ0FBQyxTQUFTLENBQUE7UUFDN0QsQ0FBQzs7O09BQUE7SUFFTyxvQ0FBWSxHQUFwQixVQUFxQixJQUFZLEVBQUUsS0FBWTtRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUNsQixJQUFJLE1BQUE7WUFDSixVQUFVLEVBQUUsSUFBSTtZQUNoQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ3JCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1NBQ3pDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFyRE0sd0JBQVUsR0FBRyxDQUFDLENBQUE7SUFDZCx1QkFBUyxHQUFxQixFQUFFLENBQUE7SUFxRHpDLG9CQUFDO0NBQUEsQUF2REQsQ0FBbUMsVUFBVSxHQXVENUM7U0F2RFksYUFBYSJ9