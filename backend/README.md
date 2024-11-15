# Apollo Server Product Management

## Overview

This project is an Apollo Server implementation designed to manage products using an in-memory database.  
The server provides a GraphQL API for creating, reading, updating, and deleting product entries.   
It serves as a simple solution for handling product data, by paying attention to the fact that data will be lost when the server is restarted. 

## Features

- Manage products with CRUD (Create, Read, Update, Delete) operations.
- Type-safe GraphQL API with TypeScript integration.
- In-memory data storage for quick testing and development.

## Project Structure

The project is organized as follows:

```
/
├── src/                                # Source code directory
│   ├── __generated__/                  # Contains generated types from GraphQL Code Generator
│   │   └── graphql-schema-types.ts     # Product-related GraphQL types
│   ├── resolvers/               # Resolver functions for GraphQL operations
│   ├── schemas/                 # Combined schema definitions with query and mutations
│   │   └── model/               # .graphql files to define each model object
│   ├── utils/                   # Utility folder
│       └── delay.ts             # It simulates a delay in the response
├── nodemon.json                 # Configuration for Nodemon
├── package.json                 # Project metadata and scripts
├── codegen.yml                  # Configuration for GraphQL Code Generator
└── tsconfig.json                # TypeScript configuration
```

## Data Model

```
Product {
    id: ID! (resolved as string)
    name: String!
    price: Float!
    stock: Int! (number of units available)
    category: Category! (enum values: SMARTPHONE, LAPTOP, TABLET)
    description: String
}
```

```
Category {
    id: ID! (resolved as string)
    name: String!
}
```
