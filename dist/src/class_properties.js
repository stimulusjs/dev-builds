import { readInheritableStaticArray } from "./inheritable_static_array";
import { dasherize } from "./string_helpers";
import { propertiesForValueDefinition } from "./value_properties";
/** @hidden */
export function ClassPropertiesBlessing(constructor) {
    var classes = readInheritableStaticArray(constructor, "classes");
    return classes.reduce(function (properties, classDefinition) {
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(name) {
    return propertiesForValueDefinition({
        name: name + "Class",
        type: "string",
        default: function () {
            return this.identifier + "--" + dasherize(name);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc19wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUM1QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUVqRSxjQUFjO0FBQ2QsTUFBTSxrQ0FBcUMsV0FBMkI7SUFDcEUsSUFBTSxPQUFPLEdBQUcsMEJBQTBCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ2xFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQVUsRUFBRSxlQUFlO1FBQ2hELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDLEVBQUUsRUFBMkIsQ0FBQyxDQUFBO0FBQ2pDLENBQUM7QUFFRCxzQ0FBc0MsSUFBWTtJQUNoRCxPQUFPLDRCQUE0QixDQUFDO1FBQ2xDLElBQUksRUFBSyxJQUFJLFVBQU87UUFDcEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPO1lBQ0wsT0FBVSxJQUFJLENBQUMsVUFBVSxVQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUcsQ0FBQTtRQUNqRCxDQUFDO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyJ9