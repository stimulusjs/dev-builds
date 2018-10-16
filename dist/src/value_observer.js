var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { StringMapObserver } from "@stimulus/mutation-observers";
var ValueObserver = /** @class */ (function () {
    function ValueObserver(context, receiver) {
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
        this.keysByAttributeName = this.getKeysByAttributeName();
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
        return this.keysByAttributeName[attributeName];
    };
    ValueObserver.prototype.stringMapValueChanged = function (attributeValue, key) {
        var methodName = key + "Changed";
        var method = this.receiver[methodName];
        if (typeof method == "function") {
            var value = this.receiver[key];
            method.call(this.receiver, value);
        }
    };
    ValueObserver.prototype.getKeysByAttributeName = function () {
        var _this = this;
        return Object.keys(this.valueAttributeMap).reduce(function (keys, attributeName) {
            var _a;
            return __assign({}, keys, (_a = {}, _a[_this.valueAttributeMap[attributeName]] = attributeName, _a));
        }, {});
    };
    Object.defineProperty(ValueObserver.prototype, "valueAttributeMap", {
        get: function () {
            return this.controller.valueAttributeMap;
        },
        enumerable: true,
        configurable: true
    });
    return ValueObserver;
}());
export { ValueObserver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsdWVfb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQTZCLE1BQU0sOEJBQThCLENBQUE7QUFFM0Y7SUFNRSx1QkFBWSxPQUFnQixFQUFFLFFBQWE7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUE7SUFDMUQsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQUVELHNCQUFJLGtDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCwrQkFBK0I7SUFFL0IsbURBQTJCLEdBQTNCLFVBQTRCLGFBQXFCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCw2Q0FBcUIsR0FBckIsVUFBc0IsY0FBNkIsRUFBRSxHQUFXO1FBQzlELElBQU0sVUFBVSxHQUFNLEdBQUcsWUFBUyxDQUFBO1FBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDeEMsSUFBSSxPQUFPLE1BQU0sSUFBSSxVQUFVLEVBQUU7WUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbEM7SUFDSCxDQUFDO0lBRU8sOENBQXNCLEdBQTlCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLGFBQWE7O1lBQ3BFLG9CQUFZLElBQUksZUFBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUcsYUFBYSxPQUFFO1FBQzVFLENBQUMsRUFBRSxFQUF5QyxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUVELHNCQUFZLDRDQUFpQjthQUE3QjtZQUNFLE9BQVEsSUFBSSxDQUFDLFVBQWtCLENBQUMsaUJBQWlCLENBQUE7UUFDbkQsQ0FBQzs7O09BQUE7SUFDSCxvQkFBQztBQUFELENBQUMsQUFyREQsSUFxREMifQ==