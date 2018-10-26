export class DataMap {
    constructor(scope) {
        this.scope = scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get(key) {
        key = this.getFormattedKey(key);
        return this.element.getAttribute(key);
    }
    set(key, value) {
        key = this.getFormattedKey(key);
        this.element.setAttribute(key, value);
        return this.get(key);
    }
    has(key) {
        key = this.getFormattedKey(key);
        return this.element.hasAttribute(key);
    }
    delete(key) {
        if (this.has(key)) {
            key = this.getFormattedKey(key);
            this.element.removeAttribute(key);
            return true;
        }
        else {
            return false;
        }
    }
    getFormattedKey(key) {
        return `data-${this.identifier}-${dasherize(key)}`;
    }
}
function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
}
//# sourceMappingURL=data_map.js.map