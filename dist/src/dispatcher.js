import { EventListener } from "./event_listener";
export class Dispatcher {
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
//# sourceMappingURL=dispatcher.js.map