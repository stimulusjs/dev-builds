import { ValueListObserver } from "../../src/value_list_observer";
import { ObserverTestCase } from "../observer_test_case";
export default class ValueListObserverTests extends ObserverTestCase {
    constructor() {
        super(...arguments);
        this.attributeName = "data-test";
        this.fixtureHTML = `<div ${this.attributeName}="one"></div>`;
        this.observer = new ValueListObserver(this.fixtureElement, this.attributeName, this);
        this.lastValueId = 0;
    }
    async "test elementMatchedValue"() {
        this.assert.deepEqual(this.calls, [
            ["elementMatchedValue", this.element, 1, "one"]
        ]);
    }
    async "test adding a token to the right"() {
        this.valueString = "one two";
        await this.nextFrame;
        this.assert.deepEqual(this.testCalls, [
            ["elementMatchedValue", this.element, 2, "two"]
        ]);
    }
    async "test adding a token to the left"() {
        this.valueString = "two one";
        await this.nextFrame;
        this.assert.deepEqual(this.testCalls, [
            ["elementUnmatchedValue", this.element, 1, "one"],
            ["elementMatchedValue", this.element, 2, "two"],
            ["elementMatchedValue", this.element, 3, "one"]
        ]);
    }
    async "test removing a token from the right"() {
        this.valueString = "one two";
        await this.nextFrame;
        this.valueString = "one";
        await this.nextFrame;
        this.assert.deepEqual(this.testCalls, [
            ["elementMatchedValue", this.element, 2, "two"],
            ["elementUnmatchedValue", this.element, 2, "two"]
        ]);
    }
    async "test removing a token from the left"() {
        this.valueString = "one two";
        await this.nextFrame;
        this.valueString = "two";
        await this.nextFrame;
        this.assert.deepEqual(this.testCalls, [
            ["elementMatchedValue", this.element, 2, "two"],
            ["elementUnmatchedValue", this.element, 1, "one"],
            ["elementUnmatchedValue", this.element, 2, "two"],
            ["elementMatchedValue", this.element, 3, "two"]
        ]);
    }
    async "test removing the only token"() {
        this.valueString = "";
        await this.nextFrame;
        this.assert.deepEqual(this.testCalls, [
            ["elementUnmatchedValue", this.element, 1, "one"]
        ]);
    }
    async "test removing and re-adding a token produces a new value"() {
        this.valueString = "";
        await this.nextFrame;
        this.valueString = "one";
        await this.nextFrame;
        this.assert.deepEqual(this.testCalls, [
            ["elementUnmatchedValue", this.element, 1, "one"],
            ["elementMatchedValue", this.element, 2, "one"]
        ]);
    }
    get element() {
        return this.findElement("div");
    }
    set valueString(value) {
        this.element.setAttribute(this.attributeName, value);
    }
    // Value observer delegate
    parseValueForToken(token) {
        return { id: ++this.lastValueId, token };
    }
    elementMatchedValue(element, value) {
        this.recordCall("elementMatchedValue", element, value.id, value.token.content);
    }
    elementUnmatchedValue(element, value) {
        this.recordCall("elementUnmatchedValue", element, value.id, value.token.content);
    }
}
//# sourceMappingURL=value_list_observer_tests.js.map