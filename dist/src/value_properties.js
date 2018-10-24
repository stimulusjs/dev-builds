import { readInheritableStaticArray } from "./inheritable_static_array";
import { capitalize } from "./string_helpers";
/** @hidden */
export function ValuePropertiesBlessing(constructor) {
    var valueDefinitions = readInheritableStaticArray(constructor, "values");
    var propertyDescriptorMap = {
        valueDescriptorMap: {
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
    date: function (value) {
        var numericValue = Number(value);
        var date = new Date(isNaN(numericValue) ? value : numericValue);
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date \"" + value + "\"");
        }
        else {
            return date;
        }
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
    date: function (value) {
        if (value && typeof value.toISOString == "function") {
            return value.toISOString();
        }
        else {
            return "" + value;
        }
    },
    json: function (value) {
        return JSON.stringify(value);
    },
    default: function (value) {
        return "" + value;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUU3QyxjQUFjO0FBQ2QsTUFBTSxrQ0FBcUMsV0FBMkI7SUFDcEUsSUFBTSxnQkFBZ0IsR0FBRywwQkFBMEIsQ0FBcUIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzlGLElBQU0scUJBQXFCLEdBQTBCO1FBQ25ELGtCQUFrQixFQUFFO1lBQ2xCLEdBQUc7Z0JBQUgsaUJBTUM7Z0JBTEMsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsZUFBZTs7b0JBQ3JELElBQU0sZUFBZSxHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFBO29CQUM3RCxJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDM0UsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLGFBQWEsSUFBRyxlQUFlLE1BQUcsQ0FBQTtnQkFDcEUsQ0FBQyxFQUFFLEVBQXdCLENBQUMsQ0FBQTtZQUM5QixDQUFDO1NBQ0Y7S0FDRixDQUFBO0lBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxVQUFVLEVBQUUsZUFBZTtRQUN6RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLDRCQUE0QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUE7QUFDM0IsQ0FBQztBQUVELGNBQWM7QUFDZCxNQUFNLHVDQUEwQyxlQUFnQzs7SUFDeEUsSUFBQSwwQ0FBeUUsRUFBdkUsY0FBSSxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsOEJBQVksQ0FBMEM7SUFDL0UsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQTtJQUVwRTtRQUNFLEdBQUMsSUFBSSxJQUFHO1lBQ04sR0FBRyxFQUFFLFlBQVksS0FBSyxTQUFTO2dCQUM3QixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7WUFFM0MsR0FBRyxZQUFtQixLQUFvQjtnQkFDeEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO29CQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDdEI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2lCQUNqQztZQUNILENBQUM7U0FDRjtRQUVELEdBQUMsUUFBTSxVQUFVLENBQUMsSUFBSSxDQUFHLElBQUc7WUFDMUIsR0FBRyxFQUFIO2dCQUNFLE9BQU8sWUFBWSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6RCxDQUFDO1NBQ0Y7V0FDRjtBQUNILENBQUM7QUFhRCw4QkFBOEIsZUFBZ0M7SUFDNUQsSUFBTSxHQUFHLEdBQUcsT0FBTyxlQUFlLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUE7SUFDdkYsSUFBSSxDQUFDLEdBQUc7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3hDLE9BQU87UUFDTCxHQUFHLEtBQUE7UUFDSCxJQUFJLEVBQUssR0FBRyxVQUFPO1FBQ25CLElBQUksRUFBRSxPQUFPLGVBQWUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxRQUFRO1FBQ3RGLFlBQVksRUFBRSxPQUFPLGVBQWUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFlBQVk7S0FDNUYsQ0FBQTtBQUNILENBQUM7QUFFRCx3QkFBMkIsR0FBVyxFQUFFLElBQVksRUFBRSxZQUFlO0lBQ25FLE9BQU87UUFDTCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25ELENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxvQkFBdUIsR0FBVyxFQUFFLElBQVk7SUFDOUMsT0FBTztRQUNMLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNELE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQStCLGFBQWEsT0FBRyxDQUFDLENBQUE7U0FDakU7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUE7QUFDSCxDQUFDO0FBSUQsSUFBTSxPQUFPLEdBQStCO0lBQzFDLE9BQU8sRUFBUCxVQUFRLEtBQWE7UUFDbkIsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELElBQUksRUFBSixVQUFLLEtBQWE7UUFDaEIsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xDLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUVqRSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFpQixLQUFLLE9BQUcsQ0FBQyxDQUFBO1NBQzNDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztJQUVELElBQUksRUFBSixVQUFLLEtBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxNQUFNLEVBQU4sVUFBTyxLQUFhO1FBQ2xCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxNQUFNLEVBQU4sVUFBTyxLQUFhO1FBQ2xCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUFJRCxJQUFNLE9BQU8sR0FBK0I7SUFDMUMsSUFBSSxZQUFDLEtBQVU7UUFDYixJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxXQUFXLElBQUksVUFBVSxFQUFFO1lBQ25ELE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQzNCO2FBQU07WUFDTCxPQUFPLEtBQUcsS0FBTyxDQUFBO1NBQ2xCO0lBQ0gsQ0FBQztJQUVELElBQUksWUFBQyxLQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCxPQUFPLFlBQUMsS0FBVTtRQUNoQixPQUFPLEtBQUcsS0FBTyxDQUFBO0lBQ25CLENBQUM7Q0FDRixDQUFBIn0=