import {getClient} from "@/lib/apollo/apollo-client";
import type {DocumentNode} from "graphql/index";
import {OperationVariables} from "@apollo/client";

function nonNullable<T>(value: T): value is NonNullable<T> {
    return value !== null;
}

export const filterNulls = <T>(array?: (T | null)[] | null): T[] => (array || []).filter(nonNullable);
export const filterNull = <T>(value?: T | null): T | undefined => nonNullable(value) ? value : undefined;

export const apolloQuery = async <T>(query: DocumentNode, variables?: OperationVariables): Promise<T> => {
    const client = getClient();
    const { data, errors } = await client.query({
        query,
        variables: {
            ...variables,
            context: variables?.context ?? {
                // fetchOptions: {
                //     cache: 'no-store',
                // }
            }
        },
        fetchPolicy: 'no-cache'
    });
    if (errors) throw new Error(errors.map(e => e.message).join(', '));
    return data;
}

export const apolloMutation = async (mutation: DocumentNode, variables?: OperationVariables) => {
    const client = getClient();
    const { data, errors } = await client.mutate({
        mutation,
        variables
    });
    if (errors) throw new Error(errors.map(e => e.message).join(', '));
    return data;
}
