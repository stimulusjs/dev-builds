import { attributeValueContainsToken } from "./selectors";
export class TargetSet {
    constructor(scope) {
        this.scope = scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get schema() {
        return this.scope.schema;
    }
    has(targetName) {
        return this.find(targetName) != null;
    }
    find(...targetNames) {
        const selector = this.getSelectorForTargetNames(targetNames);
        return this.scope.findElement(selector);
    }
    findAll(...targetNames) {
        const selector = this.getSelectorForTargetNames(targetNames);
        return this.scope.findAllElements(selector);
    }
    getSelectorForTargetNames(targetNames) {
        return targetNames.map(targetName => this.getSelectorForTargetName(targetName)).join(", ");
    }
    getSelectorForTargetName(targetName) {
        const targetDescriptor = `${this.identifier}.${targetName}`;
        return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
}
//# sourceMappingURL=target_set.js.map