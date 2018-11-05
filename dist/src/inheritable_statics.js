export function readInheritableStaticArrayValues(constructor, propertyName) {
    var ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce(function (values, constructor) {
        getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) { return values.add(name); });
        return values;
    }, new Set));
}
export function readInheritableStaticObjectPairs(constructor, propertyName) {
    var ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce(function (pairs, constructor) {
        pairs.push.apply(pairs, getOwnStaticObjectPairs(constructor, propertyName));
        return pairs;
    }, []);
}
function getAncestorsForConstructor(constructor) {
    var ancestors = [];
    while (constructor) {
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
    var definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
    var definition = constructor[propertyName];
    return definition ? Object.keys(definition).map(function (key) { return [key, definition[key]]; }) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGFibGVfc3RhdGljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmhlcml0YWJsZV9zdGF0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sMkNBQTBELFdBQTJCLEVBQUUsWUFBb0I7SUFDL0csSUFBTSxTQUFTLEdBQUcsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDekQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsV0FBVztRQUNyRCx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO1FBQ3BGLE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQyxFQUFFLElBQUksR0FBYSxDQUFDLENBQUMsQ0FBQTtBQUN4QixDQUFDO0FBRUQsTUFBTSwyQ0FBaUQsV0FBMkIsRUFBRSxZQUFvQjtJQUN0RyxJQUFNLFNBQVMsR0FBRywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6RCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsV0FBVztRQUN6QyxLQUFLLENBQUMsSUFBSSxPQUFWLEtBQUssRUFBUyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFRLEVBQUM7UUFDeEUsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDLEVBQUUsRUFBbUIsQ0FBQyxDQUFBO0FBQ3pCLENBQUM7QUFFRCxvQ0FBdUMsV0FBMkI7SUFDaEUsSUFBTSxTQUFTLEdBQXNCLEVBQUUsQ0FBQTtJQUN2QyxPQUFPLFdBQVcsRUFBRTtRQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzNCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0tBQ2pEO0lBQ0QsT0FBTyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDNUIsQ0FBQztBQUVELGlDQUFvQyxXQUEyQixFQUFFLFlBQW9CO0lBQ25GLElBQU0sVUFBVSxHQUFJLFdBQW1CLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDckQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtBQUNwRCxDQUFDO0FBRUQsaUNBQXVDLFdBQTJCLEVBQUUsWUFBb0I7SUFDdEYsSUFBTSxVQUFVLEdBQUksV0FBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNyRCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQWdCLEVBQXJDLENBQXFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0FBQ3BHLENBQUMifQ==