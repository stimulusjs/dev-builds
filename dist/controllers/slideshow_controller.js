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
    default_1.prototype.initialize = function () {
        this.showCurrentSlide();
    };
    default_1.prototype.next = function () {
        if (this.index < this.lastIndex) {
            this.index++;
        }
    };
    default_1.prototype.previous = function () {
        if (this.index > 0) {
            this.index--;
        }
    };
    default_1.prototype.showCurrentSlide = function () {
        var _this = this;
        this.slideTargets.forEach(function (element, index) {
            element.classList.toggle("slide--current", index == _this.index);
        });
    };
    Object.defineProperty(default_1.prototype, "index", {
        get: function () {
            if (this.data.has("index")) {
                return parseInt(this.data.get("index"));
            }
            else {
                return 0;
            }
        },
        set: function (value) {
            this.data.set("index", value);
            this.showCurrentSlide();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "lastIndex", {
        get: function () {
            return this.slideTargets.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    default_1.targets = ["slide"];
    return default_1;
}(Controller));
export default default_1;
