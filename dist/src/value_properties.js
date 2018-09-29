import { readInheritableStaticArray } from "./inheritable_static_array";
import { capitalize } from "./string_helpers";
/** @hidden */
export function ValuePropertiesBlessing(constructor) {
    var values = readInheritableStaticArray(constructor, "values");
    return values.reduce(function (properties, valueDefinition) {
        return Object.assign(properties, propertiesForValueDefinition(valueDefinition));
    }, {});
}
function propertiesForValueDefinition(valueDefinition) {
    var _a;
    var key = typeof valueDefinition == "string" ? valueDefinition : valueDefinition.name;
    var type = typeof valueDefinition == "string" ? "string" : valueDefinition.type || "string";
    var defaultValue = typeof valueDefinition == "string" ? undefined : valueDefinition.default;
    var read = readers[type];
    return _a = {},
        _a[key] = {
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
        _a["has" + capitalize(key)] = {
            get: function () {
                return defaultValue != undefined || this.data.has(key);
            }
        },
        _a;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUU3QyxjQUFjO0FBQ2QsTUFBTSxrQ0FBcUMsV0FBMkI7SUFDcEUsSUFBTSxNQUFNLEdBQUcsMEJBQTBCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ2hFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQVUsRUFBRSxlQUFlO1FBQy9DLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDLEVBQUUsRUFBMkIsQ0FBQyxDQUFBO0FBQ2pDLENBQUM7QUFFRCxzQ0FBeUMsZUFBZ0M7O0lBQ3ZFLElBQU0sR0FBRyxHQUFHLE9BQU8sZUFBZSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFBO0lBQ3ZGLElBQU0sSUFBSSxHQUFHLE9BQU8sZUFBZSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQTtJQUM3RixJQUFNLFlBQVksR0FBRyxPQUFPLGVBQWUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQTtJQUM3RixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFMUI7UUFDRSxHQUFDLEdBQUcsSUFBRztZQUNMLEdBQUcsRUFBRSxZQUFZLElBQUksU0FBUztnQkFDNUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUN2QixDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDO1lBRTNDLEdBQUcsWUFBbUIsS0FBb0I7Z0JBQ3hDLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ3RCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFHLEtBQU8sQ0FBQyxDQUFBO2lCQUMvQjtZQUNILENBQUM7U0FDRjtRQUVELEdBQUMsUUFBTSxVQUFVLENBQUMsR0FBRyxDQUFHLElBQUc7WUFDekIsR0FBRyxFQUFIO2dCQUNFLE9BQU8sWUFBWSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN4RCxDQUFDO1NBQ0Y7V0FDRjtBQUNILENBQUM7QUFRRCx3QkFBMkIsR0FBVyxFQUFFLElBQVksRUFBRSxZQUFlO0lBQ25FLE9BQU87UUFDTCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25ELENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxvQkFBdUIsR0FBVyxFQUFFLElBQVk7SUFDOUMsT0FBTztRQUNMLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNELE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQStCLGFBQWEsT0FBRyxDQUFDLENBQUE7U0FDakU7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUE7QUFDSCxDQUFDO0FBSUQsSUFBTSxPQUFPLEdBQStCO0lBQzFDLE9BQU8sRUFBUCxVQUFRLEtBQWE7UUFDbkIsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELE9BQU8sRUFBUCxVQUFRLEtBQWE7UUFDbkIsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxLQUFLLEVBQUwsVUFBTSxLQUFhO1FBQ2pCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxNQUFNLEVBQU4sVUFBTyxLQUFhO1FBQ2xCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztDQUNGLENBQUEifQ==