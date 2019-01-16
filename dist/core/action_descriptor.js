// capture nos.:            12   23 4               43   1 5   56 7  76
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
export function parseDescriptorString(descriptorString) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern) || [];
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName: matches[2],
        identifier: matches[5],
        methodName: matches[7]
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
        return window;
    }
    else if (eventTargetName == "document") {
        return document;
    }
}
export function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
        return "window";
    }
    else if (eventTarget == document) {
        return "document";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uX2Rlc2NyaXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9hY3Rpb25fZGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSx1RUFBdUU7QUFDdkUsSUFBTSxpQkFBaUIsR0FBRyxnREFBZ0QsQ0FBQTtBQUUxRSxNQUFNLFVBQVUscUJBQXFCLENBQUMsZ0JBQXdCO0lBQzVELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDckQsT0FBTztRQUNMLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsU0FBUyxFQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkIsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkIsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDeEIsQ0FBQTtBQUNILENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLGVBQXVCO0lBQy9DLElBQUksZUFBZSxJQUFJLFFBQVEsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQTtLQUNkO1NBQU0sSUFBSSxlQUFlLElBQUksVUFBVSxFQUFFO1FBQ3hDLE9BQU8sUUFBUSxDQUFBO0tBQ2hCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxXQUF3QjtJQUMzRCxJQUFJLFdBQVcsSUFBSSxNQUFNLEVBQUU7UUFDekIsT0FBTyxRQUFRLENBQUE7S0FDaEI7U0FBTSxJQUFJLFdBQVcsSUFBSSxRQUFRLEVBQUU7UUFDbEMsT0FBTyxVQUFVLENBQUE7S0FDbEI7QUFDSCxDQUFDIn0=