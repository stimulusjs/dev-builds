import { ValueListObserver } from "@stimulus/mutation-observers";
var ScopeObserver = /** @class */ (function () {
    function ScopeObserver(element, schema, delegate) {
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap;
        this.scopeReferenceCounts = new WeakMap;
    }
    ScopeObserver.prototype.start = function () {
        this.valueListObserver.start();
    };
    ScopeObserver.prototype.stop = function () {
        this.valueListObserver.stop();
    };
    Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
        get: function () {
            return this.schema.controllerAttribute;
        },
        enumerable: true,
        configurable: true
    });
    // Value observer delegate
    /** @hidden */
    ScopeObserver.prototype.parseValueForToken = function (token) {
        var element = token.element, identifier = token.content;
        var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
        var scope = scopesByIdentifier.get(identifier);
        if (!scope) {
            scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
            scopesByIdentifier.set(identifier, scope);
        }
        return scope;
    };
    /** @hidden */
    ScopeObserver.prototype.elementMatchedValue = function (element, value) {
        var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
        this.scopeReferenceCounts.set(value, referenceCount);
        if (referenceCount == 1) {
            this.delegate.scopeConnected(value);
        }
    };
    /** @hidden */
    ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
        var referenceCount = this.scopeReferenceCounts.get(value);
        if (referenceCount) {
            this.scopeReferenceCounts.set(value, referenceCount - 1);
            if (referenceCount == 1) {
                this.delegate.scopeDisconnected(value);
            }
        }
    };
    ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
        var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
        if (!scopesByIdentifier) {
            scopesByIdentifier = new Map;
            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
        }
        return scopesByIdentifier;
    };
    return ScopeObserver;
}());
export { ScopeObserver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGVfb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NvcGVfb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFTLGlCQUFpQixFQUE2QixNQUFNLDhCQUE4QixDQUFBO0FBUWxHO0lBUUUsdUJBQVksT0FBZ0IsRUFBRSxNQUFjLEVBQUUsUUFBK0I7UUFDM0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDNUYsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksT0FBTyxDQUFBO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sQ0FBQTtJQUN6QyxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsc0JBQUksOENBQW1CO2FBQXZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFBO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsMEJBQTBCO0lBRTFCLGNBQWM7SUFDZCwwQ0FBa0IsR0FBbEIsVUFBbUIsS0FBWTtRQUNyQixJQUFBLHVCQUFPLEVBQUUsMEJBQW1CLENBQVU7UUFDOUMsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUNBQWlDLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFMUUsSUFBSSxLQUFLLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7WUFDN0Usa0JBQWtCLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUMxQztRQUVELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVELGNBQWM7SUFDZCwyQ0FBbUIsR0FBbkIsVUFBb0IsT0FBZ0IsRUFBRSxLQUFZO1FBQ2hELElBQU0sY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUE7UUFDcEQsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELGNBQWM7SUFDZCw2Q0FBcUIsR0FBckIsVUFBc0IsT0FBZ0IsRUFBRSxLQUFZO1FBQ2xELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0QsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ3hELElBQUksY0FBYyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUN2QztTQUNGO0lBQ0gsQ0FBQztJQUVPLHlEQUFpQyxHQUF6QyxVQUEwQyxPQUFnQjtRQUN4RCxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3ZCLGtCQUFrQixHQUFHLElBQUksR0FBRyxDQUFBO1lBQzVCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUE7U0FDbEU7UUFDRCxPQUFPLGtCQUFrQixDQUFBO0lBQzNCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUMifQ==