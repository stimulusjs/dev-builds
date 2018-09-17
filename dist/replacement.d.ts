export declare class Replacement {
    readonly element: Element;
    readonly html: string;
    private readonly patch;
    constructor(element: Element, html: string);
    private readonly newElement;
    perform(): void;
}
