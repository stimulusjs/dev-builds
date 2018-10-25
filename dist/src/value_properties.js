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
    return valueDefinitionPairs.reduce(function (properties, valueDefinition) {
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinition));
    }, propertyDescriptorMap);
}
/** @hidden */
export function propertiesForValueDefinitionPair(valueDefinitionPair) {
    var _a;
    var _b = parseValueDefinitionPair(valueDefinitionPair), key = _b.key, name = _b.name, type = _b.type, defaultValue = _b.defaultValue;
    var read = readers[type], write = writers[type] || writers.default;
    return _a = {},
        _a[name] = {
            get: defaultValue === undefined
                ? getOrThrow(key, read)
                : getWithDefault(key, read, defaultValue),
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
                return defaultValue !== undefined || this.data.has(key);
            }
        },
        _a;
}
function parseValueDefinitionPair(_a) {
    var key = _a[0], definition = _a[1];
    var _b = Array.isArray(definition)
        ? definition
        : [definition, defaultValueForValueTypeConstant(definition)], typeConstant = _b[0], defaultValue = _b[1];
    return {
        key: key,
        name: key + "Value",
        type: parseValueTypeConstant(typeConstant),
        defaultValue: defaultValue
    };
}
function parseValueTypeConstant(typeConstant) {
    switch (typeConstant) {
        case Boolean: return "boolean";
        case JSON: return "json";
        case Number: return "number";
        case String: return "string";
    }
    throw new Error("Unknown value type constant \"" + typeConstant + "\"");
}
function defaultValueForValueTypeConstant(typeConstant) {
    switch (typeConstant) {
        case Boolean: return false;
        case Number: return 0;
        case String: return "";
    }
}
function getWithDefault(key, read, defaultValue) {
    return function () {
        var value = this.data.get(key);
        return value == null ? defaultValue : read(value);
    };
}
function getOrThrow(key, read) {
    return function () {
        var value = this.data.get(key);
        if (value == null) {
            var attributeName = this.data.getAttributeNameForKey(key);
            throw new Error("Missing required attribute \"" + attributeName + "\"");
        }
        return read(value);
    };
}
var readers = {
    boolean: function (value) {
        return !(value == "0" || value == "false");
    },
    json: function (value) {
        return JSON.parse(value);
    },
    number: function (value) {
        return parseFloat(value);
    },
    string: function (value) {
        return value;
    }
};
var writers = {
    json: function (value) {
        return JSON.stringify(value);
    },
    default: function (value) {
        return "" + value;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUU3QyxjQUFjO0FBQ2QsTUFBTSxrQ0FBcUMsV0FBMkI7SUFDcEUsSUFBTSxvQkFBb0IsR0FBRyxnQ0FBZ0MsQ0FBcUIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ3hHLElBQU0scUJBQXFCLEdBQTBCO1FBQ25ELGtCQUFrQixFQUFFO1lBQ2xCLEdBQUc7Z0JBQUgsaUJBTUM7Z0JBTEMsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsbUJBQW1COztvQkFDN0QsSUFBTSxlQUFlLEdBQUcsd0JBQXdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtvQkFDckUsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQzNFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQUksR0FBQyxhQUFhLElBQUcsZUFBZSxNQUFHLENBQUE7Z0JBQ3BFLENBQUMsRUFBRSxFQUF3QixDQUFDLENBQUE7WUFDOUIsQ0FBQztTQUNGO0tBQ0YsQ0FBQTtJQUVELE9BQU8sb0JBQW9CLENBQUMsTUFBTSxDQUFDLFVBQUMsVUFBVSxFQUFFLGVBQWU7UUFDN0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3JGLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFBO0FBQzNCLENBQUM7QUFFRCxjQUFjO0FBQ2QsTUFBTSwyQ0FBOEMsbUJBQXdDOztJQUNwRixJQUFBLGtEQUFpRixFQUEvRSxZQUFHLEVBQUUsY0FBSSxFQUFFLGNBQUksRUFBRSw4QkFBWSxDQUFrRDtJQUN2RixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFBO0lBRXBFO1FBQ0UsR0FBQyxJQUFJLElBQUc7WUFDTixHQUFHLEVBQUUsWUFBWSxLQUFLLFNBQVM7Z0JBQzdCLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQztZQUUzQyxHQUFHLFlBQW1CLEtBQW9CO2dCQUN4QyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUN0QjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7aUJBQ2pDO1lBQ0gsQ0FBQztTQUNGO1FBRUQsR0FBQyxRQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUcsSUFBRztZQUMxQixHQUFHLEVBQUg7Z0JBQ0UsT0FBTyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pELENBQUM7U0FDRjtXQUNGO0FBQ0gsQ0FBQztBQXFCRCxrQ0FBa0MsRUFBc0M7UUFBckMsV0FBRyxFQUFFLGtCQUFVO0lBQzFDLElBQUE7O29FQUd3RCxFQUh0RCxvQkFBZSxFQUFFLG9CQUFlLENBR3NCO0lBQzlELE9BQU87UUFDTCxHQUFHLEtBQUE7UUFDSCxJQUFJLEVBQUssR0FBRyxVQUFPO1FBQ25CLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxZQUFZLENBQUM7UUFDMUMsWUFBWSxjQUFBO0tBQ2IsQ0FBQTtBQUNILENBQUM7QUFFRCxnQ0FBZ0MsWUFBK0I7SUFDN0QsUUFBUSxZQUFZLEVBQUU7UUFDcEIsS0FBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQTtRQUM5QixLQUFLLElBQUksQ0FBQyxDQUFJLE9BQU8sTUFBTSxDQUFBO1FBQzNCLEtBQUssTUFBTSxDQUFDLENBQUUsT0FBTyxRQUFRLENBQUE7UUFDN0IsS0FBSyxNQUFNLENBQUMsQ0FBRSxPQUFPLFFBQVEsQ0FBQTtLQUM5QjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQWdDLFlBQVksT0FBRyxDQUFDLENBQUE7QUFDbEUsQ0FBQztBQUVELDBDQUEwQyxZQUErQjtJQUN2RSxRQUFRLFlBQVksRUFBRTtRQUNwQixLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFBO1FBQzFCLEtBQUssTUFBTSxDQUFDLENBQUUsT0FBTyxDQUFDLENBQUE7UUFDdEIsS0FBSyxNQUFNLENBQUMsQ0FBRSxPQUFPLEVBQUUsQ0FBQTtLQUN4QjtBQUNILENBQUM7QUFFRCx3QkFBMkIsR0FBVyxFQUFFLElBQVksRUFBRSxZQUFlO0lBQ25FLE9BQU87UUFDTCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25ELENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxvQkFBdUIsR0FBVyxFQUFFLElBQVk7SUFDOUMsT0FBTztRQUNMLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNELE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQStCLGFBQWEsT0FBRyxDQUFDLENBQUE7U0FDakU7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUE7QUFDSCxDQUFDO0FBSUQsSUFBTSxPQUFPLEdBQStCO0lBQzFDLE9BQU8sRUFBUCxVQUFRLEtBQWE7UUFDbkIsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELElBQUksRUFBSixVQUFLLEtBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxNQUFNLEVBQU4sVUFBTyxLQUFhO1FBQ2xCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxNQUFNLEVBQU4sVUFBTyxLQUFhO1FBQ2xCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUFJRCxJQUFNLE9BQU8sR0FBK0I7SUFDMUMsSUFBSSxZQUFDLEtBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELE9BQU8sWUFBQyxLQUFVO1FBQ2hCLE9BQU8sS0FBRyxLQUFPLENBQUE7SUFDbkIsQ0FBQztDQUNGLENBQUEifQ==