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
import { readInheritableStaticArrayValues } from "./inheritable_statics";
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
    var blessings = readInheritableStaticArrayValues(constructor, "blessings");
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
var getOwnKeys = (function () {
    if (typeof Object.getOwnPropertySymbols == "function") {
        return function (object) { return Object.getOwnPropertyNames(object).concat(Object.getOwnPropertySymbols(object)); };
    }
    else {
        return Object.getOwnPropertyNames;
    }
})();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxlc3NpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmxlc3NpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBVXhFLGNBQWM7QUFDZCxNQUFNLGdCQUFtQixXQUF5QjtJQUNoRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtBQUMvRCxDQUFDO0FBRUQsZ0JBQW1CLFdBQTJCLEVBQUUsVUFBaUM7SUFDL0UsSUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0MsSUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9FLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUN0RSxPQUFPLGlCQUFpQixDQUFBO0FBQzFCLENBQUM7QUFFRCw4QkFBaUMsV0FBMkI7SUFDMUQsSUFBTSxTQUFTLEdBQUcsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBa0IsQ0FBQTtJQUM3RixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxpQkFBaUIsRUFBRSxRQUFRO1FBQ2xELElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QyxLQUFLLElBQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUM1QixJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUF3QixDQUFBO1lBQ3JFLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3BFO1FBQ0QsT0FBTyxp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