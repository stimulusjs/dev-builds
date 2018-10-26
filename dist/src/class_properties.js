import { readInheritableStaticArrayValues } from "./inheritable_statics";
import { capitalize, dasherize } from "./string_helpers";
/** @hidden */
export function ClassPropertiesBlessing(constructor) {
    var classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce(function (properties, classDefinition) {
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    var _a;
    var name = key + "Class", defaultName = "default" + capitalize(name);
    return _a = {},
        _a[name] = {
            get: function () {
                if (this.data.has(key)) {
                    return this.data.get(key);
                }
                else {
                    return this[defaultName];
                }
            }
        },
        _a[defaultName] = {
            get: function () {
                return this.identifier + "--" + dasherize(key);
            }
        },
        _a;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc19wcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFeEQsY0FBYztBQUNkLE1BQU0sa0NBQXFDLFdBQTJCO0lBQ3BFLElBQU0sT0FBTyxHQUFHLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUN4RSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxVQUFVLEVBQUUsZUFBZTtRQUNoRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLDRCQUE0QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQyxFQUFFLEVBQTJCLENBQUMsQ0FBQTtBQUNqQyxDQUFDO0FBRUQsc0NBQXNDLEdBQVc7O0lBQy9DLElBQU0sSUFBSSxHQUFNLEdBQUcsVUFBTyxFQUFFLFdBQVcsR0FBRyxZQUFVLFVBQVUsQ0FBQyxJQUFJLENBQUcsQ0FBQTtJQUV0RTtRQUNFLEdBQUMsSUFBSSxJQUFHO1lBQ04sR0FBRztnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUMxQjtxQkFBTTtvQkFDTCxPQUFRLElBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtpQkFDbEM7WUFDSCxDQUFDO1NBQ0Y7UUFFRCxHQUFDLFdBQVcsSUFBRztZQUNiLEdBQUc7Z0JBQ0QsT0FBVSxJQUFJLENBQUMsVUFBVSxVQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUcsQ0FBQTtZQUNoRCxDQUFDO1NBQ0Y7V0FDRjtBQUNILENBQUMifQ==