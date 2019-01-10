import { readInheritableStaticArrayValues } from "./inheritable_statics";
import { capitalize } from "./string_helpers";
/** @hidden */
export function TargetPropertiesBlessing(constructor) {
    var targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce(function (properties, targetDefinition) {
        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
}
function propertiesForTargetDefinition(name) {
    var _a;
    return _a = {},
        _a[name + "Target"] = {
            get: function () {
                var target = this.targets.find(name);
                if (target) {
                    return target;
                }
                else {
                    throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
                }
            }
        },
        _a[name + "Targets"] = {
            get: function () {
                return this.targets.findAll(name);
            }
        },
        _a["has" + capitalize(name) + "Target"] = {
            get: function () {
                return this.targets.has(name);
            }
        },
        _a;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3Byb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0X3Byb3BlcnRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBRTdDLGNBQWM7QUFDZCxNQUFNLG1DQUFzQyxXQUEyQjtJQUNyRSxJQUFNLE9BQU8sR0FBRyxnQ0FBZ0MsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDeEUsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsVUFBVSxFQUFFLGdCQUFnQjtRQUNqRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtJQUNuRixDQUFDLEVBQUUsRUFBMkIsQ0FBQyxDQUFBO0FBQ2pDLENBQUM7QUFFRCx1Q0FBdUMsSUFBWTs7SUFDakQ7UUFDRSxHQUFJLElBQUksV0FBUSxJQUFHO1lBQ2pCLEdBQUc7Z0JBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3RDLElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFBO2lCQUNkO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQTJCLElBQUksQ0FBQyxVQUFVLFNBQUksSUFBSSxPQUFHLENBQUMsQ0FBQTtpQkFDdkU7WUFDSCxDQUFDO1NBQ0Y7UUFFRCxHQUFJLElBQUksWUFBUyxJQUFHO1lBQ2xCLEdBQUc7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQyxDQUFDO1NBQ0Y7UUFFRCxHQUFDLFFBQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFRLElBQUc7WUFDaEMsR0FBRztnQkFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQy9CLENBQUM7U0FDRjtXQUNGO0FBQ0gsQ0FBQyJ9