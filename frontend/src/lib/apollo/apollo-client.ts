// have a function to create a client for you
import {HttpLink} from "@apollo/client";
import {ApolloClient, InMemoryCache} from "@apollo/experimental-nextjs-app-support";

let apolloClient: ApolloClient<any> | undefined;

export function getClient() {
    // This check will create a new client only if it doesn't exist or if it's running on the server (window not defined)
    // Cache is shared between users, so on the server with only a single client, this might be shared to multiple users and there is a risk of data leaks
    // If running on the server, a client will be created on each request
    if (!apolloClient || typeof window === "undefined") {
        const httpLink = new HttpLink({
            uri: "http://localhost:4000",
        });

        apolloClient = new ApolloClient({
            cache: new InMemoryCache(),
            link: httpLink,
        });
    }
    return apolloClient;
}
