import { Controller } from "../src/controller";
export class LogController extends Controller {
    constructor() {
        super(...arguments);
        this.initializeCount = 0;
        this.connectCount = 0;
        this.disconnectCount = 0;
    }
    static bless() {
        super.bless();
        this.blessCount++;
    }
    initialize() {
        this.initializeCount++;
    }
    connect() {
        this.connectCount++;
    }
    disconnect() {
        this.disconnectCount++;
    }
    log(event) {
        this.recordAction("log", event);
    }
    log2(event) {
        this.recordAction("log2", event);
    }
    log3(event) {
        this.recordAction("log3", event);
    }
    stop(event) {
        this.recordAction("stop", event);
        event.stopImmediatePropagation();
    }
    get actionLog() {
        return this.constructor.actionLog;
    }
    recordAction(name, event) {
        this.actionLog.push({
            name,
            controller: this,
            identifier: this.identifier,
            eventType: event.type,
            currentTarget: event.currentTarget,
            defaultPrevented: event.defaultPrevented
        });
    }
}
LogController.blessCount = 0;
LogController.actionLog = [];
//# sourceMappingURL=log_controller.js.map