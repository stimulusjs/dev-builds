import { Response } from "./response";
declare type Body = FormData | File | string;
declare type ResponseKind = "html" | "json";
declare type Options = {
    contentType?: string;
    responseKind?: ResponseKind;
    body?: Body;
};
export declare class Request {
    readonly method: string;
    readonly url: string;
    readonly options: Options;
    constructor(method: string, url: string, options?: Options);
    perform(): Promise<Response>;
    readonly fetchOptions: RequestInit;
    readonly headers: any;
    readonly csrfToken: string | null | undefined;
    readonly contentType: string | undefined;
    readonly accept: "text/html, application/xhtml+xml" | "application/json" | "*/*";
    readonly body: string | FormData | File | undefined;
    readonly responseKind: ResponseKind;
}
export {};
