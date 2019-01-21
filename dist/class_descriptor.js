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
//# sourceMappingURL=class_descriptor.js.map