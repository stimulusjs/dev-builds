var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ApplicationTestCase } from "./application_test_case";
import { Controller } from "../../src/controller";
var ControllerTests = /** @class */ (function (_super) {
    __extends(ControllerTests, _super);
    function ControllerTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.identifier = "test";
        _this.fixtureHTML = "<div data-controller=\"" + _this.identifiers.join(" ") + "\">";
        return _this;
    }
    ControllerTests.prototype.setupApplication = function () {
        var _this = this;
        this.identifiers.forEach(function (identifier) {
            _this.application.register(identifier, _this.controllerConstructor);
        });
    };
    Object.defineProperty(ControllerTests.prototype, "controller", {
        get: function () {
            var controller = this.controllers[0];
            if (controller) {
                return controller;
            }
            else {
                throw new Error("no controller connected");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControllerTests.prototype, "identifiers", {
        get: function () {
            if (typeof this.identifier == "string") {
                return [this.identifier];
            }
            else {
                return this.identifier;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControllerTests.prototype, "controllers", {
        get: function () {
            return this.application.controllers;
        },
        enumerable: true,
        configurable: true
    });
    return ControllerTests;
}(ApplicationTestCase));
export { ControllerTests };
export function ControllerTestCase(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.controllerConstructor = constructor || Controller;
            return _this;
        }
        return class_1;
    }(ControllerTests));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcl90ZXN0X2Nhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L2Nhc2VzL2NvbnRyb2xsZXJfdGVzdF9jYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUU3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFFakQ7SUFBMkQsbUNBQW1CO0lBQTlFO1FBQUEscUVBK0JDO1FBOUJDLGdCQUFVLEdBQXNCLE1BQU0sQ0FBQTtRQUV0QyxpQkFBVyxHQUFHLDRCQUF5QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBSSxDQUFBOztJQTRCdkUsQ0FBQztJQTFCQywwQ0FBZ0IsR0FBaEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsc0JBQUksdUNBQVU7YUFBZDtZQUNFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDdEMsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsT0FBTyxVQUFVLENBQUE7YUFDbEI7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO2FBQzNDO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBVzthQUFmO1lBQ0UsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksUUFBUSxFQUFFO2dCQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQ3pCO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTthQUN2QjtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUF5QixDQUFBO1FBQ25ELENBQUM7OztPQUFBO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBL0JELENBQTJELG1CQUFtQixHQStCN0U7O0FBSUQsTUFBTSw2QkFBbUQsV0FBNEI7SUFDbkYsT0FBTztRQUFjLDJCQUFrQjtRQUFoQztZQUFBLHFFQUVOO1lBREMsMkJBQXFCLEdBQUcsV0FBVyxJQUFJLFVBQWlCLENBQUE7O1FBQzFELENBQUM7UUFBRCxjQUFDO0lBQUQsQ0FBQyxBQUZNLENBQWMsZUFBZSxFQUU1QixDQUFBO0FBQ1YsQ0FBQyJ9