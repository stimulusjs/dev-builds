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
    var shadowProperties = getShadowProperties(constructor, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
}
function getBlessedProperties(constructor) {
    var blessings = readInheritableStaticArray(constructor, "blessings");
    return blessings.reduce(function (result, blessing) {
        var properties = blessing(constructor);
        for (var key in properties) {
            var descriptor = result[key] || {};
            result[key] = Object.assign(descriptor, properties[key]);
        }
        return result;
    }, {});
}
function getShadowProperties(constructor, properties) {
    var prototype = constructor.prototype;
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
    var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
    var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxlc3NpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmxlc3NpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBVXZFLGNBQWM7QUFDZCxNQUFNLGdCQUFtQixXQUF5QjtJQUNoRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtBQUMvRCxDQUFDO0FBRUQsZ0JBQW1CLFdBQTJCLEVBQUUsVUFBaUM7SUFDL0UsSUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0MsSUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDckUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ3RFLE9BQU8saUJBQWlCLENBQUE7QUFDMUIsQ0FBQztBQUVELDhCQUFpQyxXQUEyQjtJQUMxRCxJQUFNLFNBQVMsR0FBRywwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFrQixDQUFBO0lBQ3ZGLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxRQUFRO1FBQ3ZDLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QyxLQUFLLElBQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUM1QixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBd0IsQ0FBQTtZQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDekQ7UUFDRCxPQUFPLE1BQU0sQ0FBQTtJQUNmLENB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