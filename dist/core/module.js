import { Context } from "./context";
import { blessDefinition } from "./definition";
var Module = /** @class */ (function () {
    function Module(application, definition) {
        this.application = application;
        this.definition = blessDefinition(definition);
        this.contextsByScope = new WeakMap;
        this.connectedContexts = new Set;
    }
    Object.defineProperty(Module.prototype, "identifier", {
        get: function () {
            return this.definition.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "controllerConstructor", {
        get: function () {
            return this.definition.controllerConstructor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "contexts", {
        get: function () {
            return Array.from(this.connectedContexts);
        },
        enumerable: true,
        configurable: true
    });
    Module.prototype.connectContextForScope = function (scope) {
        var context = this.fetchContextForScope(scope);
        this.connectedContexts.add(context);
        context.connect();
    };
    Module.prototype.disconnectContextForScope = function (scope) {
        var context = this.contextsByScope.get(scope);
        if (context) {
            this.connectedContexts.delete(context);
            context.disconnect();
        }
    };
    Module.prototype.fetchContextForScope = function (scope) {
        var context = this.contextsByScope.get(scope);
        if (!context) {
            context = new Context(this, scope);
            this.contextsByScope.set(scope, context);
        }
        return context;
    };
    return Module;
}());
export { Module };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvcmUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFFbkMsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUcxRDtJQU1FLGdCQUFZLFdBQXdCLEVBQUUsVUFBc0I7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQTtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLENBQUE7SUFDbEMsQ0FBQztJQUVELHNCQUFJLDhCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFBO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQXFCO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFBO1FBQzlDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQVE7YUFBWjtZQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHVDQUFzQixHQUF0QixVQUF1QixLQUFZO1FBQ2pDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsMENBQXlCLEdBQXpCLFVBQTBCLEtBQVk7UUFDcEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0MsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUNyQjtJQUNILENBQUM7SUFFTyxxQ0FBb0IsR0FBNUIsVUFBNkIsS0FBWTtRQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDekM7UUFDRCxPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0MifQ==