import { defineTargetProperties } from "./target_properties";
var Controller = /** @class */ (function () {
    function Controller(context) {
        this.context = context;
    }
    Controller.bless = function () {
        defineTargetProperties(this);
    };
    Object.defineProperty(Controller.prototype, "application", {
        get: function () {
            return this.context.application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "targets", {
        get: function () {
            return this.scope.targets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: false,
        configurable: true
    });
    Controller.prototype.initialize = function () {
        // Override in your subclass to set up initial controller state
    };
    Controller.prototype.connect = function () {
        // Override in your subclass to respond when the controller is connected to the DOM
    };
    Controller.prototype.disconnect = function () {
        // Override in your subclass to respond when the controller is disconnected from the DOM
    };
    Controller.targets = [];
    return Controller;
}());
export { Controller };
//# sourceMappingURL=controller.js.map