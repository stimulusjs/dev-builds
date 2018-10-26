/** @hidden */
export function defineTargetProperties(constructor) {
    const prototype = constructor.prototype;
    const targetNames = getTargetNamesForConstructor(constructor);
    targetNames.forEach(name => defineLinkedProperties(prototype, {
        [`${name}Target`]: {
            get() {
                const target = this.targets.find(name);
                if (target) {
                    return target;
                }
                else {
                    throw new Error(`Missing target element "${this.identifier}.${name}"`);
                }
            }
        },
        [`${name}Targets`]: {
            get() {
                return this.targets.findAll(name);
            }
        },
        [`has${capitalize(name)}Target`]: {
            get() {
                return this.targets.has(name);
            }
        }
    }));
}
function getTargetNamesForConstructor(constructor) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((targetNames, constructor) => {
        getOwnTargetNamesForConstructor(constructor).forEach(name => targetNames.add(name));
        return targetNames;
    }, new Set));
}
function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while (constructor) {
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors;
}
function getOwnTargetNamesForConstructor(constructor) {
    const definition = constructor["targets"];
    return Array.isArray(definition) ? definition : [];
}
function defineLinkedProperties(object, properties) {
    Object.keys(properties).forEach((name) => {
        if (!(name in object)) {
            const descriptor = properties[name];
            Object.defineProperty(object, name, descriptor);
        }
    });
}
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
//# sourceMappingURL=target_properties.js.map