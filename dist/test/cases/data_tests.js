import { BareControllerTestCase } from "../bare_controller_test_case";
export default class DataTests extends BareControllerTestCase {
    constructor() {
        super(...arguments);
        this.fixtureHTML = `
    <div data-controller="${this.identifier}"
      data-${this.identifier}-alpha="hello world"
      data-${this.identifier}-beta-gamma="123">
    </div>
  `;
    }
    "test DataSet#get"() {
        this.assert.equal(this.controller.data.get("alpha"), "hello world");
        this.assert.equal(this.controller.data.get("betaGamma"), "123");
        this.assert.equal(this.controller.data.get("nonexistent"), null);
    }
    "test DataSet#set"() {
        this.controller.data.set("alpha", "ok");
        this.assert.equal(this.controller.data.get("alpha"), "ok");
        this.assert.equal(this.findElement("div").getAttribute(`data-${this.identifier}-alpha`), "ok");
    }
    "test DataSet#has"() {
        this.assert.ok(this.controller.data.has("alpha"));
        this.assert.ok(this.controller.data.has("betaGamma"));
        this.assert.notOk(this.controller.data.has("nonexistent"));
    }
    "test DataSet#delete"() {
        this.controller.data.delete("alpha");
        this.assert.equal(this.controller.data.get("alpha"), null);
        this.assert.notOk(this.controller.data.has("alpha"));
        this.assert.notOk(this.findElement("div").hasAttribute(`data-${this.identifier}-alpha`));
    }
}
//# sourceMappingURL=data_tests.js.map