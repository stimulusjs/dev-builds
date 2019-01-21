import { parseClassDescriptorStringForIdentifier } from "./class_descriptor";
var ClassMap = /** @class */ (function () {
    function ClassMap(scope) {
        this.scope = scope;
    }
    ClassMap.prototype.has = function (name) {
        return name in this.values;
    };
    ClassMap.prototype.get = function (name) {
        return this.values[name];
    };
    Object.defineProperty(ClassMap.prototype, "values", {
        get: function () {
            var identifier = this.identifier;
            return this.descriptorStrings.reduce(function (values, descriptorString) {
                var descriptor = parseClassDescriptorStringForIdentifier(descriptorString, identifier);
                if (descriptor) {
                    values[descriptor.name] = descriptor.className;
                }
                return values;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMap.prototype, "descriptorStrings", {
        get: function () {
            var value = this.element.getAttribute(this.classAttribute) || "";
            return value.split(/\s+/);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMap.prototype, "classAttribute", {
        get: function () {
            return this.schema.classAttribute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMap.prototype, "schema", {
        get: function () {
            return this.scope.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMap.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMap.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    return ClassMap;
}());
export { ClassMap };
//# sourceMappingURL=class_map.js.map