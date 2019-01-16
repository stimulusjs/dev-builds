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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzaG93X2NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy9zbGlkZXNob3dfY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUVyQztJQUE2Qiw2QkFBVTtJQUF2Qzs7SUF5Q0EsQ0FBQztJQXRDQyw4QkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7SUFDekIsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjtJQUNILENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjtJQUNILENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqRSxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzQkFBSSw0QkFBSzthQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTthQUN4QztpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQTthQUNUO1FBQ0gsQ0FBQzthQUVELFVBQVUsS0FBSztZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUN6QixDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLGdDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNyQyxDQUFDOzs7T0FBQTtJQXZDTSxpQkFBTyxHQUFHLENBQUUsT0FBTyxDQUFFLENBQUE7SUF3QzlCLGdCQUFDO0NBQUEsQUF6Q0QsQ0FBNkIsVUFBVSxHQXlDdEMifQ==