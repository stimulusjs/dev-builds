import { dasherize } from "./string_helpers";
var DataMap = /** @class */ (function () {
    function DataMap(scope) {
        this.scope = scope;
    }
    Object.defineProperty(DataMap.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMap.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    DataMap.prototype.get = function (key) {
        key = this.getAttributeNameForKey(key);
        return this.element.getAttribute(key);
    };
    DataMap.prototype.set = function (key, value) {
        key = this.getAttributeNameForKey(key);
        this.element.setAttribute(key, value);
        return this.get(key);
    };
    DataMap.prototype.has = function (key) {
        key = this.getAttributeNameForKey(key);
        return this.element.hasAttribute(key);
    };
    DataMap.prototype.delete = function (key) {
        if (this.has(key)) {
            key = this.getAttributeNameForKey(key);
            this.element.removeAttribute(key);
            return true;
        }
        else {
            return false;
        }
    };
    DataMap.prototype.getAttributeNameForKey = function (key) {
        return "data-" + this.identifier + "-" + dasherize(key);
    };
    return DataMap;
}());
export { DataMap };
//# sourceMappingURL=data_map.js.map