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
var ControllerTestCase = /** @class */ (function (_super) {
    __extends(ControllerTestCase, _super);
    function ControllerTestCase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.identifier = "test";
        _this.fixtureHTML = "<div data-controller=\"" + _this.identifiers.join(" ") + "\">";
        return _this;
    }
    ControllerTestCase.prototype.setupApplication = function () {
        var _this = this;
        this.identifiers.forEach(function (identifier) {
            _this.application.register(identifier, _this.controllerConstructor);
        });
    };
    Object.defineProperty(ControllerTestCase.prototype, "controller", {
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
    Object.defineProperty(ControllerTestCase.prototype, "identifiers", {
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
    Object.defineProperty(ControllerTestCase.prototype, "controllers", {
        get: function () {
            return this.application.controllers;
        },
        enumerable: true,
        configurable: true
    });
    return ControllerTestCase;
}(ApplicationTestCase));
export { ControllerTestCase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcl90ZXN0X2Nhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2NvbnRyb2xsZXJfdGVzdF9jYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUc3RDtJQUEyQyxzQ0FBbUI7SUFBOUQ7UUFBQSxxRUErQkM7UUE5QkMsZ0JBQVUsR0FBc0IsTUFBTSxDQUFBO1FBRXRDLGlCQUFXLEdBQUcsNEJBQXlCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFJLENBQUE7O0lBNEJ2RSxDQUFDO0lBMUJDLDZDQUFnQixHQUFoQjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNuRSxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzQkFBSSwwQ0FBVTthQUFkO1lBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN0QyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxPQUFPLFVBQVUsQ0FBQTthQUNsQjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7YUFDM0M7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFXO2FBQWY7WUFDRSxJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxRQUFRLEVBQUU7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDekI7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO2FBQ3ZCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQXlCLENBQUE7UUFDbkQsQ0FBQzs7O09BQUE7SUFDSCx5QkFBQztBQUFELENBQUMsQUEvQkQsQ0FBMkMsbUJBQW1CLEdBK0I3RCJ9