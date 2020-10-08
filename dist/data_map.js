var DataMap = /** @class */ (function () {
    function DataMap(scope) {
        this.scope = scope;
    }
    Object.defineProperty(DataMap.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMap.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    DataMap.prototype.get = function (key) {
        var formattedKey = this.getFormattedKey(key);
        return this.element.getAttribute(formattedKey);
    };
    DataMap.prototype.set = function (key, value) {
        var formattedKey = this.getFormattedKey(key);
        this.element.setAttribute(formattedKey, value);
        return this.get(key);
    };
    DataMap.prototype.has = function (key) {
        var formattedKey = this.getFormattedKey(key);
        return this.element.hasAttribute(formattedKey);
    };
    DataMap.prototype.delete = function (key) {
        if (this.has(key)) {
            var formattedKey = this.getFormattedKey(key);
            this.element.removeAttribute(formattedKey);
            return true;
        }
        else {
            return false;
        }
    };
    DataMap.prototype.getFormattedKey = function (key) {
        return "data-" + this.identifier + "-" + dasherize(key);
    };
    return DataMap;
}());
export { DataMap };
function dasherize(value) {
    return value.replace(/([A-Z])/g, function (_, char) { return "-" + char.toLowerCase(); });
}
//# sourceMappingURL=data_map.js.map