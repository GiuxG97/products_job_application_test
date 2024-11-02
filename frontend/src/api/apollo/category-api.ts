import {gql} from "@/__generated__";

// not really necessary, can be done directly by taking the category's values from the Category enum taken from the generated types
// this is done just to have another example of a query
export const GET_CATEGORIES = gql(`
    query GetCategories {
        categories
    }    
`);
