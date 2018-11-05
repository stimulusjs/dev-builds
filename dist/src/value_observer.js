import { StringMapObserver } from "@stimulus/mutation-observers";
var ValueObserver = /** @class */ (function () {
    function ValueObserver(context, receiver) {
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
        this.valueDescriptorMap = this.controller.valueDescriptorMap;
        this.invokeChangedCallbacksForDefaultValues();
    }
    ValueObserver.prototype.start = function () {
        this.stringMapObserver.start();
    };
    ValueObserver.prototype.stop = function () {
        this.stringMapObserver.stop();
    };
    Object.defineProperty(ValueObserver.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueObserver.prototype, "controller", {
        get: function () {
            return this.context.controller;
        },
        enumerable: true,
        configurable: true
    });
    // String map observer delegate
    ValueObserver.prototype.getStringMapKeyForAttribute = function (attributeName) {
        if (attributeName in this.valueDescriptorMap) {
            return this.valueDescriptorMap[attributeName].name;
        }
    };
    ValueObserver.prototype.stringMapValueChanged = function (attributeValue, name) {
        this.invokeChangedCallbackForValue(name);
    };
    ValueObserver.prototype.invokeChangedCallbacksForDefaultValues = function () {
        for (var _i = 0, _a = this.valueDescriptors; _i < _a.length; _i++) {
            var _b = _a[_i], name_1 = _b.name, key = _b.key, defaultValue = _b.defaultValue;
            if (defaultValue != undefined && !this.controller.data.has(key)) {
                this.invokeChangedCallbackForValue(name_1);
            }
        }
    };
    ValueObserver.prototype.invokeChangedCallbackForValue = function (name) {
        var methodName = name + "Changed";
        var method = this.receiver[methodName];
        if (typeof method == "function") {
            var value = this.receiver[name];
            method.call(this.receiver, value);
        }
    };
    Object.defineProperty(ValueObserver.prototype, "valueDescriptors", {
        get: function () {
            var valueDescriptorMap = this.valueDescriptorMap;
            return Object.keys(valueDescriptorMap).map(function (key) { return valueDescriptorMap[key]; });
        },
        enumerable: true,
        configurable: true
    });
    return ValueObserver;
}());
export { ValueObserver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsdWVfb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUE2QixNQUFNLDhCQUE4QixDQUFBO0FBRzNGO0lBTUUsdUJBQVksT0FBZ0IsRUFBRSxRQUFhO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLGtCQUFrQixHQUFJLElBQUksQ0FBQyxVQUFrQixDQUFDLGtCQUFrQixDQUFBO1FBQ3JFLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFBO0lBQy9DLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxzQkFBSSxrQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQTtRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsK0JBQStCO0lBRS9CLG1EQUEyQixHQUEzQixVQUE0QixhQUFxQjtRQUMvQyxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQ25EO0lBQ0gsQ0FBQztJQUVELDZDQUFxQixHQUFyQixVQUFzQixjQUE2QixFQUFFLElBQVk7UUFDL0QsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFTyw4REFBc0MsR0FBOUM7UUFDRSxLQUEwQyxVQUFxQixFQUFyQixLQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUF0RCxJQUFBLFdBQTJCLEVBQXpCLGdCQUFJLEVBQUUsWUFBRyxFQUFFLDhCQUFZO1lBQ2xDLElBQUksWUFBWSxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE1BQUksQ0FBQyxDQUFBO2FBQ3pDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8scURBQTZCLEdBQXJDLFVBQXNDLElBQVk7UUFDaEQsSUFBTSxVQUFVLEdBQU0sSUFBSSxZQUFTLENBQUE7UUFDbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxJQUFJLE9BQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTtZQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNsQztJQUNILENBQUM7SUFFRCxzQkFBWSwyQ0FBZ0I7YUFBNUI7WUFDVSxJQUFBLDRDQUFrQixDQUFTO1lBQ25DLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUE7UUFDNUUsQ0FBQzs7O09BQUE7SUFDSCxvQkFBQztBQUFELENBQUMsQUEvREQsSUErREMifQ==