import {APOLLO_HOST} from "@/constants/api";
import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export function getClient() {
    // This check will create a new client only if it doesn't exist or if it's running on the server (window not defined)
    // Cache is shared between users, so on the server with only a single client, this might be shared to multiple users and there is a risk of data leaks
    // If running on the server, a client will be created on each request
    const isServer = typeof window === 'undefined';
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
