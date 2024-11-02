import {gql} from "@/__generated__";

export const GET_CATEGORIES = gql(`
    query GetCategories {
        categories {
            id
            name
            icon
        }
    }    
`);
