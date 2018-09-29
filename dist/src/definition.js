import { bless } from "./blessing";
/** @hidden */
export function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: bless(definition.controllerConstructor)
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFRbEMsY0FBYztBQUNkLE1BQU0sMEJBQTBCLFVBQXNCO0lBQ3BELE9BQU87UUFDTCxVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7UUFDakMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztLQUMvRCxDQUFBO0FBQ0gsQ0FBQyJ9