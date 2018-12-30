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
import { TestCase } from "@stimulus/test";
import { identifierForContextKey } from "../index";
(/** @class */ (function (_super) {
    __extends(WebpackHelperTests, _super);
    function WebpackHelperTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebpackHelperTests.prototype["test filenames require an extension"] = function () {
        this.assertContextKeyMapsToIdentifier("./hello_controller", undefined);
        this.assertContextKeyMapsToIdentifier("./hello_controller.js", "hello");
        this.assertContextKeyMapsToIdentifier("./hello_controller.ts", "hello");
    };
    WebpackHelperTests.prototype["test filenames require a controller suffix"] = function () {
        this.assertContextKeyMapsToIdentifier("./hello.js", undefined);
        this.assertContextKeyMapsToIdentifier("./hello_world.js", undefined);
        this.assertContextKeyMapsToIdentifier("./hello_controller.js", "hello");
        this.assertContextKeyMapsToIdentifier("./hello-controller.js", "hello");
    };
    WebpackHelperTests.prototype["test underscores map to one dash"] = function () {
        this.assertContextKeyMapsToIdentifier("./remote_content_controller.js", "remote-content");
        this.assertContextKeyMapsToIdentifier("./date_range_editor_controller.js", "date-range-editor");
    };
    WebpackHelperTests.prototype["test slashes map to two dashes"] = function () {
        this.assertContextKeyMapsToIdentifier("./users/list_item_controller.js", "users--list-item");
        this.assertContextKeyMapsToIdentifier("./my/navigation/menu_controller.js", "my--navigation--menu");
    };
    WebpackHelperTests.prototype.assertContextKeyMapsToIdentifier = function (contextKey, expectedIdentifier) {
        var actualIdentifier = identifierForContextKey(contextKey);
        this.assert.equal(actualIdentifier, expectedIdentifier);
    };
    return WebpackHelperTests;
}(TestCase))).defineModule();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sVUFBVSxDQUFBO0FBRWxEO0lBQWtDLHNDQUFRO0lBQXpDOztJQTRCRCxDQUFDO0lBM0JDLG1FQUFxQyxHQUFyQztRQUNFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFFRCwwRUFBNEMsR0FBNUM7UUFDRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFFRCxnRUFBa0MsR0FBbEM7UUFDRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsZ0NBQWdDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUN6RixJQUFJLENBQUMsZ0NBQWdDLENBQUMsbUNBQW1DLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtJQUNqRyxDQUFDO0lBRUQsOERBQWdDLEdBQWhDO1FBQ0UsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGlDQUFpQyxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFDNUYsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLG9DQUFvQyxFQUFFLHNCQUFzQixDQUFDLENBQUE7SUFDckcsQ0FBQztJQUVELDZEQUFnQyxHQUFoQyxVQUFpQyxVQUFrQixFQUFFLGtCQUEyQjtRQUM5RSxJQUFNLGdCQUFnQixHQUFHLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUE7SUFDekQsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTVCQSxDQUFpQyxRQUFRLEdBNEJ4QyxDQUFDLFlBQVksRUFBRSxDQUFBIn0=