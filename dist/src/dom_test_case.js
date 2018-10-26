import { TestCase } from "./test_case";
export class DOMTestCase extends TestCase {
    constructor() {
        super(...arguments);
        this.fixtureSelector = "#qunit-fixture";
        this.fixtureHTML = "";
    }
    async runTest(testName) {
        await this.renderFixture();
        await super.runTest(testName);
    }
    async renderFixture(fixtureHTML = this.fixtureHTML) {
        this.fixtureElement.innerHTML = fixtureHTML;
        return this.nextFrame;
    }
    get fixtureElement() {
        const element = document.querySelector(this.fixtureSelector);
        if (element) {
            return element;
        }
        else {
            throw new Error(`missing fixture element "${this.fixtureSelector}"`);
        }
    }
    async triggerEvent(selectorOrTarget, type, bubbles = true) {
        const eventTarget = typeof selectorOrTarget == "string" ? this.findElement(selectorOrTarget) : selectorOrTarget;
        const event = document.createEvent("Events");
        event.initEvent(type, bubbles, true);
        // IE <= 11 does not set `defaultPrevented` when `preventDefault()` is called on synthetic events
        event.preventDefault = function () {
            Object.defineProperty(this, "defaultPrevented", { get: () => true, configurable: true });
        };
        eventTarget.dispatchEvent(event);
        await this.nextFrame;
        return event;
    }
    findElement(selector) {
        const element = this.fixtureElement.querySelector(selector);
        if (element) {
            return element;
        }
        else {
            throw new Error(`couldn't find element "${selector}"`);
        }
    }
    findElements(...selectors) {
        return selectors.map(selector => this.findElement(selector));
    }
    get nextFrame() {
        return new Promise(resolve => requestAnimationFrame(resolve));
    }
}
//# sourceMappingURL=dom_test_case.js.map