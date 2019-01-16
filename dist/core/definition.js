var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** @hidden */
export function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
    };
}
function blessControllerConstructor(controllerConstructor) {
    var constructor = extend(controllerConstructor);
    constructor.bless();
    return constructor;
}
var extend = (function () {
    function extendWithReflect(constructor) {
        function Controller() {
            var _newTarget = this && this instanceof Controller ? this.constructor : void 0;
            return Reflect.construct(constructor, arguments, _newTarget);
        }
        Controller.prototype = Object.create(constructor.prototype, {
            constructor: { value: Controller }
        });
        Reflect.setPrototypeOf(Controller, constructor);
        return Controller;
    }
    function testReflectExtension() {
        var a = function () { this.a.call(this); };
        var b = extendWithReflect(a);
        b.prototype.a = function () { };
        return new b;
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    }
    catch (error) {
        return function (constructor) { return /** @class */ (function (_super) {
            __extends(Controller, _super);
            function Controller() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Controller;
        }(constructor)); };
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2RlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BLGNBQWM7QUFDZCxNQUFNLFVBQVUsZUFBZSxDQUFDLFVBQXNCO0lBQ3BELE9BQU87UUFDTCxVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7UUFDakMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO0tBQ3BGLENBQUE7QUFDSCxDQUFDO0FBRUQsU0FBUywwQkFBMEIsQ0FBQyxxQkFBNEM7SUFDOUUsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDakQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ25CLE9BQU8sV0FBVyxDQUFBO0FBQ3BCLENBQUM7QUFFRCxJQUFNLE1BQU0sR0FBRyxDQUFDO0lBR2QsU0FBUyxpQkFBaUIsQ0FBNEIsV0FBYztRQUNsRTs7WUFDRSxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQVMsYUFBYSxDQUFBO1FBQzlELENBQUM7UUFFRCxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUMxRCxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO1NBQ25DLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBQy9DLE9BQU8sVUFBaUIsQ0FBQTtJQUMxQixDQUFDO0lBRUQsU0FBUyxvQkFBb0I7UUFDM0IsSUFBTSxDQUFDLEdBQUcsY0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFRLENBQUE7UUFDMUQsSUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsY0FBWSxDQUFDLENBQUE7UUFDN0IsT0FBTyxJQUFJLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFRCxJQUFJO1FBQ0Ysb0JBQW9CLEVBQUUsQ0FBQTtRQUN0QixPQUFPLGlCQUFpQixDQUFBO0tBQ3pCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLFVBQTRCLFdBQWMsSUFBSztZQUF5Qiw4QkFBVztZQUFwQzs7WUFBc0MsQ0FBQztZQUFELGlCQUFDO1FBQUQsQ0FBQyxBQUF2QyxDQUF5QixXQUFXLElBQXBDLENBQXVDLENBQUE7S0FDOUY7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFBIn0=