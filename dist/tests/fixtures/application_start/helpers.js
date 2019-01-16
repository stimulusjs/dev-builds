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
import { Application, Controller } from "../../../core";
export function startApplication() {
    var startState = document.readyState;
    var PostMessageController = /** @class */ (function (_super) {
        __extends(PostMessageController, _super);
        function PostMessageController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PostMessageController.prototype.connect = function () {
            var connectState = document.readyState;
            var targetCount = this.itemTargets.length;
            var message = JSON.stringify({ startState: startState, connectState: connectState, targetCount: targetCount });
            parent.postMessage(message, location.origin);
        };
        PostMessageController.targets = ["item"];
        return PostMessageController;
    }(Controller));
    var application = Application.start();
    application.register("a", PostMessageController);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0cy9maXh0dXJlcy9hcHBsaWNhdGlvbl9zdGFydC9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUV2RCxNQUFNLFVBQVUsZ0JBQWdCO0lBQzlCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUE7SUFFdEM7UUFBb0MseUNBQVU7UUFBOUM7O1FBV0EsQ0FBQztRQU5DLHVDQUFPLEdBQVA7WUFDRSxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFBO1lBQ3hDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFBO1lBQzNDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLFlBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLENBQUE7WUFDekUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlDLENBQUM7UUFQTSw2QkFBTyxHQUFHLENBQUUsTUFBTSxDQUFFLENBQUE7UUFRN0IsNEJBQUM7S0FBQSxBQVhELENBQW9DLFVBQVUsR0FXN0M7SUFFRCxJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdkMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQTtBQUNsRCxDQUFDIn0=