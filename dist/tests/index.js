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
import { TestCase } from "@stimulus/test";
import { identifierForContextKey } from "../webpack-helpers";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUU1RDtJQUFrQyxzQ0FBUTtJQUF6Qzs7SUE0QkQsQ0FBQztJQTNCQyxtRUFBcUMsR0FBckM7UUFDRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0lBRUQsMEVBQTRDLEdBQTVDO1FBQ0UsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0lBRUQsZ0VBQWtDLEdBQWxDO1FBQ0UsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGdDQUFnQyxFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFDekYsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLG1DQUFtQyxFQUFFLG1CQUFtQixDQUFDLENBQUE7SUFDakcsQ0FBQztJQUVELDhEQUFnQyxHQUFoQztRQUNFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxpQ0FBaUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1FBQzVGLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxvQ0FBb0MsRUFBRSxzQkFBc0IsQ0FBQyxDQUFBO0lBQ3JHLENBQUM7SUFFRCw2REFBZ0MsR0FBaEMsVUFBaUMsVUFBa0IsRUFBRSxrQkFBMkI7UUFDOUUsSUFBTSxnQkFBZ0IsR0FBRyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUE1QkEsQ0FBaUMsUUFBUSxHQTRCeEMsQ0FBQyxZQUFZLEVBQUUsQ0FBQSJ9