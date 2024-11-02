import {readFileSync} from "fs";

// model
const categoryTypeDefs = readFileSync('./src/schemas/model/category.graphql', {encoding: 'utf-8'});
const productTypeDefs = readFileSync('./src/schemas/model/product.graphql', {encoding: 'utf-8'});

// query and mutation
const queryTypeDefs = readFileSync('./src/schemas/query.graphql', {encoding: 'utf-8'});
const mutationTypeDefs = readFileSync('./src/schemas/mutation.graphql', {encoding: 'utf-8'});

const typeDefs = [
    queryTypeDefs,
    mutationTypeDefs,
    categoryTypeDefs,
    productTypeDefs
];

export default typeDefs;
