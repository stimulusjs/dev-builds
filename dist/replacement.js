import { patchOuter, elementOpen, elementClose, text } from "incremental-dom";
var Replacement = /** @class */ (function () {
    function Replacement(element, html) {
        this.element = element;
        this.html = html;
        this.patch = PatchCompiler.compilePatchForElement(this.newElement);
    }
    Object.defineProperty(Replacement.prototype, "newElement", {
        get: function () {
            var container = document.createElement("body");
            container.innerHTML = this.html;
            return container.firstElementChild;
        },
        enumerable: true,
        configurable: true
    });
    Replacement.prototype.perform = function () {
        patchOuter(this.element, this.patch);
    };
    return Replacement;
}());
export { Replacement };
var PatchCompiler = /** @class */ (function () {
    function PatchCompiler(element, context) {
        if (context === void 0) { context = defaultContext; }
        this.element = element;
        this.context = context;
    }
    PatchCompiler.compilePatchForElement = function (element, context) {
        return element ? new this(element, context).callback : emptyCallback;
    };
    Object.defineProperty(PatchCompiler.prototype, "callback", {
        get: function () {
            var instructions = this.instructions;
            return function () { return instructions.forEach(function (_a) {
                var fn = _a[0], args = _a[1];
                return fn.apply(null, args);
            }); };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchCompiler.prototype, "instructions", {
        get: function () {
            var open = [this.context.open, [this.tagName, null, null].concat(this.attributes)];
            var close = [this.context.close, [this.tagName]];
            return [open].concat(this.bodyInstructions, [close]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchCompiler.prototype, "bodyInstructions", {
        get: function () {
            var _this = this;
            return Array.from(this.element.childNodes).reduce(function (instructions, node) {
                return instructions.concat(_this.textInstructionsForNode(node), _this.elementInstructionsForNode(node));
            }, []);
        },
        enumerable: true,
        configurable: true
    });
    PatchCompiler.prototype.textInstructionsForNode = function (node) {
        if (node.nodeType == Node.TEXT_NODE) {
            var value = node.textContent || "";
            return [[this.context.text, [value]]];
        }
        return [];
    };
    PatchCompiler.prototype.elementInstructionsForNode = function (node) {
        if (node.nodeType == Node.ELEMENT_NODE) {
            var patcher = new PatchCompiler(node, this.context);
            return patcher.instructions;
        }
        return [];
    };
    Object.defineProperty(PatchCompiler.prototype, "attributes", {
        get: function () {
            var attributes = Array.from(this.element.attributes);
            return attributes.reduce(function (_, _a) {
                var name = _a.name, value = _a.value;
                return _.concat([name, value]);
            }, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchCompiler.prototype, "tagName", {
        get: function () {
            return this.element.tagName.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    return PatchCompiler;
}());
var defaultContext = { open: elementOpen, close: elementClose, text: text };
var emptyCallback = function () { };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVwbGFjZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBRTdFO0lBS0UscUJBQVksT0FBZ0IsRUFBRSxJQUFZO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBRUQsc0JBQVksbUNBQVU7YUFBdEI7WUFDRSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUMvQixPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQTtRQUNwQyxDQUFDOzs7T0FBQTtJQUVELDZCQUFPLEdBQVA7UUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQzs7QUFFRDtJQVFFLHVCQUFZLE9BQWdCLEVBQUUsT0FBaUM7UUFBakMsd0JBQUEsRUFBQSx3QkFBaUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQVBNLG9DQUFzQixHQUE3QixVQUE4QixPQUF1QixFQUFFLE9BQWlCO1FBQ3RFLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFP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