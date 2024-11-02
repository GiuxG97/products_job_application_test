import {getClient} from "@/lib/apollo/apollo-client";
import type {DocumentNode} from "graphql/index";
import {OperationVariables} from "@apollo/client";

export const apolloQuery = async <T>(query: DocumentNode, variables?: OperationVariables): Promise<T> => {
    const client = getClient();
    const { data, errors } = await client.query({
        query,
        variables
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
