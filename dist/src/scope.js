import { DataMap } from "./data_map";
import { TargetSet } from "./target_set";
import { attributeValueContainsToken } from "./selectors";
export class Scope {
    constructor(schema, identifier, element) {
        this.schema = schema;
        this.identifier = identifier;
        this.element = element;
        this.targets = new TargetSet(this);
        this.data = new DataMap(this);
    }
    findElement(selector) {
        return this.findAllElements(selector)[0];
    }
    findAllElements(selector) {
        const head = this.element.matches(selector) ? [this.element] : [];
        const tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
        return head.concat(tail);
    }
    filterElements(elements) {
        return elements.filter(element => this.containsElement(element));
    }
    containsElement(element) {
        return element.closest(this.controllerSelector) === this.element;
    }
    get controllerSelector() {
        return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
}
//# sourceMappingURL=scope.js.map