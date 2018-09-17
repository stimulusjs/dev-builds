import { Scope } from "@stimulus/core";
import { Request } from "@stimulus/http";
export declare class Resource {
    readonly scope: Scope;
    constructor(scope: Scope);
    readonly bootstrapRequest: Request;
    readonly createRequest: Request;
    readonly editRequest: Request;
    readonly showRequest: Request;
    readonly updateRequest: Request;
    readonly destroyRequest: Request;
    readonly shouldBootstrapContents: boolean;
    readonly bootstrapUrl: string;
    readonly url: string;
    readonly editUrl: string;
    readonly formData: FormData | undefined;
    readonly data: import("../../core/dist/src/data_map").DataMap;
    readonly element: Element;
    readonly formTarget: Element;
    readonly primaryFieldTarget: HTMLElement;
    readonly targets: import("../../core/dist/src/target_set").TargetSet;
}
