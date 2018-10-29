import { readInheritableStaticObjectPairs } from "./inheritable_statics";
import { capitalize } from "./string_helpers";
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
        name: key + "Value",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUU3QyxjQUFjO0FBQ2QsTUFBTSxrQ0FBcUMsV0FBMkI7SUFDcEUsSUFBTSxvQkFBb0IsR0FBRyxnQ0FBZ0MsQ0FBdUIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzFHLElBQU0scUJBQXFCLEdBQTBCO1FBQ25ELGtCQUFrQixFQUFFO1lBQ2xCLEdBQUc7Z0JBQUgsaUJBTUM7Z0JBTEMsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsbUJBQW1COztvQkFDN0QsSUFBTSxlQUFlLEdBQUcsd0JBQXdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtvQkFDckUsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQzNFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQUksR0FBQyxhQUFhLElBQUcsZUFBZSxNQUFHLENBQUE7Z0JBQ3BFLENBQUMsRUFBRSxFQUF3QixDQUFDLENBQUE7WUFDOUIsQ0FBQztTQUNGO0tBQ0YsQ0FBQTtJQUVELE9BQU8sb0JBQW9CLENBQUMsTUFBTSxDQUFDLFVBQUMsVUFBVSxFQUFFLG1CQUFtQjtRQUNqRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGdDQUFnQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtJQUN6RixDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQTtBQUMzQixDQUFDO0FBRUQsY0FBYztBQUNkLE1BQU0sMkNBQThDLG1CQUF3Qzs7SUFD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