import {BASE_API_URL} from "@/constants/api";
import {REVALIDATION_SESSION} from "@/constants/misc";

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

interface RequestOptions<T> {
    method?: HttpMethod;
    body?: T;
    headers?: HeadersInit;
    revalidate?: boolean; // Optional revalidate flag for no-cache fetch
}

export async function request<TResponse, TBody = unknown>(
    url: string,
    options: RequestOptions<TBody> = {}
): Promise<TResponse> {
    const { method = HttpMethod.GET, body, headers, revalidate } = options;

    const fetchOptions: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(headers || {}),
        },
        body: body ? JSON.stringify(body) : undefined,
        // If "revalidate" is set to true, the next request will be made without cache, otherwise the cache will be used until the REVALIDATION_SESSION expires
        next: { revalidate: revalidate ? 0 : REVALIDATION_SESSION }
    };

    try {
        const response = await fetch(typeof window === 'undefined' ? `${BASE_API_URL}${url}` : url, fetchOptions);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Request failed: ${response.status} ${errorMessage}`);
        }

        return await response.json() as TResponse;
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}
