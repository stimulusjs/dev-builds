var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { readInheritableStaticArray } from "./inheritable_static_array";
/** @hidden */
export function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
    var shadowConstructor = extend(constructor);
    var shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
}
function getBlessedProperties(constructor) {
    var blessings = readInheritableStaticArray(constructor, "blessings");
    return blessings.reduce(function (blessedProperties, blessing) {
        var properties = blessing(constructor);
        for (var key in properties) {
            var descriptor = blessedProperties[key] || {};
            blessedProperties[key] = Object.assign(descriptor, properties[key]);
        }
        return blessedProperties;
    }, {});
}
function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce(function (shadowProperties, key) {
        var _a;
        var descriptor = getShadowedDescriptor(prototype, properties, key);
        if (descriptor) {
            Object.assign(shadowProperties, (_a = {}, _a[key] = descriptor, _a));
        }
        return shadowProperties;
    }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
    var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
        var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
        if (shadowingDescriptor) {
            descriptor.get = shadowingDescriptor.get || descriptor.get;
            descriptor.set = shadowingDescriptor.set || descriptor.set;
        }
        return descriptor;
    }
}
function getOwnKeys(object) {
    return Object.getOwnPropertyNames(object).concat(Object.getOwnPropertySymbols(object));
}
var extend = (function () {
    function extendWithReflect(constructor) {
        function extended() {
            var _newTarget = this && this instanceof extended ? this.constructor : void 0;
            return Reflect.construct(constructor, arguments, _newTarget);
        }
        extended.prototype = Object.create(constructor.prototype, {
            constructor: { value: extended }
        });
        Reflect.setPrototypeOf(extended, constructor);
        return extended;
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
            __extends(extended, _super);
            function extended() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return extended;
        }(constructor)); };
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxlc3NpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmxlc3NpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBVXZFLGNBQWM7QUFDZCxNQUFNLGdCQUFtQixXQUF5QjtJQUNoRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtBQUMvRCxDQUFDO0FBRUQsZ0JBQW1CLFdBQTJCLEVBQUUsVUFBaUM7SUFDL0UsSUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0MsSUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9FLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUN0RSxPQUFPLGlCQUFpQixDQUFBO0FBQzFCLENBQUM7QUFFRCw4QkFBaUMsV0FBMkI7SUFDMUQsSUFBTSxTQUFTLEdBQUcsMEJBQTBCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBa0IsQ0FBQTtJQUN2RixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxpQkFBaUIsRUFBRSxRQUFRO1FBQ2xELElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QyxLQUFLLElBQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUM1QixJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUF3QixDQUFBO1lBQ3JFLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3BFO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQTtJQUMxQixDQUFDLEVBQUUsRUFBMkIsQ0FBQyxDQUFBO0FBQ2pDLENBQUM7QUFFRCw2QkFBZ0MsU0FBYyxFQUFFLFVBQWlDO0lBQy9FLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGdCQUFnQixFQUFFLEdBQUc7O1FBQ3pELElBQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDcEUsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixZQUFJLEdBQUMsR0FBRyxJQUFHLFVBQVUsTUFBRyxDQUFBO1NBQ3ZEO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQTtJQUN6QixDQUFDLEVBQUUsRUFBMkIsQ0FBQyxDQUFBO0FBQ2pDLENBQUM7QUFFRCwrQkFBK0IsU0FBYyxFQUFFLFVBQWlDLEVBQUUsR0FBb0I7SUFDcEcsSUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzNFLElBQU0sZUFBZSxHQUFHLG1CQUFtQixJQUFJLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQTtJQUM3RSxJQUFJLENBQUMsZUFBZSxFQUFFO1FBQ3BCLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFFLENBQUMsS0FBSyxDQUFBO1FBQzFFLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsVUFBVSxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQTtZQUMxRCxVQUFVLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFBO1NBQzNEO1FBQ0QsT0FBTyxVQUFVLENBQUE7S0FDbEI7QUFDSCxDQUFDO0FBRUQsb0JBQW9CLE1BQVc7SUFDN0IsT0FDSyxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFFBQ2xDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsRUFDeEM7QUFDSCxDQUFDO0FBRUQsSUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLDJCQUFzRCxXQUFjO1FBQ2xFOztZQUNFLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxhQUFhLENBQUE7UUFDOUQsQ0FBQztRQUVELFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQ3hELFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7U0FDakMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDN0MsT0FBTyxRQUFlLENBQUE7SUFDeEIsQ0FBQztJQUVEO1FBQ0UsSUFBTSxDQUFDLEdBQUcsY0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFRLENBQUE7UUFDMUQsSUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsY0FBWSxDQUFDLENBQUE7UUFDN0IsT0FBTyxJQUFJLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFRCxJQUFJO1FBQ0Ysb0JBQW9CLEVBQUUsQ0FBQTtRQUN0QixPQUFPLGlCQUFpQixDQUFBO0tBQ3pCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLFVBQTRCLFdBQWMsSUFBSztZQUF1Qiw0QkFBVztZQUFsQzs7WUFBb0MsQ0FBQztZQUFELGVBQUM7UUFBRCxDQUFDLEFBQXJDLENBQXVCLFdBQVcsSUFBbEMsQ0FBcUMsQ0FBQTtLQUM1RjtBQUNILENBQUMsQ0FBQyxFQUFFLENBQUEifQ==