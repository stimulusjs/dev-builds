var descriptorPattern = /(([^.=]+)\.)?([^:]+):(.+)/;
export function parseClassDescriptorStringForIdentifier(descriptorString, matchingIdentifier) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern);
    if (matches) {
        var _a = Array.from(matches), identifier = _a[2], name_1 = _a[3], className = _a[4];
        if (identifier == matchingIdentifier || identifier == null) {
            return { identifier: identifier, name: name_1, className: className };
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfZGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc19kZXNjcmlwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLElBQU0saUJBQWlCLEdBQUcsMkJBQTJCLENBQUE7QUFFckQsTUFBTSxrREFBa0QsZ0JBQXdCLEVBQUUsa0JBQTBCO0lBQzFHLElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUMvQyxJQUFJLE9BQU8sRUFBRTtRQUNMLElBQUEsd0JBQXVELEVBQWxELGtCQUFVLEVBQUUsY0FBSSxFQUFFLGlCQUFTLENBQXVCO1FBQzdELElBQUksVUFBVSxJQUFJLGtCQUFrQixJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDMUQsT0FBTyxFQUFFLFVBQVUsWUFBQSxFQUFFLElBQUksUUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUE7U0FDdkM7S0FDRjtBQUNILENBQUMifQ==