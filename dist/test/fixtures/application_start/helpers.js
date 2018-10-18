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
import { Application } from "../../../src/application";
import { Controller } from "../../../src/controller";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QvZml4dHVyZXMvYXBwbGljYXRpb25fc3RhcnQvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFBO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUVwRCxNQUFNO0lBQ0osSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQTtJQUV0QztRQUFvQyx5Q0FBVTtRQUE5Qzs7UUFXQSxDQUFDO1FBTkMsdUNBQU8sR0FBUDtZQUNFLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUE7WUFDeEMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUE7WUFDM0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsWUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQTtZQUN6RSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDOUMsQ0FBQztRQVBNLDZCQUFPLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQTtRQVE3Qiw0QkFBQztLQUFBLEFBWEQsQ0FBb0MsVUFBVSxHQVc3QztJQUVELElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2QyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xELENBQUMifQ==