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

[//]: # (TODO: finire questa parte)
```
/
├── src/                                # Source code directory
│   ├── __generated__/                  # Contains generated types from GraphQL Code Generator
│   │   └── graphql-schema-types.ts     # Product-related GraphQL types
│   ├── generated/                      # Generated TypeScript types from GraphQL schemas
│   │   └── graphql.ts           # Contains TypeScript definitions for GraphQL types
│   ├── resolvers/               # Resolver functions for GraphQL operations
│   │   └── product.ts           # Resolvers for product operations
│   ├── schemas/                 # Combined schema definitions
│   │   └── index.ts             # Entry point for the GraphQL schema
│   └── index.ts                 # Apollo Server setup and configuration
├── nodemon.json                 # Configuration for Nodemon
├── package.json                 # Project metadata and scripts
├── codegen.yml                  # Configuration for GraphQL Code Generator
└── tsconfig.json                # TypeScript configuration
```


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

## Getting Started

To run the project immediately after pulling it from the GitHub repository, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/my-apollo-project.git
   cd my-apollo-project

