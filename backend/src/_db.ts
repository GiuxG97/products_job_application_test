import {Category, Product} from "./__generated__/graphql-schema-types";

export const products: Product[] = [
    {
        id: "1",
        name: "Product 1",
        price: 100,
        stock: 10,
        category: Category.Tv,
        description: "Description 1"
    },
    {
        id: "2",
        name: "Product 2",
        price: 200,
        stock: 20,
        category: Category.Smartphone,
        description: "Description 2"
    },
    {
        id: "3",
        name: "Product 3",
        price: 300,
        stock: 30,
        category: Category.Laptop,
        description: "Description 3"
    }
];
