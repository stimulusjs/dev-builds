declare class _Response {
    readonly response: Response;
    constructor(response: Response);
    readonly statusCode: number;
    readonly ok: boolean;
    readonly unauthenticated: boolean;
    readonly authenticationURL: string | null;
    readonly contentType: string;
    readonly html: Promise<string>;
    readonly json: Promise<any>;
}
export { _Response as Response };
