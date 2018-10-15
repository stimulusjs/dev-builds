export function readInheritableStaticArray(constructor, propertyName) {
    var ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce(function (values, constructor) {
        getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) { return values.add(name); });
        return values;
    }, new Set));
}
function getAncestorsForConstructor(constructor) {
    var ancestors = [];
    while (constructor) {
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors;
}
function getOwnStaticArrayValues(constructor, propertyName) {
    var definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGFibGVfc3RhdGljX2FycmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2luaGVyaXRhYmxlX3N0YXRpY19hcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLHFDQUFvRCxXQUEyQixFQUFFLFlBQW9CO0lBQ3pHLElBQU0sU0FBUyxHQUFHLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLFdBQVc7UUFDckQsdUJBQXVCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQTtRQUNwRixPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUMsRUFBRSxJQUFJLEdBQWEsQ0FBQyxDQUFDLENBQUE7QUFDeEIsQ0FBQztBQUVELG9DQUF1QyxXQUEyQjtJQUNoRSxJQUFNLFNBQVMsR0FBc0IsRUFBRSxDQUFBO0lBQ3ZDLE9BQU8sV0FBVyxFQUFFO1FBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDM0IsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7S0FDakQ7SUFDRCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQsaUNBQW9DLFdBQTJCLEVBQUUsWUFBb0I7SUFDbkYsSUFBTSxVQUFVLEdBQUksV0FBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNyRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0FBQ3BELENBQUMifQ==