import { defineTargetProperties } from "./target_properties";
export class Controller {
    constructor(context) {
        this.context = context;
    }
    static bless() {
        defineTargetProperties(this);
    }
    get application() {
        return this.context.application;
    }
    get scope() {
        return this.context.scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get targets() {
        return this.scope.targets;
    }
    get data() {
        return this.scope.data;
    }
    initialize() {
        // Override in your subclass to set up initial controller state
    }
    connect() {
        // Override in your subclass to respond when the controller is connected to the DOM
    }
    disconnect() {
        // Override in your subclass to respond when the controller is disconnected from the DOM
    }
}
Controller.targets = [];
//# sourceMappingURL=controller.js.map