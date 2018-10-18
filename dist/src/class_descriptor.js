var descriptorPattern = /([^.=]+)\.([^=]+)=(.+)/;
export function parseDescriptorString(descriptorString) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern);
    if (matches) {
        var _a = Array.from(matches), identifier = _a[1], name_1 = _a[2], className = _a[3];
        return { identifier: identifier, name: name_1, className: className };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfZGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc19kZXNjcmlwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLElBQU0saUJBQWlCLEdBQUcsd0JBQXdCLENBQUE7QUFFbEQsTUFBTSxnQ0FBZ0MsZ0JBQXdCO0lBQzVELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUMvQyxJQUFJLE9BQU8sRUFBRTtRQUNMLElBQUEsd0JBQXFELEVBQWxELGtCQUFVLEVBQUUsY0FBSSxFQUFFLGlCQUFTLENBQXVCO1FBQzNELE9BQU8sRUFBRSxVQUFVLFlBQUEsRUFBRSxJQUFJLFFBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFBO0tBQ3ZDO0FBQ0gsQ0FBQyJ9