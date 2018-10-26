import { Application } from "../../../src/application";
import { Controller } from "../../../src/controller";
export function startApplication() {
    const startState = document.readyState;
    class PostMessageController extends Controller {
        connect() {
            const connectState = document.readyState;
            const targetCount = this.itemTargets.length;
            const message = JSON.stringify({ startState, connectState, targetCount });
            parent.postMessage(message, location.origin);
        }
    }
    PostMessageController.targets = ["item"];
    const application = Application.start();
    application.register("a", PostMessageController);
}
//# sourceMappingURL=helpers.js.map