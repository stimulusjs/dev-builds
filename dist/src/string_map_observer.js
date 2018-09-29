var StringMapObserver = /** @class */ (function () {
    function StringMapObserver(element, delegate) {
        var _this = this;
        this.element = element;
        this.delegate = delegate;
        this.started = false;
        this.stringMap = new Map;
        this.mutationObserver = new MutationObserver(function (mutations) { return _this.processMutations(mutations); });
    }
    StringMapObserver.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, { attributes: true });
            this.refresh();
        }
    };
    StringMapObserver.prototype.stop = function () {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    };
    StringMapObserver.prototype.refresh = function () {
        if (this.started) {
            for (var _i = 0, _a = this.knownAttributeNames; _i < _a.length; _i++) {
                var attributeName = _a[_i];
                this.refreshAttribute(attributeName);
            }
        }
    };
    // Mutation record processing
    StringMapObserver.prototype.processMutations = function (mutations) {
        if (this.started) {
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                this.processMutation(mutation);
            }
        }
    };
    StringMapObserver.prototype.processMutation = function (mutation) {
        var attributeName = mutation.attributeName;
        if (attributeName) {
            this.refreshAttribute(attributeName);
        }
    };
    // State tracking
    StringMapObserver.prototype.refreshAttribute = function (attributeName) {
        var key = this.delegate.getStringMapKeyForAttribute(attributeName);
        if (key != null) {
            if (!this.stringMap.has(attributeName)) {
                this.stringMapKeyAdded(key, attributeName);
            }
            var value = this.element.getAttribute(attributeName);
            if (this.stringMap.get(attributeName) != value) {
                this.stringMapValueChanged(value, key);
            }
            if (value == null) {
                this.stringMap.delete(attributeName);
                this.stringMapKeyRemoved(key, attributeName);
            }
            else {
                this.stringMap.set(attributeName, value);
            }
        }
    };
    StringMapObserver.prototype.stringMapKeyAdded = function (key, attributeName) {
        if (this.delegate.stringMapKeyAdded) {
            this.delegate.stringMapKeyAdded(key, attributeName);
        }
    };
    StringMapObserver.prototype.stringMapValueChanged = function (value, key) {
        if (this.delegate.stringMapValueChanged) {
            this.delegate.stringMapValueChanged(value, key);
        }
    };
    StringMapObserver.prototype.stringMapKeyRemoved = function (key, attributeName) {
        if (this.delegate.stringMapKeyRemoved) {
            this.delegate.stringMapKeyRemoved(key, attributeName);
        }
    };
    Object.defineProperty(StringMapObserver.prototype, "knownAttributeNames", {
        get: function () {
            return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringMapObserver.prototype, "currentAttributeNames", {
        get: function () {
            return Array.from(this.element.attributes).map(function (attribute) { return attribute.name; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringMapObserver.prototype, "recordedAttributeNames", {
        get: function () {
            return Array.from(this.stringMap.keys());
        },
        enumerable: true,
        configurable: true
    });
    return StringMapObserver;
}());
export { StringMapObserver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX21hcF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpbmdfbWFwX29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0lBT0UsMkJBQVksT0FBZ0IsRUFBRSxRQUFtQztRQUFqRSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUE7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQTtJQUM3RixDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBQ2pFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtTQUNmO0lBQ0gsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtTQUNyQjtJQUNILENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMs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