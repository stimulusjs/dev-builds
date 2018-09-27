import { StringMapObserver } from "@stimulus/mutation-observers";
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
function camelize(value) {
    return value.replace(/(?:[_-])([a-z])/g, function (_, char) { return char.toUpperCase(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV9tYXBfb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YV9tYXBfb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUE2QixNQUFNLDhCQUE4QixDQUFBO0FBRTNGO0lBS0UseUJBQVksT0FBZ0IsRUFBRSxRQUFhO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQUVELHNCQUFJLG9DQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCwrQkFBK0I7SUFFL0IscURBQTJCLEdBQTNCLFVBQTRCLGFBQXFCO1FBQy9DLElBQUksYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBTSxNQUFJLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3BELE9BQU8sUUFBUSxDQUFDLE1BQUksQ0FBQyxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELCtDQUFxQixHQUFyQixVQUFzQixLQUFvQixFQUFFLEdBQVc7UUFDckQsSUFBTSxVQUFVLEdBQU0sR0FBRyxZQUFTLENBQUE7UUFDbEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxJQUFJLE9BQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTtZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbEM7SUFDSCxDQUFDO0lBRUQsc0JBQVksbUNBQU07YUFBbEI7WUFDRSxPQUFPLFVBQVEsSUFBSSxDQUFDLFVBQVUsTUFBRyxDQUFBO1FBQ25DLENBQUM7OztPQUFBO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDOztBQUVELGtCQUFrQixLQUFhO0lBQzdCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQTtBQUMzRSxDQUFDIn0=