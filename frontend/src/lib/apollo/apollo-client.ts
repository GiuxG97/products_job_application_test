import {HttpLink, ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
// import {ApolloClient} from "@apollo/experimental-nextjs-app-support";
import {APOLLO_HOST} from "@/constants/api";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export function getClient() {
    // This check will create a new client only if it doesn't exist or if it's running on the server (window not defined)
    // Cache is shared between users, so on the server with only a single client, this might be shared to multiple users and there is a risk of data leaks
    // If running on the server, a client will be created on each request
    console.log("!apolloClient: ", apolloClient === undefined);
    console.log("typeof window === 'undefined': ", typeof window === 'undefined');
    if (!apolloClient || typeof window === 'undefined') {
        console.log("Creating new Apollo Client");
        const httpLink = new HttpLink({
            uri: APOLLO_HOST,
            credentials: 'same-origin',
        });

        apolloClient = new ApolloClient({
            cache: new InMemoryCache({ addTypename: false }),
            link: httpLink,
            ssrMode: typeof window === 'undefined',
            devtools: {enabled: true},
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'no-cache',
                },
                query: {
                    fetchPolicy: 'no-cache',
                },
            }
        });
    }
    return apolloClient;
}
