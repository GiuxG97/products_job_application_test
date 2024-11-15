import {getClient} from "@/lib/apollo/apollo-client";
import {DocumentNode} from "graphql/index";
import {OperationVariables} from "@apollo/client";
import {IS_BUILD_PHASE} from "@/constants/misc";

// ------------------------------- Utility functions for the Apollo Client ---------------------------------
// These functions are used to filter null values from the Apollo Client response, in order to have consistent data and avoid Typescript compilation errors.
function nonNullable<T>(value: T): value is NonNullable<T> {
    return value !== null;
}

export const filterNulls = <T>(array?: (T | null)[] | null): T[] => (array || []).filter(nonNullable);
export const filterNull = <T>(value?: T | null): T | undefined => nonNullable(value) ? value : undefined;

// ---------------------------------------------------------------------------------------------------------

/**
 * This function is used to make a query to the Apollo Server.
 * @param query - gql query that will be sent to the Apollo Server.
 * @param variables - variables that can be passed as arguments to the query. It is optional and it is a key-value object that can be used also to change the context and cache management.
 */
export const apolloQuery = async <T>(query: DocumentNode, variables?: OperationVariables): Promise<T> => {
    const client = getClient();
    const { data, errors } = await client.query({
        query,
        variables,
        context: variables?.context ?? {
            fetchOptions: {
                // This is used to not used the cache and get fresh data from the server, but not during the build phase of the Next.js application so that static pages can be generated.
                cache: IS_BUILD_PHASE ? 'force-cache' : 'no-store',
            },
        }
    });

    if (errors) throw new Error(errors.map(e => e.message).join(', '));
    return data;
}

export const apolloMutation = async (mutation: DocumentNode, variables?: OperationVariables) => {
    const client = getClient();
    const { data, errors } = await client.mutate({
        mutation,
        variables,
    });
    if (errors) throw new Error(errors.map(e => e.message).join(', '));
    return data;
}
