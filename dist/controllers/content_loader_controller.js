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
