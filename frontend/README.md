# Product Management Application 

## Technologies Used

- Next.js + React: For server-side rendering, static site generation and client side rendering.
- Apollo Client: For interacting with a GraphQL API.
- TypeScript: For static typing and getting error at compile time.
- ESLint: For maintaining code quality through linting.

## Project Structure

The project is organized as follows:

```
/
├── src/                               # Source code directory
│   ├── __generated__/                 # Auto-generated files from Apollo GraphQL Server
│   ├── api/                           # API-related functionality
│   │   ├── actions/                   # API actions for changing data
│   │   ├── apollo/                    # Apollo client custom query setup and GraphQL definition of queries and mutation
│   │   └── request.ts                 # Utility for making API requests by using fetch
│   ├── app/                           # Main application logic and components
│   │   ├── api/                       # API routes for the app
│   │   ├── fonts/                     # Font files used in the app
│   │   ├── products/                  # Product-related pages and components
│   │   ├── favicon.ico                # Favicon for the web app
│   │   ├── globals.css                # Global CSS styles for the app
│   │   ├── layout.tsx                 # Layout component as scheleton for the app
│   │   ├── not-found.tsx              # 404 Not Found page component
│   │   └── page.tsx                   # Main page component (dashboard homepage)
│   ├── components/                    # Reusable UI components across the app
│   ├── constants/                     # Constants used throughout the app (static values and environment variables)
│   ├── lib/                           # Libraries or helper functions used in the app
│   │   └── apollo/                    # Apollo client configurations
│   └── utils/                         # Utility functions used across the project

```
