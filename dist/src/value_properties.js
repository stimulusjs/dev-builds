import { readInheritableStaticObjectPairs } from "./inheritable_statics";
import { camelize, capitalize, dasherize } from "./string_helpers";
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
    var type = definition.type, key = definition.key, name = definition.name;
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
    var token = _a[0], typeConstant = _a[1];
    var type = parseValueTypeConstant(typeConstant);
    return valueDescriptorForTokenAndType(token, type);
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
function valueDescriptorForTokenAndType(token, type) {
    var key = dasherize(token) + "-value";
    return {
        type: type,
        key: key,
        name: camelize(key),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBRWxFLGNBQWM7QUFDZCxNQUFNLGtDQUFxQyxXQUEyQjtJQUNwRSxJQUFNLG9CQUFvQixHQUFHLGdDQUFnQyxDQUF1QixXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDMUcsSUFBTSxxQkFBcUIsR0FBMEI7UUFDbkQsa0JBQWtCLEVBQUU7WUFDbEIsR0FBRztnQkFBSCxpQkFNQztnQkFMQyxPQUFPLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxtQkFBbUI7O29CQUM3RCxJQUFNLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO29CQUNyRSxJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDM0UsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLGFBQWEsSUFBRyxlQUFlLE1BQUcsQ0FBQTtnQkFDcEUsQ0FBQyxFQUFFLEVBQXdCLENBQUMsQ0FBQTtZQUM5QixDQUFDO1NBQ0Y7S0FDRixDQUFBO0lBRUQsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxVQUFVLEVBQUUsbUJBQW1CO1FBQ2pFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsZ0NBQWdDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0lBQ3pGLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFBO0FBQzNCLENBQUM7QUFFRCxjQUFjO0FBQ2QsTUFBTSwyQ0FBOEMsbUJBQXdDOztJQUMxRixJQUFNLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3hELElBQUEsc0JBQUksRUFBRSxvQkFBRyxFQUFFLHNCQUFJLENBQWU7SUFDdEMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQTtJQUVwRTtRQUNFLEdBQUMsSUFBSSxJQUFHO1lBQ04sR0FBRztnQkFDRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDbkI7cUJBQU07b0JBQ0wsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFBO2lCQUMvQjtZQUNILENBQUM7WUFFRCxHQUFHLFlBQW1CLEtBQW9CO2dCQUN4QyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUN0QjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7aUJBQ2pDO1lBQ0gsQ0FBQztTQUNGO1FBRUQsR0FBQyxRQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUcsSUFBRztZQUMxQixHQUFHLEVBQUg7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzQixDQUFDO1NBQ0Y7V0FDRjtBQUNILENBQUM7QUFtQkQsa0NBQWtDLEVBQTBDO1FBQXpDLGFBQUssRUFBRSxvQkFBWTtJQUNwRCxJQUFNLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqRCxPQUFPLDhCQUE4QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNwRCxDQUFDO0FBRUQsZ0NBQWdDLFlBQStCO0lBQzdELFFBQVEsWUFBWSxFQUFFO1FBQ3BCLEtBQUssS0FBSyxDQUFDLENBQUcsT0FBTyxPQUFPLENBQUE7UUFDNUIsS0FBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQTtRQUM5QixLQUFLLE1BQU0sQ0FBQyxDQUFFLE9BQU8sUUFBUSxDQUFBO1FBQzdCLEtBQUssTUFBTSxDQUFDLENBQUUsT0FBTyxRQUFRLENBQUE7UUFDN0IsS0FBSyxNQUFNLENBQUMsQ0FBRSxPQUFPLFFBQVEsQ0FBQTtLQUM5QjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQWdDLFlBQVksT0FBRyxDQUFDLENBQUE7QUFDbEUsQ0FBQztBQUVELHdDQUF3QyxLQUFhLEVBQUUsSUFBZTtJQUNwRSxJQUFNLEdBQUcsR0FBTSxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVEsQ0FBQTtJQUN2QyxPQUFPO1FBQ0wsSUFBSSxNQUFBO1FBQ0osR0FBRyxLQUFBO1FBQ0gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDbkIsSUFBSSxZQUFZLEtBQUssT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7S0FDeEQsQ0FBQTtBQUNILENBQUM7QUFFRCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRSxDQUFBLENBQUMsQ0FBQztJQUN6QixPQUFPLEVBQUUsS0FBSztJQUNkLE1BQU0sRUFBRSxDQUFDO0lBQ1QsSUFBSSxNQUFNLEtBQUssT0FBTyxFQUFFLENBQUEsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sRUFBRSxFQUFFO0NBQ1gsQ0FBQTtBQUlELElBQU0sT0FBTyxHQUErQjtJQUMxQyxLQUFLLEVBQUwsVUFBTSxLQUFhO1FBQ2pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1NBQ3RDO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsT0FBTyxFQUFQLFVBQVEsS0FBYTtRQUNuQixPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsTUFBTSxFQUFOLFVBQU8sS0FBYTtRQUNsQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRUQsTUFBTSxFQUFOLFVBQU8sS0FBYTtRQUNsQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hDLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6RSxNQUFNLElBQUksU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUE7U0FDdkM7UUFDRCxPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7SUFFRCxNQUFNLEVBQU4sVUFBTyxLQUFhO1FBQ2xCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUFJRCxJQUFNLE9BQU8sR0FBK0I7SUFDMUMsT0FBTyxFQUFFLFdBQVc7SUFDcEIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsTUFBTSxFQUFFLFNBQVM7Q0FDbEIsQ0FBQTtBQUVELG1CQUFtQixLQUFVO0lBQzNCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUM5QixDQUFDO0FBRUQscUJBQXFCLEtBQVU7SUFDN0IsT0FBTyxLQUFHLEtBQU8sQ0FBQTtBQUNuQixDQUFDIn0=