import { Application } from "../src/application";
import { DOMTestCase } from "@stimulus/test";
import { defaultSchema } from "../src/schema";
class TestApplication extends Application {
    handleError(error, message, detail) {
        throw error;
    }
}
export class ApplicationTestCase extends DOMTestCase {
    constructor() {
        super(...arguments);
        this.schema = defaultSchema;
        this.application = new TestApplication(this.fixtureElement, this.schema);
    }
    async runTest(testName) {
        try {
            this.setupApplication();
            this.application.start();
            await super.runTest(testName);
        }
        finally {
            this.application.stop();
        }
    }
    setupApplication() {
        // Override in subclasses to register controllers
    }
}
//# sourceMappingURL=application_test_case.js.map