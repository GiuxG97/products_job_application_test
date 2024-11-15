// import {ApolloServer} from "@apollo/server";
// import typeDefs from "./schemas";
// import {resolvers} from "./resolvers";
// import {startStandaloneServer} from "@apollo/server/standalone";
//
// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// });
//
// const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000}
// });
// console.log(`Server ready at: ${url}`);

// npm install @apollo/server express graphql cors
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import typeDefs from './schemas';
import {resolvers} from "./resolvers";

// imports, etc.

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
});

await server.start();
app.use('/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server)
);
await new Promise<void>(resolve => app.listen({ port: 4000 }, resolve));

// Our GraphQL server is listening for GraphQL operations
// on `http://localhost:4000/graphql`
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

// Requests to `http://localhost:4000/health` now return "Okay!"
app.get('/health', (req, res) => {
    res.status(200).send('Okay!');
});
