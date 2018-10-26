import { DOMTestCase } from "@stimulus/test";
export default class ApplicationStartTests extends DOMTestCase {
    async setup() {
        this.iframe = document.createElement("iframe");
        this.iframe.src = "/base/packages/@stimulus/core/test/fixtures/application_start/index.html";
        this.fixtureElement.appendChild(this.iframe);
    }
    async "test starting an application when the document is loading"() {
        const message = await this.messageFromStartState("loading");
        this.assertIn(message.connectState, ["interactive", "complete"]);
        this.assert.equal(message.targetCount, 3);
    }
    async "test starting an application when the document is interactive"() {
        const message = await this.messageFromStartState("interactive");
        this.assertIn(message.connectState, ["interactive", "complete"]);
        this.assert.equal(message.targetCount, 3);
    }
    async "test starting an application when the document is complete"() {
        const message = await this.messageFromStartState("complete");
        this.assertIn(message.connectState, ["complete"]);
        this.assert.equal(message.targetCount, 3);
    }
    messageFromStartState(startState) {
        return new Promise(resolve => {
            const receiveMessage = (event) => {
                if (event.source == this.iframe.contentWindow) {
                    const message = JSON.parse(event.data);
                    if (message.startState == startState) {
                        removeEventListener("message", receiveMessage);
                        resolve(message);
                    }
                }
            };
            addEventListener("message", receiveMessage);
        });
    }
    assertIn(actual, expected) {
        const state = expected.indexOf(actual) > -1;
        const message = `${JSON.stringify(actual)} is not in ${JSON.stringify(expected)}`;
        this.assert.ok(state, message);
    }
}
//# sourceMappingURL=application_start_tests.js.map