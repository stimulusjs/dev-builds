import { readInheritableStaticArrayValues } from "./inheritable_statics";
import { capitalize } from "./string_helpers";
/** @hidden */
export function ClassPropertiesBlessing(constructor) {
    var classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce(function (properties, classDefinition) {
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    var _a;
    var name = key + "Class";
    return _a = {},
        _a[name] = {
            get: function () {
                var classes = this.classes;
                if (classes.has(key)) {
                    return classes.get(key);
                }
                else {
                    var attribute = classes.getAttributeName(key);
                    throw new Error("Missing attribute \"" + attribute + "\"");
                }
            }
        },
        _a["has" + capitalize(name)] = {
            get: function () {
                return this.classes.has(key);
            }
        },
        _a;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc19wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUU3QyxjQUFjO0FBQ2QsTUFBTSxrQ0FBcUMsV0FBMkI7SUFDcEUsSUFBTSxPQUFPLEdBQUcsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ3hFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQVUsRUFBRSxlQUFlO1FBQ2hELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDLEVBQUUsRUFBMkIsQ0FBQyxDQUFBO0FBQ2pDLENBQUM7QUFFRCxzQ0FBc0MsR0FBVzs7SUFDL0MsSUFBTSxJQUFJLEdBQU0sR0FBRyxVQUFPLENBQUE7SUFFMUI7UUFDRSxHQUFDLElBQUksSUFBRztZQUNOLEdBQUc7Z0JBQ08sSUFBQSxzQkFBTyxDQUFTO2dCQUN4QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3BCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDeEI7cUJBQU07b0JBQ0wsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUFzQixTQUFTLE9BQUcsQ0FBQyxDQUFBO2lCQUNwRDtZQUNILENBQUM7U0FDRjtRQUVELEdBQUMsUUFBTSxVQUFVLENBQUMsSUFBSSxDQUFHLElBQUc7WUFDMUIsR0FBRztnQkFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzlCLENBQUM7U0FDRjtXQUNGO0FBQ0gsQ0FBQyJ9