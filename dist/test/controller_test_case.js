import { ApplicationTestCase } from "./application_test_case";
export class ControllerTestCase extends ApplicationTestCase {
    constructor() {
        super(...arguments);
        this.identifier = "test";
        this.fixtureHTML = `<div data-controller="${this.identifiers.join(" ")}">`;
    }
    setupApplication() {
        this.identifiers.forEach(identifier => {
            this.application.register(identifier, this.controllerConstructor);
        });
    }
    get controller() {
        const controller = this.controllers[0];
        if (controller) {
            return controller;
        }
        else {
            throw new Error("no controller connected");
        }
    }
    get identifiers() {
        if (typeof this.identifier == "string") {
            return [this.identifier];
        }
        else {
            return this.identifier;
        }
    }
    get controllers() {
        return this.application.controllers;
    }
}
//# sourceMappingURL=controller_test_case.js.map