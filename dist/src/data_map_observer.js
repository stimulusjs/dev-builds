import { StringMapObserver } from "@stimulus/mutation-observers";
import { camelize } from "./string_helpers";
var DataMapObserver = /** @class */ (function () {
    function DataMapObserver(context, receiver) {
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
    }
    DataMapObserver.prototype.start = function () {
        this.stringMapObserver.start();
    };
    DataMapObserver.prototype.stop = function () {
        this.stringMapObserver.stop();
    };
    Object.defineProperty(DataMapObserver.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMapObserver.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: true,
        configurable: true
    });
    // String map observer delegate
    DataMapObserver.prototype.getStringMapKeyForAttribute = function (attributeName) {
        if (attributeName.startsWith(this.prefix)) {
            var name_1 = attributeName.slice(this.prefix.length);
            return camelize(name_1);
        }
    };
    DataMapObserver.prototype.stringMapValueChanged = function (value, key) {
        var methodName = key + "Changed";
        var method = this.receiver[methodName];
        if (typeof method == "function") {
            method.call(this.receiver, value);
        }
    };
    Object.defineProperty(DataMapObserver.prototype, "prefix", {
        get: function () {
            return "data-" + this.identifier + "-";
        },
        enumerable: true,
        configurable: true
    });
    return DataMapObserver;
}());
export { DataMapObserver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV9tYXBfb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YV9tYXBfb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUE2QixNQUFNLDhCQUE4QixDQUFBO0FBQzNGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUUzQztJQUtFLHlCQUFZLE9BQWdCLEVBQUUsUUFBYTtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxzQkFBSSxvQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQTtRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsK0JBQStCO0lBRS9CLHFEQUEyQixHQUEzQixVQUE0QixhQUFxQjtRQUMvQyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLElBQU0sTUFBSSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNwRCxPQUFPLFFBQVEsQ0FBQyxNQUFJLENBQUMsQ0FBQTtTQUN0QjtJQUNILENBQUM7SUFFRCwrQ0FBcUIsR0FBckIsVUFBc0IsS0FBb0IsRUFBRSxHQUFXO1FBQ3JELElBQU0sVUFBVSxHQUFNLEdBQUcsWUFBUyxDQUFBO1FBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDeEMsSUFBSSxPQUFPLE1BQU0sSUFBSSxVQUFVLEVBQUU7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELHNCQUFZLG1DQUFNO2FBQWxCO1lBQ0UsT0FBTyxVQUFRLElBQUksQ0FBQyxVQUFVLE1BQUcsQ0FBQTtRQUNuQyxDQUFDOzs7T0FBQTtJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQyJ9