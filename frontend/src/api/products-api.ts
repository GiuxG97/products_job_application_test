import {gql} from "@/__generated__";

export const GET_PRODUCTS = gql(`
    query GetProducts {
        products {
            id
            name
            price
            stock
            category
            description
        }
    }    
`);

export const CREATE_PRODUCT = gql(`
    mutation CreateProduct($input: CreateProductInput!) {
        createProduct(input: $input) {
            id
            name
            price
            stock
            category
            description
        }
    }
`);
