/** @hidden */
export function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
    };
}
function blessControllerConstructor(controllerConstructor) {
    const constructor = extend(controllerConstructor);
    constructor.bless();
    return constructor;
}
const extend = (() => {
    function extendWithReflect(constructor) {
        function Controller() {
            return Reflect.construct(constructor, arguments, new.target);
        }
        Controller.prototype = Object.create(constructor.prototype, {
            constructor: { value: Controller }
        });
        Reflect.setPrototypeOf(Controller, constructor);
        return Controller;
    }
    function testReflectExtension() {
        const a = function () { this.a.call(this); };
        const b = extendWithReflect(a);
        b.prototype.a = function () { };
        return new b;
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    }
    catch (error) {
        return (constructor) => class Controller extends constructor {
        };
    }
})();
//# sourceMappingURL=definition.js.map