import {gql} from "@/__generated__";

export const GET_PRODUCTS = gql(`
    query GetProducts {
        products {
            id
            name
            category {
                id
                name
            }
            price
            stock
            description
        }
    }    
`);

export const GET_PRODUCT = gql(`
    query GetProduct($id: ID!) {
        product(id: $id) {
            id
            name
            price
            stock
            category {
                id
                name
            }
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
            category {
                id
            }
            description
        }
    }
`);
