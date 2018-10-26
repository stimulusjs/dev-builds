import { DOMTestCase } from "@stimulus/test";
export class ObserverTestCase extends DOMTestCase {
    constructor() {
        super(...arguments);
        this.calls = [];
        this.setupCallCount = 0;
    }
    async setup() {
        this.observer.start();
        await this.nextFrame;
        this.setupCallCount = this.calls.length;
    }
    async teardown() {
        this.observer.stop();
    }
    get testCalls() {
        return this.calls.slice(this.setupCallCount);
    }
    recordCall(methodName, ...args) {
        this.calls.push([methodName, ...args]);
    }
}
//# sourceMappingURL=observer_test_case.js.map