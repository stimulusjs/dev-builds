import { TargetPropertiesBlessing } from "./target_properties";
import { ValuePropertiesBlessing } from "./value_properties";
var Controller = /** @class */ (function () {
    function Controller(context) {
        this.context = context;
    }
    Object.defineProperty(Controller.prototype, "application", {
        get: function () {
            return this.context.application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "targets", {
        get: function () {
            return this.scope.targets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: true,
        configurable: true
    });
    Controller.prototype.initialize = function () {
        // Override in your subclass to set up initial controller state
    };
    Controller.prototype.connect = function () {
        // Override in your subclass to respond when the controller is connected to the DOM
    };
    Controller.prototype.disconnect = function () {
        // Override in your subclass to respond when the controller is disconnected from the DOM
    };
    Controller.blessings = [TargetPropertiesBlessing, ValuePropertiesBlessing];
    Controller.targets = [];
    return Controller;
}());
export { Controller };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBRTlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBSTVEO0lBTUUsb0JBQVksT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELHNCQUFJLG1DQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFBO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTtRQUN4QixDQUFDOzs7T0FBQTtJQUVELCtCQUFVLEdBQVY7UUFDRSwrREFBK0Q7SUFDakUsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDRSxtRkFBbUY7SUFDckYsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDRSx3RkFBd0Y7SUFDMUYsQ0FBQztJQTNDTSxvQkFBUyxHQUFHLENBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLENBQUUsQ0FBQTtJQUNqRSxrQkFBTyxHQUFhLEVBQUUsQ0FBQTtJQTJDL0IsaUJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSxVQUFVIn0=