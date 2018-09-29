import { readInheritableStaticArray } from "./inheritable_static_array";
import { capitalize } from "./string_helpers";
/** @hidden */
export function ValuePropertiesBlessing(constructor) {
    var values = readInheritableStaticArray(constructor, "values");
    return values.reduce(function (properties, valueDefinition) {
        return Object.assign(properties, propertiesForValueDefinition(valueDefinition));
    }, {});
}
/** @hidden */
export function propertiesForValueDefinition(valueDefinition) {
    var _a;
    var key = typeof valueDefinition == "string" ? valueDefinition : valueDefinition.name;
    var type = typeof valueDefinition == "string" ? "string" : valueDefinition.type || "string";
    var defaultValue = typeof valueDefinition == "string" ? undefined : valueDefinition.default;
    var getDefaultValue = defaultValue instanceof Function ? defaultValue : function () { return defaultValue; };
    var read = readers[type];
    return _a = {},
        _a[key] = {
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
        _a["has" + capitalize(key)] = {
            get: function () {
                return getDefaultValue.call(this) != undefined || this.data.has(key);
            }
        },
        _a;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUU3QyxjQUFjO0FBQ2QsTUFBTSxrQ0FBcUMsV0FBMkI7SUFDcEUsSUFBTSxNQUFNLEdBQUcsMEJBQTBCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ2hFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQVUsRUFBRSxlQUFlO1FBQy9DLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDLEVBQUUsRUFBMkIsQ0FBQyxDQUFBO0FBQ2pDLENBQUM7QUFFRCxjQUFjO0FBQ2QsTUFBTSx1Q0FBMEMsZUFBZ0M7O0lBQzlFLElBQU0sR0FBRyxHQUFHLE9BQU8sZUFBZSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFBO0lBQ3ZGLElBQU0sSUFBSSxHQUFHLE9BQU8sZUFBZSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQTtJQUM3RixJQUFNLFlBQVksR0FBRyxPQUFPLGVBQWUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQTtJQUM3RixJQUFNLGVBQWUsR0FBRyxZQUFZLFlBQVksUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGNBQU0sT0FBQSxZQUFZLEVBQVosQ0FBWSxD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