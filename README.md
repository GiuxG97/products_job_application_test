# Inventory Management System
This is an assignment for a job apply. It is a basic product catalog with API endpoints for CRUD operations, develop with Next.js and GraphQL

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation and run](#installation-and-run)
    - [Installation and development](#installation-and-development)

## Introduction

The Inventory Management System is a web application designed to manage products and inventory tracking.  
It provides a user-friendly interface to monitor stock levels, manage product details, and get insights related to inventory across different categories.  

The webapp has a _responsive_ design for desktop and mobile access.

### Technologies Used

- **Frontend**: Next.js, React, Apollo Client
    - Styling: Tailwind CSS
- **Backend**: Apollo Server, GraphQL
- **Containerization**: Docker, Docker Compose

### Pages
- **Dashboard Overview**:
    - Display total number of items in inventory
    - Display total number of categories
    - Show product models number per category


- **Add Product**:
  - Create a new product by adding its information:
    - Name
    - Category
    - Price
    - Stock
    - Description - not mandatory


- **Products List**:
    - Show the entire list of products
    - Possible operations:
      - View product details and eventually update them
      - Delete product


- **Product Detail**:
  - Display detailed information about a product:
    - Name
    - Category
    - Price
    - Stock
    - Description
  - Eventually update product information

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Docker and Docker Compose

### Installation and run

1. Clone the repository: `git clone https://github.com/GiuxG97/products_job_application_test.git`
2. Ensure to have execution permissions for the _build-and-run.sh_ script: `chmod +x build-and-run.sh`
3. Run the script: `./build-and-run.sh`
   - This script will build the Apollo Server Docker image
   - Run the _apollo-server_ service of the _docker-compose.yml_ file
   - Wait for the server to be ready: Apollo Server must be up and running before starting the webapp, so that Next.js can fetch data from the GraphQL API during the build process in order to generate the static pages.
   - Build the Next.js webapp Docker image
   - Run the _webapp-nextjs_ service of the _docker-compose.yml_ file
4. Access the webapp at: `http://localhost:3005`
5. The GraphQL Playground is available at: `http://localhost:4000/graphql`
6. To stop the services, run: `docker-compose down`

### Installation and development
1. Clone the repository: `git clone https://github.com/GiuxG97/products_job_application_test.git`
2. Navigate to the _backend_ directory: `cd backend`
3. Install the dependencies: `npm install`
4. Start the Apollo Server: `npm dev`
5. Open a new terminal window
6. Navigate to the _frontend_ directory: `cd frontend`
7. Install the dependencies: `npm install`
8. Start the Next.js webapp: `npm dev`

## Sub Projects Documentation
- [Frontend](frontend/README.md)
- [Backend](backend/README.md)
