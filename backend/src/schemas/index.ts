import {readFileSync} from "fs";

const productTypeDefs = readFileSync('./src/schemas/product.graphql', {encoding: 'utf-8'});

const typeDefs = [productTypeDefs];

export default typeDefs;
