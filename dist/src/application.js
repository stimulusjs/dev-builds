import { Dispatcher } from "./dispatcher";
import { Router } from "./router";
import { defaultSchema } from "./schema";
export class Application {
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
//# sourceMappingURL=application.js.map