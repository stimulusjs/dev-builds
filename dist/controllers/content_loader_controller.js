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
    default_1.prototype.connect = function () {
        this.load();
        if (this.data.has("refreshInterval")) {
            this.startRefreshing();
        }
    };
    default_1.prototype.disconnect = function () {
        this.stopRefreshing();
    };
    default_1.prototype.load = function () {
        var _this = this;
        fetch(this.data.get("url"))
            .then(function (response) { return response.text(); })
            .then(function (html) {
            _this.element.innerHTML = html;
        });
    };
    default_1.prototype.startRefreshing = function () {
        var _this = this;
        this.refreshTimer = setInterval(function () {
            _this.load();
        }, this.data.get("refreshInterval"));
    };
    default_1.prototype.stopRefreshing = function () {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
        }
    };
    return default_1;
}(Controller));
export default default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9sb2FkZXJfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2NvbnRlbnRfbG9hZGVyX2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFckM7SUFBNkIsNkJBQVU7SUFBdkM7O0lBZ0NBLENBQUM7SUEvQkMsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUVYLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7U0FDdkI7SUFDSCxDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUFBLGlCQU1DO1FBTEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxtQ0FBZSxHQUFmO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUM5QixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxrQ0FBYyxHQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDakM7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBaENELENBQTZCLFVBQVUsR0FnQ3RDIn0=