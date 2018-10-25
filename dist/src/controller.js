import { ClassPropertiesBlessing } from "./class_properties";
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
    Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing];
    Controller.targets = [];
    Controller.values = {};
    return Controller;
}());
export { Controller };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBSzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBRTlELE9BQU8sRUFBRSx1QkFBdUIsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQTtBQUloRjtJQU9FLG9CQUFZLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSxtQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQTtRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZCQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQTtRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCwrQkFBVSxHQUFWO1FBQ0UsK0RBQStEO0lBQ2pFLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0UsbUZBQW1GO0lBQ3JGLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0Usd0ZBQXdGO0lBQzFGLENBQUM7SUE1Q00sb0JBQVMsR0FBRyxDQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixDQUFFLENBQUE7SUFDMUYsa0JBQU8sR0FBYSxFQUFFLENBQUE7SUFDdEIsaUJBQU0sR0FBdUIsRUFBRSxDQUFBO0lBMkN4QyxpQkFBQztDQUFBLEFBOUNELElBOENDO1NBOUNZLFVBQVUifQ==