import { TokenListObserver } from "./token_list_observer";
var ValueListObserver = /** @class */ (function () {
    function ValueListObserver(element, attributeName, delegate) {
        this.tokenListObserver = new TokenListObserver(element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap;
        this.valuesByTokenByElement = new WeakMap;
    }
    Object.defineProperty(ValueListObserver.prototype, "started", {
        get: function () {
            return this.tokenListObserver.started;
        },
        enumerable: true,
        configurable: true
    });
    ValueListObserver.prototype.start = function () {
        this.tokenListObserver.start();
    };
    ValueListObserver.prototype.stop = function () {
        this.tokenListObserver.stop();
    };
    ValueListObserver.prototype.refresh = function () {
        this.tokenListObserver.refresh();
    };
    Object.defineProperty(ValueListObserver.prototype, "element", {
        get: function () {
            return this.tokenListObserver.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueListObserver.prototype, "attributeName", {
        get: function () {
            return this.tokenListObserver.attributeName;
        },
        enumerable: true,
        configurable: true
    });
    ValueListObserver.prototype.tokenMatched = function (token) {
        var element = token.element;
        var value = this.fetchParseResultForToken(token).value;
        if (value) {
            this.fetchValuesByTokenForElement(element).set(token, value);
            this.delegate.elementMatchedValue(element, value);
        }
    };
    ValueListObserver.prototype.tokenUnmatched = function (token) {
        var element = token.element;
        var value = this.fetchParseResultForToken(token).value;
        if (value) {
            this.fetchValuesByTokenForElement(element).delete(token);
            this.delegate.elementUnmatchedValue(element, value);
        }
    };
    ValueListObserver.prototype.fetchParseResultForToken = function (token) {
        var parseResult = this.parseResultsByToken.get(token);
        if (!parseResult) {
            parseResult = this.parseToken(token);
            this.parseResultsByToken.set(token, parseResult);
        }
        return parseResult;
    };
    ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
        var valuesByToken = this.valuesByTokenByElement.get(element);
        if (!valuesByToken) {
            valuesByToken = new Map;
            this.valuesByTokenByElement.set(element, valuesByToken);
        }
        return valuesByToken;
    };
    ValueListObserver.prototype.parseToken = function (token) {
        try {
            var value = this.delegate.parseValueForToken(token);
            return { value: value };
        }
        catch (error) {
            return { error: error };
        }
    };
    return ValueListObserver;
}());
export { ValueListObserver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfbGlzdF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tdXRhdGlvbi1vYnNlcnZlcnMvdmFsdWVfbGlzdF9vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVMsaUJBQWlCLEVBQTZCLE1BQU0sdUJBQXVCLENBQUE7QUFhM0Y7SUFNRSwyQkFBWSxPQUFnQixFQUFFLGFBQXFCLEVBQUUsUUFBc0M7UUFDekYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxPQUFPLENBQUE7UUFDdEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksT0FBTyxDQUFBO0lBQzNDLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFBO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsd0NBQVksR0FBWixVQUFhLEtBQVk7UUFDZixJQUFBLHVCQUFPLENBQVU7UUFDakIsSUFBQSxrREFBSyxDQUF5QztRQUN0RCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ2xEO0lBQ0gsQ0FBQztJQUVELDBDQUFjLEdBQWQsVUFBZSxLQUFZO1FBQ2pCLElBQUEsdUJBQU8sQ0FBVTtRQUNqQixJQUFBLGtEQUFLLENBQXlDO1FBQ3RELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNwRDtJQUNILENBQUM7SUFFTyxvREFBd0IsR0FBaEMsVUFBaUMsS0FBWTtRQUMzQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUE7U0FDakQ7UUFDRCxPQUFPLFdBQVcsQ0FBQTtJQUNwQixDQUFDO0lBRU8sd0RBQTRCLEdBQXBDLFVBQXFDLE9BQWdCO1FBQ25ELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUE7WUFDdkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7U0FDeEQ7UUFDRCxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0lBRU8sc0NBQVUsR0FBbEIsVUFBbUIsS0FBWTtRQUM3QixJQUFJO1lBQ0YsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNyRCxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQTtTQUNqQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUE7U0FDakI7SUFDSCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBakZELElBaUZDIn0=