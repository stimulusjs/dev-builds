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
        var _this = this;
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        return targetNames.reduce(function (target, targetName) {
            return target
                || _this.findTarget(targetName)
                || _this.findLegacyTarget(targetName);
        }, undefined);
    };
    TargetSet.prototype.findAll = function () {
        var _this = this;
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        return targetNames.reduce(function (targets, targetName) { return targets.concat(_this.findAllTargets(targetName), _this.findAllLegacyTargets(targetName)); }, []);
    };
    TargetSet.prototype.findTarget = function (targetName) {
        var selector = this.getSelectorForTargetName(targetName);
        return this.scope.findElement(selector);
    };
    TargetSet.prototype.findAllTargets = function (targetName) {
        var selector = this.getSelectorForTargetName(targetName);
        return this.scope.findAllElements(selector);
    };
    TargetSet.prototype.getSelectorForTargetName = function (targetName) {
        var attributeName = "data-" + this.identifier + "-target";
        return attributeValueContainsToken(attributeName, targetName);
    };
    TargetSet.prototype.findLegacyTarget = function (targetName) {
        var selector = this.getLegacySelectorForTargetName(targetName);
        return this.scope.findElement(selector);
    };
    TargetSet.prototype.findAllLegacyTargets = function (targetName) {
        var selector = this.getLegacySelectorForTargetName(targetName);
        return this.scope.findAllElements(selector);
    };
    TargetSet.prototype.getLegacySelectorForTargetName = function (targetName) {
        var targetDescriptor = this.identifier + "." + targetName;
        return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    };
    return TargetSet;
}());
export { TargetSet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXRfc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUV6RDtJQUdFLG1CQUFZLEtBQVk7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHVCQUFHLEdBQUgsVUFBSSxVQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFBO0lBQ3RDLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQUEsaUJBTUM7UUFOSSxxQkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLGdDQUF3Qjs7UUFDM0IsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLFVBQVU7WUFDeEMsT0FBQSxNQUFNO21CQUNOLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO21CQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1FBRmpDLENBRWlDLEVBQ3BDLFNBQWdDLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUFBLGlCQU1DO1FBTk8scUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQzlCLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sRUFBRSxVQUFVLElBQUssT0FDOUMsT0FBTyxRQUNQLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQy9CLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsR0FIUyxDQUlsRCxFQUFFLEVBQWUsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFTyw4QkFBVSxHQUFsQixVQUFtQixVQUFrQjtRQUNuQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDMUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU8sa0NBQWMsR0FBdEIsVUFBdUIsVUFBa0I7UUFDdkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVPLDRDQUF3QixHQUFoQyxVQUFpQyxVQUFrQjtRQUNqRCxJQUFNLGFBQWEsR0FBRyxVQUFRLElBQUksQ0FBQyxVQUFVLFlBQVMsQ0FBQTtRQUN0RCxPQUFPLDJCQUEyQixDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRU8sb0NBQWdCLEdBQXhCLFVBQXlCLFVBQWtCO1FBQ3pDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNoRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFTyx3Q0FBb0IsR0FBNUIsVUFBNkIsVUFBa0I7UUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVPLGtEQUE4QixHQUF0QyxVQUF1QyxVQUFrQjtRQUN2RCxJQUFNLGdCQUFnQixHQUFNLElBQUksQ0FBQyxVQUFVLFNBQUksVUFBWSxDQUFBO1FBQzNELE9BQU8sMkJBQTJCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDIn0=