"use client";
import {
    ApolloNextAppProvider,
} from "@apollo/experimental-nextjs-app-support";
import {getClient} from "@/lib/apollo/apollo-client";


// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={getClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
