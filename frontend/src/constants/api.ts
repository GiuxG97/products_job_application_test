export const APOLLO_HOST = process.env.APOLLO_HOST || 'http://localhost:4000';

export const BASE_API_URL = process.env.BASE_API_URL || 'http://localhost:3000';

export const api = {
    PRODUCTS: '/api/products',
    PRODUCT: '/api/products/[id]',
    CATEGORIES: '/api/categories',
}
