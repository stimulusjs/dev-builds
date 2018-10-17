import { readInheritableStaticArray } from "./inheritable_static_array";
import { capitalize } from "./string_helpers";
/** @hidden */
export function ValuePropertiesBlessing(constructor) {
    var valueDefinitions = readInheritableStaticArray(constructor, "values");
    var propertyDescriptorMap = {
        valueDescriptors: {
            get: function () {
                var _this = this;
                return valueDefinitions.reduce(function (result, valueDefinition) {
                    var _a;
                    var valueDescriptor = parseValueDefinition(valueDefinition);
                    var attributeName = _this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, (_a = {}, _a[attributeName] = valueDescriptor, _a));
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
    var read = readers[type];
    return _a = {},
        _a[name] = {
            get: defaultValue == undefined
                ? getOrThrow(key, read)
                : getWithDefault(key, read, defaultValue),
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
                return defaultValue != undefined || this.data.has(key);
            }
        },
        _a;
}
function parseValueDefinition(valueDefinition) {
    var key = typeof valueDefinition == "string" ? valueDefinition : valueDefinition.name;
    if (!key)
        throw new Error("missing key");
    return {
        key: key,
        name: key + "Value",
        type: typeof valueDefinition == "string" ? "string" : valueDefinition.type || "string",
        defaultValue: typeof valueDefinition == "string" ? undefined : valueDefinition.defaultValue
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUU3QyxjQUFjO0FBQ2QsTUFBTSxrQ0FBcUMsV0FBMkI7SUFDcEUsSUFBTSxnQkFBZ0IsR0FBRywwQkFBMEIsQ0FBcUIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzlGLElBQU0scUJBQXFCLEdBQTBCO1FBQ25ELGdCQUFnQixFQUFFO1lBQ2hCLEdBQUc7Z0JBQUgsaUJBTUM7Z0JBTEMsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsZUFBZTs7b0JBQ3JELElBQU0sZUFBZSxHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFBO29CQUM3RCxJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDM0UsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLGFBQWEsSUFBRyxlQUFlLE1BQUcsQ0FBQTtnQkFDcEUsQ0FBQyxFQUFFLEVBQXdCLENBQUMsQ0FBQTtZQUM5QixDQUFDO1NBQ0Y7S0FDRixDQUFBO0lBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxVQUFVLEVBQUUsZUFBZTtRQUN6RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLDRCQUE0QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUE7QUFDM0IsQ0FBQztBQUVELGNBQWM7QUFDZCxNQUFNLHVDQUEwQyxlQUFnQzs7SUFDeEUsSUFBQSwwQ0FBeUUsRUFBdkUsY0FBSSxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsOEJBQVksQ0FBMEM7SUFDL0UsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRTFCO1FBQ0UsR0FBQyxJQUFJLElBQUc7WUFDTixHQUFHLEVBQUUsWUFBWSxJQUFJLFNBQVM7Z0JBQzVCLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQztZQUUzQyxHQUFHLFlBQW1CLEtBQW9CO2dCQUN4QyxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUN0QjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBRyxLQUFPLENBQUMsQ0FBQTtpQkFDL0I7WUFDSCxDQUFDO1NBQ0Y7UUFFRCxHQUFDLFFBQU0sVUFBVSxDQUFDLElBQUksQ0FBRyxJQUFHO1lBQzFCLEdBQUcsRUFBSDtnQkFDRSxPQUFPLFlBQVksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDeEQsQ0FBQztTQUNGO1dBQ0Y7QUFDSCxDQUFDO0FBYUQsOEJBQThCLGVBQWdDO0lBQzVELElBQU0sR0FBRyxHQUFHLE9BQU8sZUFBZSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFBO0lBQ3ZGLElBQUksQ0FBQyxHQUFHO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN4QyxPQUFPO1FBQ0wsR0FBRyxLQUFBO1FBQ0gsSUFBSSxFQUFLLEdBQUcsVUFBTztRQUNuQixJQUFJLEVBQUUsT0FBTyxlQUFlLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksUUFBUTtRQUN0RixZQUFZLEVBQUUsT0FBTyxlQUFlLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxZQUFZO0tBQzVGLENBQUE7QUFDSCxDQUFDO0FBRUQsd0JBQTJCLEdBQVcsRUFBRSxJQUFZLEVBQUUsWUFBZTtJQUNuRSxPQUFPO1FBQ0wsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEMsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNuRCxDQUFDLENBQUE7QUFDSCxDQUFDO0FBRUQsb0JBQXVCLEdBQVcsRUFBRSxJQUFZO0lBQzlDLE9BQU87UUFDTCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzRCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUErQixhQUFhLE9BQUcsQ0FBQyxDQUFBO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUlELElBQU0sT0FBTyxHQUErQjtJQUMxQyxPQUFPLEVBQVAsVUFBUSxLQUFhO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLE9BQU8sQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxPQUFPLEVBQVAsVUFBUSxLQUFhO1FBQ25CLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsS0FBSyxFQUFMLFVBQU0sS0FBYTtRQUNqQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRUQsTUFBTSxFQUFOLFVBQU8sS0FBYTtRQUNsQixPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7Q0FDRixDQUFBIn0=