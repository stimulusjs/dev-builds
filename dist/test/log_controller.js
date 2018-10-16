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
    LogController.actionLog = [];
    return LogController;
}(Controller));
export { LogController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nX2NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2xvZ19jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFXOUM7SUFBbUMsaUNBQVU7SUFBN0M7UUFBQSxxRUFpREM7UUEvQ0MscUJBQWUsR0FBRyxDQUFDLENBQUE7UUFDbkIsa0JBQVksR0FBRyxDQUFDLENBQUE7UUFDaEIscUJBQWUsR0FBRyxDQUFDLENBQUE7O0lBNkNyQixDQUFDO0lBM0NDLGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxLQUFZO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxLQUFZO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxLQUFZO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxLQUFZO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDaEMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUE7SUFDbEMsQ0FBQztJQUVELHNCQUFJLG9DQUFTO2FBQWI7WUFDRSxPQUFRLElBQUksQ0FBQyxXQUFvQyxDQUFDLFNBQVMsQ0FBQTtRQUM3RCxDQUFDOzs7T0FBQTtJQUVPLG9DQUFZLEdBQXBCLFVBQXFCLElBQVksRUFBRSxLQUFZO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2xCLElBQUksTUFBQTtZQUNKLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDckIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7U0FDekMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQS9DTSx1QkFBUyxHQUFxQixFQUFFLENBQUE7SUFnRHpDLG9CQUFDO0NBQUEsQUFqREQsQ0FBbUMsVUFBVSxHQWlENUM7U0FqRFksYUFBYSJ9