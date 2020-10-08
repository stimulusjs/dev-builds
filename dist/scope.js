var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { DataMap } from "./data_map";
import { TargetSet } from "./target_set";
import { attributeValueContainsToken } from "./selectors";
var Scope = /** @class */ (function () {
    function Scope(schema, identifier, element) {
        var _this = this;
        this.containsElement = function (element) {
            return element.closest(_this.controllerSelector) === _this.element;
        };
        this.schema = schema;
        this.identifier = identifier;
        this.element = element;
        this.targets = new TargetSet(this);
        this.data = new DataMap(this);
    }
    Scope.prototype.findElement = function (selector) {
        return this.element.matches(selector)
            ? this.element
            : this.queryElements(selector).find(this.containsElement);
    };
    Scope.prototype.findAllElements = function (selector) {
        return __spreadArrays(this.element.matches(selector) ? [this.element] : [], this.queryElements(selector).filter(this.containsElement));
    };
    Scope.prototype.queryElements = function (selector) {
        return Array.from(this.element.querySelectorAll(selector));
    };
    Object.defineProperty(Scope.prototype, "controllerSelector", {
        get: function () {
            return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
        },
        enumerable: false,
        configurable: true
    });
    return Scope;
}());
export { Scope };
//# sourceMappingURL=scope.js.map