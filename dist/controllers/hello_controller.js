var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Controller } from "stimulus";
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.greet = function () {
        alert("Hello, " + this.name + "!");
    };
    Object.defineProperty(default_1.prototype, "name", {
        get: function () {
            return this.nameTarget.value;
        },
        enumerable: true,
        configurable: true
    });
    default_1.targets = ["name"];
    return default_1;
}(Controller));
export default default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG9fY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFckM7SUFBNkIsNkJBQVU7SUFBdkM7O0lBVUEsQ0FBQztJQVBDLHlCQUFLLEdBQUw7UUFDRSxLQUFLLENBQUMsWUFBVSxJQUFJLENBQUMsSUFBSSxNQUFHLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRUQsc0JBQUksMkJBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFSTSxpQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFTM0IsZ0JBQUM7Q0FBQSxBQVZELENBQTZCLFVBQVUsR0FVdEMifQ==