import { parseDescriptorString, stringifyEventTarget } from "./action_descriptor";
var Action = /** @class */ (function () {
    function Action(element, index, descriptor) {
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
    }
    Action.forToken = function (token) {
        return new this(token.element, token.index, parseDescriptorString(token.content));
    };
    Action.prototype.toString = function () {
        var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
        return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
    };
    Object.defineProperty(Action.prototype, "eventTargetName", {
        get: function () {
            return stringifyEventTarget(this.eventTarget);
        },
        enumerable: true,
        configurable: true
    });
    return Action;
}());
export { Action };
var defaultEventNames = {
    "a": function (e) { return "click"; },
    "button": function (e) { return "click"; },
    "form": function (e) { return "submit"; },
    "input": function (e) { return e.getAttribute("type") == "submit" ? "click" : "change"; },
    "select": function (e) { return "change"; },
    "textarea": function (e) { return "change"; }
};
export function getDefaultEventNameForElement(element) {
    var tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
        return defaultEventNames[tagName](element);
    }
}
function error(message) {
    throw new Error(message);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvcmUvYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUduRztJQVlFLGdCQUFZLE9BQWdCLEVBQUUsS0FBYSxFQUFFLFVBQXFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQU8sT0FBTyxDQUFBO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQVMsS0FBSyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUE7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBSyxVQUFVLENBQUMsU0FBUyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2hILElBQUksQ0FBQyxVQUFVLEdBQUksVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsVUFBVSxHQUFJLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDMUUsQ0FBQztJQVhNLGVBQVEsR0FBZixVQUFnQixLQUFZO1FBQzFCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ25GLENBQUM7SUFXRCx5QkFBUSxHQUFSO1FBQ0UsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsZUFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQzlFLE9BQU8sS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsVUFBSyxJQUFJLENBQUMsVUFBVSxTQUFJLElBQUksQ0FBQyxVQUFZLENBQUE7SUFDckYsQ0FBQztJQUVELHNCQUFZLG1DQUFlO2FBQTNCO1lBQ0UsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDL0MsQ0FBQzs7O09BQUE7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQzs7QUFFRCxJQUFNLGlCQUFpQixHQUF3RDtJQUM3RSxHQUFHLEVBQVMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLEVBQVAsQ0FBTztJQUN4QixRQUFRLEVBQUksVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLEVBQVAsQ0FBTztJQUN4QixNQUFNLEVBQU0sVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUTtJQUN6QixPQUFPLEVBQUssVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQXZELENBQXVEO0lBQ3hFLFFBQVEsRUFBSSxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRO0lBQ3pCLFVBQVUsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRO0NBQzFCLENBQUE7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsT0FBZ0I7SUFDNUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM3QyxJQUFJLE9BQU8sSUFBSSxpQkFBaUIsRUFBRTtRQUNoQyxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzNDO0FBQ0gsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLE9BQWU7SUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUMxQixDQUFDIn0=