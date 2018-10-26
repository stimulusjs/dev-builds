import { LogController } from "../log_controller";
import { LogControllerTestCase } from "../log_controller_test_case";
export default class ES6Tests extends LogControllerTestCase {
    constructor() {
        super(...arguments);
        this.fixtureHTML = `
    <div data-controller="es6">
      <button data-action="es6#log">Log</button>
    </div>
  `;
        this.fixtureScript = `
    _stimulus.application.register("es6", class extends _stimulus.LogController {})
  `;
    }
    static shouldSkipTest(testName) {
        return !(supportsES6Classes() && supportsReflectConstruct());
    }
    async renderFixture() {
        window["_stimulus"] = { LogController, application: this.application };
        await super.renderFixture();
        const scriptElement = document.createElement("script");
        scriptElement.textContent = this.fixtureScript;
        this.fixtureElement.appendChild(scriptElement);
        await this.nextFrame;
    }
    async teardown() {
        this.application.unload("test");
        delete window["_stimulus"];
    }
    async "test ES6 controller classes"() {
        await this.triggerEvent("button", "click");
        this.assertActions({ eventType: "click", currentTarget: this.findElement("button") });
    }
}
function supportsES6Classes() {
    try {
        return eval("(class {}), true");
    }
    catch (error) {
        return false;
    }
}
function supportsReflectConstruct() {
    return typeof Reflect == "object" && typeof Reflect.construct == "function";
}
//# sourceMappingURL=es6_tests.js.map