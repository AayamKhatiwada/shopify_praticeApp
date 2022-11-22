import { DeleteRequestParams, GetRequestParams, PostRequestParams, PutRequestParams, RequestParams, RequestReturn } from './types';
export declare class HttpClient {
    private domain;
    static readonly RETRY_WAIT_TIME = 1000;
    static readonly DEPRECATION_ALERT_DELAY = 300000;
    private LOGGED_DEPRECATIONS;
    constructor(domain: string);
    /**
     * Performs a GET request on the given path.
     */
    get<T = unknown>(params: GetRequestParams): Promise<RequestReturn<T>>;
    /**
     * Performs a POST request on the given path.
     */
    post<T = unknown>(params: PostRequestParams): Promise<RequestReturn<T>>;
    /**
     * Performs a PUT request on the given path.
     */
    put<T = unknown>(params: PutRequestParams): Promise<RequestReturn<T>>;
    /**
     * Performs a DELETE request on the given path.
     */
    delete<T = unknown>(params: DeleteRequestParams): Promise<RequestReturn<T>>;
    protected request<T = unknown>(params: RequestParams): Promise<RequestReturn<T>>;
    protected getRequestPath(path: string): string;
    private doRequest;
}
//# sourceMappingURL=http_client.d.ts.map