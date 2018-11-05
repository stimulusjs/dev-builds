import { readInheritableStaticObjectPairs } from "./inheritable_statics";
import { camelize, capitalize } from "./string_helpers";
/** @hidden */
export function ValuePropertiesBlessing(constructor) {
    var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    var propertyDescriptorMap = {
        valueDescriptorMap: {
            get: function () {
                var _this = this;
                return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
                    var _a;
                    var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);
                    var attributeName = _this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, (_a = {}, _a[attributeName] = valueDescriptor, _a));
                }, {});
            }
        }
    };
    return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
/** @hidden */
export function propertiesForValueDefinitionPair(valueDefinitionPair) {
    var _a;
    var definition = parseValueDefinitionPair(valueDefinitionPair);
    var key = definition.key, name = definition.name, type = definition.type;
    var read = readers[type], write = writers[type] || writers.default;
    return _a = {},
        _a[name] = {
            get: function () {
                var value = this.data.get(key);
                if (value !== null) {
                    return read(value);
                }
                else {
                    return definition.defaultValue;
                }
            },
            set: function (value) {
                if (value === undefined) {
                    this.data.delete(key);
                }
                else {
                    this.data.set(key, write(value));
                }
            }
        },
        _a["has" + capitalize(name)] = {
            get: function () {
                return this.data.has(key);
            }
        },
        _a;
}
function parseValueDefinitionPair(_a) {
    var key = _a[0], typeConstant = _a[1];
    var type = parseValueTypeConstant(typeConstant);
    return valueDescriptorForKeyAndType(key, type);
}
function parseValueTypeConstant(typeConstant) {
    switch (typeConstant) {
        case Array: return "array";
        case Boolean: return "boolean";
        case Number: return "number";
        case Object: return "object";
        case String: return "string";
    }
    throw new Error("Unknown value type constant \"" + typeConstant + "\"");
}
function valueDescriptorForKeyAndType(key, type) {
    return {
        key: key,
        name: camelize(key) + "Value",
        type: type,
        get defaultValue() { return defaultValuesByType[type]; }
    };
}
var defaultValuesByType = {
    get array() { return []; },
    boolean: false,
    number: 0,
    get object() { return {}; },
    string: ""
};
var readers = {
    array: function (value) {
        var array = JSON.parse(value);
        if (!Array.isArray(array)) {
            throw new TypeError("Expected array");
        }
        return array;
    },
    boolean: function (value) {
        return !(value == "0" || value == "false");
    },
    number: function (value) {
        return parseFloat(value);
    },
    object: function (value) {
        var object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) {
            throw new TypeError("Expected object");
        }
        return object;
    },
    string: function (value) {
        return value;
    }
};
var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return "" + value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFdkQsY0FBYztBQUNkLE1BQU0sa0NBQXFDLFdBQTJCO0lBQ3BFLElBQU0sb0JBQW9CLEdBQUcsZ0NBQWdDLENBQXVCLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUMxRyxJQUFNLHFCQUFxQixHQUEwQjtRQUNuRCxrQkFBa0IsRUFBRTtZQUNsQixHQUFHO2dCQUFILGlCQU1DO2dCQUxDLE9BQU8sb0JBQW9CLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLG1CQUFtQjs7b0JBQzdELElBQU0sZUFBZSxHQUFHLHdCQUF3QixDQUFDLG1CQUFtQixDQUFDLENBQUE7b0JBQ3JFLElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUMzRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFJLEdBQUMsYUFBYSxJQUFHLGVBQWUsTUFBRyxDQUFBO2dCQUNwRSxDQUFDLEVBQUUsRUFBd0IsQ0FBQyxDQUFBO1lBQzlCLENBQUM7U0FDRjtLQUNGLENBQUE7SUFFRCxPQUFPLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQVUsRUFBRSxtQkFBbUI7UUFDakUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxnQ0FBZ0MsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7SUFDekYsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUE7QUFDM0IsQ0FBQztBQUVELGNBQWM7QUFDZCxNQUFNLDJDQUE4Qyxt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