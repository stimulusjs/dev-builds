import { Module } from "./module";
import { Multimap } from "@stimulus/multimap";
import { ScopeObserver } from "./scope_observer";
var Router = /** @class */ (function () {
    function Router(application) {
        this.application = application;
        this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
        this.scopesByIdentifier = new Multimap;
        this.modulesByIdentifier = new Map;
    }
    Object.defineProperty(Router.prototype, "element", {
        get: function () {
            return this.application.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "schema", {
        get: function () {
            return this.application.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "controllerAttribute", {
        get: function () {
            return this.schema.controllerAttribute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "modules", {
        get: function () {
            return Array.from(this.modulesByIdentifier.values());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "contexts", {
        get: function () {
            return this.modules.reduce(function (contexts, module) { return contexts.concat(module.contexts); }, []);
        },
        enumerable: true,
        configurable: true
    });
    Router.prototype.start = function () {
        this.scopeObserver.start();
    };
    Router.prototype.stop = function () {
        this.scopeObserver.stop();
    };
    Router.prototype.loadDefinition = function (definition) {
        this.unloadIdentifier(definition.identifier);
        var module = new Module(this.application, definition);
        this.connectModule(module);
    };
    Router.prototype.unloadIdentifier = function (identifier) {
        var module = this.modulesByIdentifier.get(identifier);
        if (module) {
            this.disconnectModule(module);
        }
    };
    Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
        var module = this.modulesByIdentifier.get(identifier);
        if (module) {
            return module.contexts.find(function (context) { return context.element == element; });
        }
    };
    // Error handler delegate
    /** @hidden */
    Router.prototype.handleError = function (error, message, detail) {
        this.application.handleError(error, message, detail);
    };
    // Scope observer delegate
    /** @hidden */
    Router.prototype.scopeConnected = function (scope) {
        this.scopesByIdentifier.add(scope.identifier, scope);
        var module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.connectContextForScope(scope);
        }
    };
    /** @hidden */
    Router.prototype.scopeDisconnected = function (scope) {
        this.scopesByIdentifier.delete(scope.identifier, scope);
        var module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.disconnectContextForScope(scope);
        }
    };
    // Modules
    Router.prototype.connectModule = function (module) {
        this.modulesByIdentifier.set(module.identifier, module);
        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach(function (scope) { return module.connectContextForScope(scope); });
    };
    Router.prototype.disconnectModule = function (module) {
        this.modulesByIdentifier.delete(module.identifier);
        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach(function (scope) { return module.disconnectContextForScope(scope); });
    };
    return Router;
}());
export { Router };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvcmUvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBRzdDLE9BQU8sRUFBRSxhQUFhLEVBQXlCLE1BQU0sa0JBQWtCLENBQUE7QUFFdkU7SUFNRSxnQkFBWSxXQUF3QjtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUE7UUFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksR0FBRyxDQUFBO0lBQ3BDLENBQUM7SUFFRCxzQkFBSSwyQkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQTtRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBCQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQW1CO2FBQXZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFBO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQU87YUFBWDtZQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUN0RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFB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