var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { readInheritableStaticArray } from "./inheritable_static_array";
import { capitalize } from "./string_helpers";
/** @hidden */
export function ValuePropertiesBlessing(constructor) {
    var valueDefinitions = readInheritableStaticArray(constructor, "values");
    var propertyDescriptorMap = {
        valueAttributeMap: {
            get: function () {
                var _this = this;
                return valueDefinitions.reduce(function (result, valueDefinition) {
                    var _a;
                    var _b = parseValueDefinition(valueDefinition), name = _b.name, key = _b.key;
                    return __assign({}, result, (_a = {}, _a[name] = _this.data.getAttributeNameForKey(key), _a));
                }, {});
            }
        }
    };
    return valueDefinitions.reduce(function (properties, valueDefinition) {
        return Object.assign(properties, propertiesForValueDefinition(valueDefinition));
    }, propertyDescriptorMap);
}
/** @hidden */
export function propertiesForValueDefinition(valueDefinition) {
    var _a;
    var _b = parseValueDefinition(valueDefinition), name = _b.name, key = _b.key, type = _b.type, defaultValue = _b.defaultValue;
    var getDefaultValue = defaultValue instanceof Function ? defaultValue : function () { return defaultValue; };
    var read = readers[type];
    return _a = {},
        _a[name] = {
            get: defaultValue == undefined
                ? getOrThrow(key, read)
                : getWithDefault(key, read, getDefaultValue),
            set: function (value) {
                if (value == undefined) {
                    this.data.delete(key);
                }
                else {
                    this.data.set(key, "" + value);
                }
            }
        },
        _a["has" + capitalize(name)] = {
            get: function () {
                return getDefaultValue.call(this) != undefined || this.data.has(key);
            }
        },
        _a;
}
function parseValueDefinition(valueDefinition) {
    var key = typeof valueDefinition == "string" ? valueDefinition : valueDefinition.name;
    var type = typeof valueDefinition == "string" ? "string" : valueDefinition.type || "string";
    var defaultValue = typeof valueDefinition == "string" ? undefined : valueDefinition.default;
    var name = key + "Value";
    return { name: name, key: key, type: type, defaultValue: defaultValue };
}
function getWithDefault(key, read, getDefaultValue) {
    return function () {
        var value = this.data.get(key);
        return value == null ? getDefaultValue.call(this) : read(value);
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
    integer: function (value) {
        return parseInt(value, 10);
    },
    float: function (value) {
        return parseFloat(value);
    },
    string: function (value) {
        return value;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBRTdDLGNBQWM7QUFDZCxNQUFNLGtDQUFxQyxXQUEyQjtJQUNwRSxJQUFNLGdCQUFnQixHQUFHLDBCQUEwQixDQUFxQixXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDOUYsSUFBTSxxQkFBcUIsR0FBMEI7UUFDbkQsaUJBQWlCLEVBQUU7WUFDakIsR0FBRztnQkFBSCxpQkFLQztnQkFKQyxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxlQUFlOztvQkFDL0MsSUFBQSwwQ0FBcUQsRUFBbkQsY0FBSSxFQUFFLFlBQUcsQ0FBMEM7b0JBQzNELG9CQUFZLE1BQU0sZUFBRyxJQUFJLElBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsT0FBRTtnQkFDckUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQ1IsQ0FBQztTQUNGO0tBQ0YsQ0FBQTtJQUVELE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQUMsVUFBVSxFQUFFLGVBQWU7UUFDekQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSw0QkFBNEIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ2pGLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFBO0FBQzNCLENBQUM7QUFFRCxjQUFjO0FBQ2QsTUFBTSx1Q0FBMEMsZUFBZ0M7O0lBQ3hFLElBQUEsMENBQXlFLEVBQXZFLGNBQUksRUFBRSxZQUFHLEVBQUUsY0FBSSxFQUFFLDhCQUFZLENBQTBDO0lBQy9FLElBQU0sZUFB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