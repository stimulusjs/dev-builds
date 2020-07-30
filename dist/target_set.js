import { attributeValueContainsToken } from "./selectors";
var TargetSet = /** @class */ (function () {
    function TargetSet(scope) {
        this.scope = scope;
    }
    Object.defineProperty(TargetSet.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "schema", {
        get: function () {
            return this.scope.schema;
        },
        enumerable: true,
        configurable: true
    });
    TargetSet.prototype.has = function (targetName) {
        return this.find(targetName) != null;
    };
    TargetSet.prototype.find = function () {
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        var selector = this.getSelectorForTargetNames(targetNames);
        return this.scope.findElement(selector);
    };
    TargetSet.prototype.findAll = function () {
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        var selector = this.getSelectorForTargetNames(targetNames);
        return this.scope.findAllElements(selector);
    };
    TargetSet.prototype.getSelectorForTargetNames = function (targetNames) {
        var _this = this;
        return targetNames.map(function (targetName) { return _this.getSelectorForTargetName(targetName); }).join(", ");
    };
    TargetSet.prototype.getSelectorForTargetName = function (targetName) {
        var targetDescriptor = this.identifier + "." + targetName;
        return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    };
    return TargetSet;
}());
export { TargetSet };
//# sourceMappingURL=target_set.js.map