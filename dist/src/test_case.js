export class TestCase {
    static defineModule(moduleName = this.name, qUnit = QUnit) {
        qUnit.module(moduleName, hooks => {
            this.manifest.forEach(([type, name]) => {
                type = this.shouldSkipTest(name) ? "skip" : type;
                const method = qUnit[type];
                const test = this.getTest(name);
                method.call(qUnit, name, test);
            });
        });
    }
    static getTest(testName) {
        return async (assert) => this.runTest(testName, assert);
    }
    static runTest(testName, assert) {
        const testCase = new this(assert);
        return testCase.runTest(testName);
    }
    static shouldSkipTest(testName) {
        return false;
    }
    static get manifest() {
        return this.testPropertyNames.map(name => [name.slice(0, 4), name.slice(5)]);
    }
    static get testNames() {
        return this.manifest.map(([type, name]) => name);
    }
    static get testPropertyNames() {
        return Object.keys(this.prototype).filter(name => name.match(/^(skip|test|todo) /));
    }
    constructor(assert) {
        this.assert = assert;
    }
    async runTest(testName) {
        try {
            await this.setup();
            await this.runTestBody(testName);
        }
        finally {
            await this.teardown();
        }
    }
    async runTestBody(testName) {
        const testCase = this[`test ${testName}`] || this[`todo ${testName}`];
        if (typeof testCase == "function") {
            return testCase.call(this);
        }
        else {
            return Promise.reject(`test not found: "${testName}"`);
        }
    }
    async setup() {
        // Override this method in your subclass to prepare your test environment
    }
    async teardown() {
        // Override this method in your subclass to clean up your test environment
    }
}
//# sourceMappingURL=test_case.js.map