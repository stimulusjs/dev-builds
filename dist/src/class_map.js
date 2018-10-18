import { parseDescriptorString } from "./class_descriptor";
var ClassMap = /** @class */ (function () {
    function ClassMap(scope) {
        this.scope = scope;
    }
    ClassMap.prototype.has = function (name) {
        return name in this.values;
    };
    ClassMap.prototype.get = function (name) {
        return this.values[name];
    };
    Object.defineProperty(ClassMap.prototype, "values", {
        get: function () {
            var identifier = this.identifier;
            return this.descriptorStrings.reduce(function (values, descriptorString) {
                var descriptor = parseDescriptorString(descriptorString);
                if (descriptor && descriptor.identifier == identifier) {
                    values[descriptor.name] = descriptor.className;
                }
                return values;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMap.prototype, "descriptorStrings", {
        get: function () {
            var value = this.element.getAttribute("data-class") || "";
            return value.split(/\s+/);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMap.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMap.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    return ClassMap;
}());
export { ClassMap };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfbWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsYXNzX21hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUUxRDtJQUdFLGtCQUFZLEtBQVk7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBSSxJQUFZO1FBQ2QsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUM1QixDQUFDO0lBRUQsc0JBQUcsR0FBSCxVQUFJLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVELHNCQUFJLDRCQUFNO2FBQVY7WUFDVSxJQUFBLDRCQUFVLENBQVM7WUFDM0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLGdCQUFnQjtnQkFDNUQsSUFBTSxVQUFVLEdBQUcscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtnQkFDMUQsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7b0JBQ3JELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQTtpQkFDL0M7Z0JBQ0QsT0FBTyxNQUFNLENBQUE7WUFDZixDQUFDLEVBQUUsRUFBZ0MsQ0FBQyxDQUFBO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQWlCO2FBQXJCO1lBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzNELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQyJ9