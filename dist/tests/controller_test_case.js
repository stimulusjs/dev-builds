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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcl90ZXN0X2Nhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdHMvY29udHJvbGxlcl90ZXN0X2Nhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBRzdEO0lBQTJDLHNDQUFtQjtJQUE5RDtRQUFBLHFFQStCQztRQTlCQyxnQkFBVSxHQUFzQixNQUFNLENBQUE7UUFFdEMsaUJBQVcsR0FBRyw0QkFBeUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQUksQ0FBQTs7SUE0QnZFLENBQUM7SUExQkMsNkNBQWdCLEdBQWhCO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ25FLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNCQUFJLDBDQUFVO2FBQWQ7WUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3RDLElBQUksVUFBVSxFQUFFO2dCQUNkLE9BQU8sVUFBVSxDQUFBO2FBQ2xCO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTthQUMzQztRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVc7YUFBZjtZQUNFLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsRUFBRTtnQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUN6QjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7YUFDdkI7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBeUIsQ0FBQTtRQUNuRCxDQUFDOzs7T0FBQTtJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUEyQyxtQkFBbUIsR0ErQjdEIn0=