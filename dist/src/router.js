import { Module } from "./module";
import { Multimap } from "@stimulus/multimap";
import { Scope } from "./scope";
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
    Object.defineProperty(Router.prototype, "logger", {
        get: function () {
            return this.application.logger;
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
    Router.prototype.createScopeForElementAndIdentifier = function (element, identifier) {
        return new Scope(this.schema, element, identifier, this.logger);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFBO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQXlCLE1BQU0sa0JBQWtCLENBQUE7QUFFdkU7SUFNRSxnQkFBWSxXQUF3QjtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUE7UUFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksR0FBRyxDQUFBO0lBQ3BDLENBQUM7SUFFRCxzQkFBSSwyQkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQTtRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBCQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMEJBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBbUI7YUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUE7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBTzthQUFYO1lBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ3RELENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFRLEVBQUUsTUFBTSxJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQWhDLENBQWdDLEVBQUUsRUFBZSxDQUFDLENBQUE7UUFDckcsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRUQscUJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxVQUFzQjtRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzVDLElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsaUNBQWdCLEdBQWhCLFVBQWlCLFVBQWtCO1FBQ2pDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDOUI7SUFDSCxDQUFDO0lBRUQsa0RBQWlDLEdBQWpDLFVBQWtDLE9BQWdCLEVBQUUsVUFBa0I7UUFDcEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN2RCxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO1NBQ25FO0lBQ0gsQ0FBQztJQUVELHlCQUF5QjtJQUV6QixjQUFjO0lBQ2QsNEJBQVcsR0FBWCxVQUFZLEtBQVksRUFBRSxPQUFlLEVBQUUsTUFBVztRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFRCwwQkFBMEI7SUFFMUIsY0FBYztJQUNkLG1EQUFrQyxHQUFsQyxVQUFtQyxPQUFnQixFQUFFLFVBQWtCO1FBQ3JFLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBRUQsY0FBYztJQUNkLCtCQUFjLEdBQWQsVUFBZSxLQUFZO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNwRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM3RCxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNyQztJQUNILENBQUM7SUFFRCxjQUFjO0lBQ2Qsa0NBQWlCLEdBQWpCLFVBQWtCLEtBQVk7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3ZELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdELElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFVBQVU7SUFFRiw4QkFBYSxHQUFyQixVQUFzQixNQUFjO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN2RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN6RSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVPLGlDQUFnQixHQUF4QixVQUF5QixNQUFjO1FBQ3JDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2xELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxNQUFNLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUE5R0QsSUE4R0MifQ==