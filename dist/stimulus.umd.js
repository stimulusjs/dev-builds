/*
Stimulus 1.1.0
Copyright © 2018 Basecamp, LLC
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.Stimulus = {})));
}(this, (function (exports) { 'use strict';

    class EventListener {
        constructor(eventTarget, eventName) {
            this.eventTarget = eventTarget;
            this.eventName = eventName;
            this.unorderedBindings = new Set;
        }
        connect() {
            this.eventTarget.addEventListener(this.eventName, this, false);
        }
        disconnect() {
            this.eventTarget.removeEventListener(this.eventName, this, false);
        }
        // Binding observer delegate
        /** @hidden */
        bindingConnected(binding) {
            this.unorderedBindings.add(binding);
        }
        /** @hidden */
        bindingDisconnected(binding) {
            this.unorderedBindings.delete(binding);
        }
        handleEvent(event) {
            const extendedEvent = extendEvent(event);
            for (const binding of this.bindings) {
                if (extendedEvent.immediatePropagationStopped) {
                    break;
                }
                else {
                    binding.handleEvent(extendedEvent);
                }
            }
        }
        get bindings() {
            return Array.from(this.unorderedBindings).sort((left, right) => {
                const leftIndex = left.index, rightIndex = right.index;
                return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
            });
        }
    }
    function extendEvent(event) {
        if ("immediatePropagationStopped" in event) {
            return event;
        }
        else {
            const { stopImmediatePropagation } = event;
            return Object.assign(event, {
                immediatePropagationStopped: false,
                stopImmediatePropagation() {
                    this.immediatePropagationStopped = true;
                    stopImmediatePropagation.call(this);
                }
            });
        }
    }

    class Dispatcher {
        constructor(application) {
            this.application = application;
            this.eventListenerMaps = new Map;
            this.started = false;
        }
        start() {
            if (!this.started) {
                this.started = true;
                this.eventListeners.forEach(eventListener => eventListener.connect());
            }
        }
        stop() {
            if (this.started) {
                this.started = false;
                this.eventListeners.forEach(eventListener => eventListener.disconnect());
            }
        }
        get eventListeners() {
            return Array.from(this.eventListenerMaps.values())
                .reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
        }
        // Binding observer delegate
        /** @hidden */
        bindingConnected(binding) {
            this.fetchEventListenerForBinding(binding).bindingConnected(binding);
        }
        /** @hidden */
        bindingDisconnected(binding) {
            this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
        }
        // Error handling
        handleError(error, message, detail = {}) {
            this.application.handleError(error, `Error ${message}`, detail);
        }
        fetchEventListenerForBinding(binding) {
            const { eventTarget, eventName } = binding;
            return this.fetchEventListener(eventTarget, eventName);
        }
        fetchEventListener(eventTarget, eventName) {
            const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
            let eventListener = eventListenerMap.get(eventName);
            if (!eventListener) {
                eventListener = this.createEventListener(eventTarget, eventName);
                eventListenerMap.set(eventName, eventListener);
            }
            return eventListener;
        }
        createEventListener(eventTarget, eventName) {
            const eventListener = new EventListener(eventTarget, eventName);
            if (this.started) {
                eventListener.connect();
            }
            return eventListener;
        }
        fetchEventListenerMapForEventTarget(eventTarget) {
            let eventListenerMap = this.eventListenerMaps.get(eventTarget);
            if (!eventListenerMap) {
                eventListenerMap = new Map;
                this.eventListenerMaps.set(eventTarget, eventListenerMap);
            }
            return eventListenerMap;
        }
    }

    // capture nos.:            12   23 4               43   1 5   56 7  76
    const descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
    function parseDescriptorString(descriptorString) {
        const source = descriptorString.trim();
        const matches = source.match(descriptorPattern) || [];
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
    function stringifyEventTarget(eventTarget) {
        if (eventTarget == window) {
            return "window";
        }
        else if (eventTarget == document) {
            return "document";
        }
    }

    class Action {
        static forToken(token) {
            return new this(token.element, token.index, parseDescriptorString(token.content));
        }
        constructor(element, index, descriptor) {
            this.element = element;
            this.index = index;
            this.eventTarget = descriptor.eventTarget || element;
            this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
            this.identifier = descriptor.identifier || error("missing identifier");
            this.methodName = descriptor.methodName || error("missing method name");
        }
        toString() {
            const eventNameSuffix = this.eventTargetName ? `@${this.eventTargetName}` : "";
            return `${this.eventName}${eventNameSuffix}->${this.identifier}#${this.methodName}`;
        }
        get eventTargetName() {
            return stringifyEventTarget(this.eventTarget);
        }
    }
    const defaultEventNames = {
        "a": e => "click",
        "button": e => "click",
        "form": e => "submit",
        "input": e => e.getAttribute("type") == "submit" ? "click" : "change",
        "select": e => "change",
        "textarea": e => "change"
    };
    function getDefaultEventNameForElement(element) {
        const tagName = element.tagName.toLowerCase();
        if (tagName in defaultEventNames) {
            return defaultEventNames[tagName](element);
        }
    }
    function error(message) {
        throw new Error(message);
    }

    class Binding {
        constructor(context, action) {
            this.context = context;
            this.action = action;
        }
        get index() {
            return this.action.index;
        }
        get eventTarget() {
            return this.action.eventTarget;
        }
        get identifier() {
            return this.context.identifier;
        }
        handleEvent(event) {
            if (this.willBeInvokedByEvent(event)) {
                this.invokeWithEvent(event);
            }
        }
        get eventName() {
            return this.action.eventName;
        }
        get method() {
            const method = this.controller[this.methodName];
            if (typeof method == "function") {
                return method;
            }
            throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
        }
        invokeWithEvent(event) {
            try {
                this.method.call(this.controller, event);
            }
            catch (error) {
                const { identifier, controller, element, index } = this;
                const detail = { identifier, controller, element, index, event };
                this.context.handleError(error, `invoking action "${this.action}"`, detail);
            }
        }
        willBeInvokedByEvent(event) {
            const eventTarget = event.target;
            if (this.element === eventTarget) {
                return true;
            }
            else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
                return this.scope.containsElement(eventTarget);
            }
            else {
                return true;
            }
        }
        get controller() {
            return this.context.controller;
        }
        get methodName() {
            return this.action.methodName;
        }
        get element() {
            return this.scope.element;
        }
        get scope() {
            return this.context.scope;
        }
    }

    class ElementObserver {
        constructor(element, delegate) {
            this.element = element;
            this.started = false;
            this.delegate = delegate;
            this.elements = new Set;
            this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
        }
        start() {
            if (!this.started) {
                this.started = true;
                this.mutationObserver.observe(this.element, { attributes: true, childList: true, subtree: true });
                this.refresh();
            }
        }
        stop() {
            if (this.started) {
                this.mutationObserver.takeRecords();
                this.mutationObserver.disconnect();
                this.started = false;
            }
        }
        refresh() {
            if (this.started) {
                const matches = new Set(this.matchElementsInTree());
                for (const element of Array.from(this.elements)) {
                    if (!matches.has(element)) {
                        this.removeElement(element);
                    }
                }
                for (const element of Array.from(matches)) {
                    this.addElement(element);
                }
            }
        }
        // Mutation record processing
        processMutations(mutations) {
            if (this.started) {
                for (const mutation of mutations) {
                    this.processMutation(mutation);
                }
            }
        }
        processMutation(mutation) {
            if (mutation.type == "attributes") {
                this.processAttributeChange(mutation.target, mutation.attributeName);
            }
            else if (mutation.type == "childList") {
                this.processRemovedNodes(mutation.removedNodes);
                this.processAddedNodes(mutation.addedNodes);
            }
        }
        processAttributeChange(node, attributeName) {
            const element = node;
            if (this.elements.has(element)) {
                if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
                    this.delegate.elementAttributeChanged(element, attributeName);
                }
                else {
                    this.removeElement(element);
                }
            }
            else if (this.matchElement(element)) {
                this.addElement(element);
            }
        }
        processRemovedNodes(nodes) {
            for (const node of Array.from(nodes)) {
                const element = this.elementFromNode(node);
                if (element) {
                    this.processTree(element, this.removeElement);
                }
            }
        }
        processAddedNodes(nodes) {
            for (const node of Array.from(nodes)) {
                const element = this.elementFromNode(node);
                if (element && this.elementIsActive(element)) {
                    this.processTree(element, this.addElement);
                }
            }
        }
        // Element matching
        matchElement(element) {
            return this.delegate.matchElement(element);
        }
        matchElementsInTree(tree = this.element) {
            return this.delegate.matchElementsInTree(tree);
        }
        processTree(tree, processor) {
            for (const element of this.matchElementsInTree(tree)) {
                processor.call(this, element);
            }
        }
        elementFromNode(node) {
            if (node.nodeType == Node.ELEMENT_NODE) {
                return node;
            }
        }
        elementIsActive(element) {
            if (element.isConnected != this.element.isConnected) {
                return false;
            }
            else {
                return this.element.contains(element);
            }
        }
        // Element tracking
        addElement(element) {
            if (!this.elements.has(element)) {
                if (this.elementIsActive(element)) {
                    this.elements.add(element);
                    if (this.delegate.elementMatched) {
                        this.delegate.elementMatched(element);
                    }
                }
            }
        }
        removeElement(element) {
            if (this.elements.has(element)) {
                this.elements.delete(element);
                if (this.delegate.elementUnmatched) {
                    this.delegate.elementUnmatched(element);
                }
            }
        }
    }

    class AttributeObserver {
        constructor(element, attributeName, delegate) {
            this.attributeName = attributeName;
            this.delegate = delegate;
            this.elementObserver = new ElementObserver(element, this);
        }
        get element() {
            return this.elementObserver.element;
        }
        get selector() {
            return `[${this.attributeName}]`;
        }
        start() {
            this.elementObserver.start();
        }
        stop() {
            this.elementObserver.stop();
        }
        refresh() {
            this.elementObserver.refresh();
        }
        get started() {
            return this.elementObserver.started;
        }
        // Element observer delegate
        matchElement(element) {
            return element.hasAttribute(this.attributeName);
        }
        matchElementsInTree(tree) {
            const match = this.matchElement(tree) ? [tree] : [];
            const matches = Array.from(tree.querySelectorAll(this.selector));
            return match.concat(matches);
        }
        elementMatched(element) {
            if (this.delegate.elementMatchedAttribute) {
                this.delegate.elementMatchedAttribute(element, this.attributeName);
            }
        }
        elementUnmatched(element) {
            if (this.delegate.elementUnmatchedAttribute) {
                this.delegate.elementUnmatchedAttribute(element, this.attributeName);
            }
        }
        elementAttributeChanged(element, attributeName) {
            if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
                this.delegate.elementAttributeValueChanged(element, attributeName);
            }
        }
    }

    function add(map, key, value) {
        fetch(map, key).add(value);
    }
    function del(map, key, value) {
        fetch(map, key).delete(value);
        prune(map, key);
    }
    function fetch(map, key) {
        let values = map.get(key);
        if (!values) {
            values = new Set();
            map.set(key, values);
        }
        return values;
    }
    function prune(map, key) {
        const values = map.get(key);
        if (values != null && values.size == 0) {
            map.delete(key);
        }
    }

    class Multimap {
        constructor() {
            this.valuesByKey = new Map();
        }
        get values() {
            const sets = Array.from(this.valuesByKey.values());
            return sets.reduce((values, set) => values.concat(Array.from(set)), []);
        }
        get size() {
            const sets = Array.from(this.valuesByKey.values());
            return sets.reduce((size, set) => size + set.size, 0);
        }
        add(key, value) {
            add(this.valuesByKey, key, value);
        }
        delete(key, value) {
            del(this.valuesByKey, key, value);
        }
        has(key, value) {
            const values = this.valuesByKey.get(key);
            return values != null && values.has(value);
        }
        hasKey(key) {
            return this.valuesByKey.has(key);
        }
        hasValue(value) {
            const sets = Array.from(this.valuesByKey.values());
            return sets.some(set => set.has(value));
        }
        getValuesForKey(key) {
            const values = this.valuesByKey.get(key);
            return values ? Array.from(values) : [];
        }
        getKeysForValue(value) {
            return Array.from(this.valuesByKey)
                .filter(([key, values]) => values.has(value))
                .map(([key, values]) => key);
        }
    }

    class TokenListObserver {
        constructor(element, attributeName, delegate) {
            this.attributeObserver = new AttributeObserver(element, attributeName, this);
            this.delegate = delegate;
            this.tokensByElement = new Multimap;
        }
        get started() {
            return this.attributeObserver.started;
        }
        start() {
            this.attributeObserver.start();
        }
        stop() {
            this.attributeObserver.stop();
        }
        refresh() {
            this.attributeObserver.refresh();
        }
        get element() {
            return this.attributeObserver.element;
        }
        get attributeName() {
            return this.attributeObserver.attributeName;
        }
        // Attribute observer delegate
        elementMatchedAttribute(element) {
            this.tokensMatched(this.readTokensForElement(element));
        }
        elementAttributeValueChanged(element) {
            const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
            this.tokensUnmatched(unmatchedTokens);
            this.tokensMatched(matchedTokens);
        }
        elementUnmatchedAttribute(element) {
            this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
        }
        tokensMatched(tokens) {
            tokens.forEach(token => this.tokenMatched(token));
        }
        tokensUnmatched(tokens) {
            tokens.forEach(token => this.tokenUnmatched(token));
        }
        tokenMatched(token) {
            this.delegate.tokenMatched(token);
            this.tokensByElement.add(token.element, token);
        }
        tokenUnmatched(token) {
            this.delegate.tokenUnmatched(token);
            this.tokensByElement.delete(token.element, token);
        }
        refreshTokensForElement(element) {
            const previousTokens = this.tokensByElement.getValuesForKey(element);
            const currentTokens = this.readTokensForElement(element);
            const firstDifferingIndex = zip(previousTokens, currentTokens)
                .findIndex(([previousToken, currentToken]) => !tokensAreEqual(previousToken, currentToken));
            if (firstDifferingIndex == -1) {
                return [[], []];
            }
            else {
                return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
            }
        }
        readTokensForElement(element) {
            const attributeName = this.attributeName;
            const tokenString = element.getAttribute(attributeName) || "";
            return parseTokenString(tokenString, element, attributeName);
        }
    }
    function parseTokenString(tokenString, element, attributeName) {
        return tokenString.trim().split(/\s+/).filter(content => content.length)
            .map((content, index) => ({ element, attributeName, content, index }));
    }
    function zip(left, right) {
        const length = Math.max(left.length, right.length);
        return Array.from({ length }, (_, index) => [left[index], right[index]]);
    }
    function tokensAreEqual(left, right) {
        return left && right && left.index == right.index && left.content == right.content;
    }

    class ValueListObserver {
        constructor(element, attributeName, delegate) {
            this.tokenListObserver = new TokenListObserver(element, attributeName, this);
            this.delegate = delegate;
            this.parseResultsByToken = new WeakMap;
            this.valuesByTokenByElement = new WeakMap;
        }
        get started() {
            return this.tokenListObserver.started;
        }
        start() {
            this.tokenListObserver.start();
        }
        stop() {
            this.tokenListObserver.stop();
        }
        refresh() {
            this.tokenListObserver.refresh();
        }
        get element() {
            return this.tokenListObserver.element;
        }
        get attributeName() {
            return this.tokenListObserver.attributeName;
        }
        tokenMatched(token) {
            const { element } = token;
            const { value } = this.fetchParseResultForToken(token);
            if (value) {
                this.fetchValuesByTokenForElement(element).set(token, value);
                this.delegate.elementMatchedValue(element, value);
            }
        }
        tokenUnmatched(token) {
            const { element } = token;
            const { value } = this.fetchParseResultForToken(token);
            if (value) {
                this.fetchValuesByTokenForElement(element).delete(token);
                this.delegate.elementUnmatchedValue(element, value);
            }
        }
        fetchParseResultForToken(token) {
            let parseResult = this.parseResultsByToken.get(token);
            if (!parseResult) {
                parseResult = this.parseToken(token);
                this.parseResultsByToken.set(token, parseResult);
            }
            return parseResult;
        }
        fetchValuesByTokenForElement(element) {
            let valuesByToken = this.valuesByTokenByElement.get(element);
            if (!valuesByToken) {
                valuesByToken = new Map;
                this.valuesByTokenByElement.set(element, valuesByToken);
            }
            return valuesByToken;
        }
        parseToken(token) {
            try {
                const value = this.delegate.parseValueForToken(token);
                return { value };
            }
            catch (error) {
                return { error };
            }
        }
    }

    class BindingObserver {
        constructor(context, delegate) {
            this.context = context;
            this.delegate = delegate;
            this.bindingsByAction = new Map;
        }
        start() {
            if (!this.valueListObserver) {
                this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
                this.valueListObserver.start();
            }
        }
        stop() {
            if (this.valueListObserver) {
                this.valueListObserver.stop();
                delete this.valueListObserver;
                this.disconnectAllActions();
            }
        }
        get element() {
            return this.context.element;
        }
        get identifier() {
            return this.context.identifier;
        }
        get actionAttribute() {
            return this.schema.actionAttribute;
        }
        get schema() {
            return this.context.schema;
        }
        get bindings() {
            return Array.from(this.bindingsByAction.values());
        }
        connectAction(action) {
            const binding = new Binding(this.context, action);
            this.bindingsByAction.set(action, binding);
            this.delegate.bindingConnected(binding);
        }
        disconnectAction(action) {
            const binding = this.bindingsByAction.get(action);
            if (binding) {
                this.bindingsByAction.delete(action);
                this.delegate.bindingDisconnected(binding);
            }
        }
        disconnectAllActions() {
            this.bindings.forEach(binding => this.delegate.bindingDisconnected(binding));
            this.bindingsByAction.clear();
        }
        // Value observer delegate
        parseValueForToken(token) {
            const action = Action.forToken(token);
            if (action.identifier == this.identifier) {
                return action;
            }
        }
        elementMatchedValue(element, action) {
            this.connectAction(action);
        }
        elementUnmatchedValue(element, action) {
            this.disconnectAction(action);
        }
    }

    class Context {
        constructor(module, scope) {
            this.module = module;
            this.scope = scope;
            this.controller = new module.controllerConstructor(this);
            this.bindingObserver = new BindingObserver(this, this.dispatcher);
            try {
                this.controller.initialize();
            }
            catch (error) {
                this.handleError(error, "initializing controller");
            }
        }
        connect() {
            this.bindingObserver.start();
            try {
                this.controller.connect();
            }
            catch (error) {
                this.handleError(error, "connecting controller");
            }
        }
        disconnect() {
            try {
                this.controller.disconnect();
            }
            catch (error) {
                this.handleError(error, "disconnecting controller");
            }
            this.bindingObserver.stop();
        }
        get application() {
            return this.module.application;
        }
        get identifier() {
            return this.module.identifier;
        }
        get schema() {
            return this.application.schema;
        }
        get dispatcher() {
            return this.application.dispatcher;
        }
        get element() {
            return this.scope.element;
        }
        get parentElement() {
            return this.element.parentElement;
        }
        // Error handling
        handleError(error, message, detail = {}) {
            const { identifier, controller, element } = this;
            detail = Object.assign({ identifier, controller, element }, detail);
            this.application.handleError(error, `Error ${message}`, detail);
        }
    }

    /** @hidden */
    function blessDefinition(definition) {
        return {
            identifier: definition.identifier,
            controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
        };
    }
    function blessControllerConstructor(controllerConstructor) {
        const constructor = extend(controllerConstructor);
        constructor.bless();
        return constructor;
    }
    const extend = (() => {
        function extendWithReflect(constructor) {
            function Controller() {
                return Reflect.construct(constructor, arguments, new.target);
            }
            Controller.prototype = Object.create(constructor.prototype, {
                constructor: { value: Controller }
            });
            Reflect.setPrototypeOf(Controller, constructor);
            return Controller;
        }
        function testReflectExtension() {
            const a = function () { this.a.call(this); };
            const b = extendWithReflect(a);
            b.prototype.a = function () { };
            return new b;
        }
        try {
            testReflectExtension();
            return extendWithReflect;
        }
        catch (error) {
            return (constructor) => class Controller extends constructor {
            };
        }
    })();

    class Module {
        constructor(application, definition) {
            this.application = application;
            this.definition = blessDefinition(definition);
            this.contextsByScope = new WeakMap;
            this.connectedContexts = new Set;
        }
        get identifier() {
            return this.definition.identifier;
        }
        get controllerConstructor() {
            return this.definition.controllerConstructor;
        }
        get contexts() {
            return Array.from(this.connectedContexts);
        }
        connectContextForScope(scope) {
            const context = this.fetchContextForScope(scope);
            this.connectedContexts.add(context);
            context.connect();
        }
        disconnectContextForScope(scope) {
            const context = this.contextsByScope.get(scope);
            if (context) {
                this.connectedContexts.delete(context);
                context.disconnect();
            }
        }
        fetchContextForScope(scope) {
            let context = this.contextsByScope.get(scope);
            if (!context) {
                context = new Context(this, scope);
                this.contextsByScope.set(scope, context);
            }
            return context;
        }
    }

    class DataMap {
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

    /** @hidden */
    function attributeValueContainsToken(attributeName, token) {
        return `[${attributeName}~="${token}"]`;
    }

    class TargetSet {
        constructor(scope) {
            this.scope = scope;
        }
        get element() {
            return this.scope.element;
        }
        get identifier() {
            return this.scope.identifier;
        }
        get schema() {
            return this.scope.schema;
        }
        has(targetName) {
            return this.find(targetName) != null;
        }
        find(...targetNames) {
            const selector = this.getSelectorForTargetNames(targetNames);
            return this.scope.findElement(selector);
        }
        findAll(...targetNames) {
            const selector = this.getSelectorForTargetNames(targetNames);
            return this.scope.findAllElements(selector);
        }
        getSelectorForTargetNames(targetNames) {
            return targetNames.map(targetName => this.getSelectorForTargetName(targetName)).join(", ");
        }
        getSelectorForTargetName(targetName) {
            const targetDescriptor = `${this.identifier}.${targetName}`;
            return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
        }
    }

    class Scope {
        constructor(schema, identifier, element) {
            this.schema = schema;
            this.identifier = identifier;
            this.element = element;
            this.targets = new TargetSet(this);
            this.data = new DataMap(this);
        }
        findElement(selector) {
            return this.findAllElements(selector)[0];
        }
        findAllElements(selector) {
            const head = this.element.matches(selector) ? [this.element] : [];
            const tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
            return head.concat(tail);
        }
        filterElements(elements) {
            return elements.filter(element => this.containsElement(element));
        }
        containsElement(element) {
            return element.closest(this.controllerSelector) === this.element;
        }
        get controllerSelector() {
            return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
        }
    }

    class ScopeObserver {
        constructor(element, schema, delegate) {
            this.element = element;
            this.schema = schema;
            this.delegate = delegate;
            this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
            this.scopesByIdentifierByElement = new WeakMap;
            this.scopeReferenceCounts = new WeakMap;
        }
        start() {
            this.valueListObserver.start();
        }
        stop() {
            this.valueListObserver.stop();
        }
        get controllerAttribute() {
            return this.schema.controllerAttribute;
        }
        // Value observer delegate
        /** @hidden */
        parseValueForToken(token) {
            const { element, content: identifier } = token;
            const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
            let scope = scopesByIdentifier.get(identifier);
            if (!scope) {
                scope = new Scope(this.schema, identifier, element);
                scopesByIdentifier.set(identifier, scope);
            }
            return scope;
        }
        /** @hidden */
        elementMatchedValue(element, value) {
            const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
            this.scopeReferenceCounts.set(value, referenceCount);
            if (referenceCount == 1) {
                this.delegate.scopeConnected(value);
            }
        }
        /** @hidden */
        elementUnmatchedValue(element, value) {
            const referenceCount = this.scopeReferenceCounts.get(value);
            if (referenceCount) {
                this.scopeReferenceCounts.set(value, referenceCount - 1);
                if (referenceCount == 1) {
                    this.delegate.scopeDisconnected(value);
                }
            }
        }
        fetchScopesByIdentifierForElement(element) {
            let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
            if (!scopesByIdentifier) {
                scopesByIdentifier = new Map;
                this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
            }
            return scopesByIdentifier;
        }
    }

    class Router {
        constructor(application) {
            this.application = application;
            this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
            this.scopesByIdentifier = new Multimap;
            this.modulesByIdentifier = new Map;
        }
        get element() {
            return this.application.element;
        }
        get schema() {
            return this.application.schema;
        }
        get controllerAttribute() {
            return this.schema.controllerAttribute;
        }
        get modules() {
            return Array.from(this.modulesByIdentifier.values());
        }
        get contexts() {
            return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
        }
        start() {
            this.scopeObserver.start();
        }
        stop() {
            this.scopeObserver.stop();
        }
        loadDefinition(definition) {
            this.unloadIdentifier(definition.identifier);
            const module = new Module(this.application, definition);
            this.connectModule(module);
        }
        unloadIdentifier(identifier) {
            const module = this.modulesByIdentifier.get(identifier);
            if (module) {
                this.disconnectModule(module);
            }
        }
        getContextForElementAndIdentifier(element, identifier) {
            const module = this.modulesByIdentifier.get(identifier);
            if (module) {
                return module.contexts.find(context => context.element == element);
            }
        }
        // Error handler delegate
        /** @hidden */
        handleError(error, message, detail) {
            this.application.handleError(error, message, detail);
        }
        // Scope observer delegate
        /** @hidden */
        scopeConnected(scope) {
            this.scopesByIdentifier.add(scope.identifier, scope);
            const module = this.modulesByIdentifier.get(scope.identifier);
            if (module) {
                module.connectContextForScope(scope);
            }
        }
        /** @hidden */
        scopeDisconnected(scope) {
            this.scopesByIdentifier.delete(scope.identifier, scope);
            const module = this.modulesByIdentifier.get(scope.identifier);
            if (module) {
                module.disconnectContextForScope(scope);
            }
        }
        // Modules
        connectModule(module) {
            this.modulesByIdentifier.set(module.identifier, module);
            const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
            scopes.forEach(scope => module.connectContextForScope(scope));
        }
        disconnectModule(module) {
            this.modulesByIdentifier.delete(module.identifier);
            const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
            scopes.forEach(scope => module.disconnectContextForScope(scope));
        }
    }

    const defaultSchema = {
        controllerAttribute: "data-controller",
        actionAttribute: "data-action",
        targetAttribute: "data-target"
    };

    class Application {
        static start(element, schema) {
            const application = new Application(element, schema);
            application.start();
            return application;
        }
        constructor(element = document.documentElement, schema = defaultSchema) {
            this.element = element;
            this.schema = schema;
            this.dispatcher = new Dispatcher(this);
            this.router = new Router(this);
        }
        async start() {
            await domReady();
            this.router.start();
            this.dispatcher.start();
        }
        stop() {
            this.router.stop();
            this.dispatcher.stop();
        }
        register(identifier, controllerConstructor) {
            this.load({ identifier, controllerConstructor });
        }
        load(head, ...rest) {
            const definitions = Array.isArray(head) ? head : [head, ...rest];
            definitions.forEach(definition => this.router.loadDefinition(definition));
        }
        unload(head, ...rest) {
            const identifiers = Array.isArray(head) ? head : [head, ...rest];
            identifiers.forEach(identifier => this.router.unloadIdentifier(identifier));
        }
        // Controllers
        get controllers() {
            return this.router.contexts.map(context => context.controller);
        }
        getControllerForElementAndIdentifier(element, identifier) {
            const context = this.router.getContextForElementAndIdentifier(element, identifier);
            return context ? context.controller : null;
        }
        // Error handling
        handleError(error, message, detail) {
            console.error(`%s\n\n%o\n\n%o`, message, error, detail);
        }
    }
    function domReady() {
        return new Promise(resolve => {
            if (document.readyState == "loading") {
                document.addEventListener("DOMContentLoaded", resolve);
            }
            else {
                resolve();
            }
        });
    }

    /** @hidden */
    function defineTargetProperties(constructor) {
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

    class Controller {
        constructor(context) {
            this.context = context;
        }
        static bless() {
            defineTargetProperties(this);
        }
        get application() {
            return this.context.application;
        }
        get scope() {
            return this.context.scope;
        }
        get element() {
            return this.scope.element;
        }
        get identifier() {
            return this.scope.identifier;
        }
        get targets() {
            return this.scope.targets;
        }
        get data() {
            return this.scope.data;
        }
        initialize() {
            // Override in your subclass to set up initial controller state
        }
        connect() {
            // Override in your subclass to respond when the controller is connected to the DOM
        }
        disconnect() {
            // Override in your subclass to respond when the controller is disconnected from the DOM
        }
    }
    Controller.targets = [];

    exports.Application = Application;
    exports.Context = Context;
    exports.Controller = Controller;
    exports.defaultSchema = defaultSchema;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
