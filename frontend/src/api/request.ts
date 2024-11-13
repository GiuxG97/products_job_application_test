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
        // Use 'no-store' to bypass cache if revalidate is set to true
        cache: revalidate ? 'no-store' : 'force-cache',
    };

    try {
        const response = await fetch(url, fetchOptions);

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
