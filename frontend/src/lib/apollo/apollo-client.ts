import {APOLLO_HOST} from "@/constants/api";
import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

/**
 * This function is used to get the Apollo Client instance as singleton if it is got by a client.
 */
export function getClient() {
    const isServer = typeof window === 'undefined';

    // This check will create a new client only if it doesn't exist or if it's running on the server (window not defined)
    // Cache is shared between users, so on the server with only a single client, this might be shared to multiple users and there is a risk of data leaks
    // If running on the server, a client will be created on each request
    if (!apolloClient || isServer) {
        const httpLink = new HttpLink({
            uri: APOLLO_HOST,
            credentials: 'same-origin',
        });

        apolloClient = new ApolloClient({
            cache: new InMemoryCache({ addTypename: false }),
            link: httpLink,
            ssrMode: isServer,
        });
    }
    return apolloClient;
}
