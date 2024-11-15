import React from 'react';
import {
    FiPlusCircle,
    FiList,
} from 'react-icons/fi';
import Link from 'next/link';
import {paths} from "@/constants/path";
import {apolloQuery, filterNulls} from "@/api/apollo/api-request";
import {GET_CATEGORIES} from "@/api/apollo/category-api";
import {Category, GetCategoriesQuery, GetProductsQuery, Product} from "@/__generated__/graphql";
import {getRandomColor} from "@/utils/color";
import {setParametersPath} from "@/utils/path";
import Image from "next/image";
import {GET_PRODUCTS} from "@/api/apollo/products-api";


const DashboardPage = async () => {
    // Fetch products and categories by calling directly Apollo Server API using Apollo Client.
    // Since this is a server component, it is not possible to fetch data by calling "internally" the API routes (e.g. call endpoint "/api/products").
    // To fetch API routes is necessary to call the absolute URL with host domain (e.g. "http://localhost:3000/api/products"). This means that an HTTP request and traffic is made.
    // Provided solution: in this way we can get the data directly from the Apollo server without passing through the API routes of Next.js server, avoiding unnecessary traffic.
    const products: Product[] = filterNulls((await apolloQuery<GetProductsQuery>(GET_PRODUCTS))?.products);
    const categories: Category[] = filterNulls((await apolloQuery<GetCategoriesQuery>(GET_CATEGORIES))?.categories);

    return (
        <>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Product Dashboard</h1>
                <p className="text-gray-600">Manage and monitor your product inventory</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        {/*This is the total amount of products of the inventory. It is the total sum of the stock of each product.*/}
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Products</h2>
                        <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-blue-600">{products.reduce((sum, product) => sum + product.stock, 0)}</span>
                            <span className="ml-2 text-gray-500">items</span>
                        </div>
                    </div>
                    <div>
                        {/*This is the amount of the product's categories. Each product must be assigned to a category.*/}
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Categories</h2>
                        <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-blue-600">{categories.length}</span>
                            <span className="ml-2 text-gray-500">items</span>
                        </div>
                    </div>
                </div>
            </div>

            {/*This section allows to get the products by their category. It shows the amount of products per each category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <Link
                        href={setParametersPath(paths.PRODUCTS_BY_CATEGORY, {id: category.id})}
                        key={index}
                        className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="flex items-center space-x-4">
                            <div className={`${getRandomColor(Number(category.id))} p-3 rounded-lg w-16 flex-shrink-0`}>
                                <Image width={45} height={45} src={category.icon || ""} className="w-full" alt={`${category.name} icon`} />
                            </div>
                            <div className="truncate">
                                <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
                                <div className="flex items-baseline">
                                    <span className="text-xl font-bold text-gray-700">{products.reduce((count, product) => product.category.id === category.id ? count + 1 : count, 0)}
                                    </span>
                                    <span className="ml-2 text-sm text-gray-500">models</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        href={paths.NEW_PRODUCT}
                        className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    >
                        <FiPlusCircle className="text-blue-600 mr-3" size={20}/>
                        <span className="text-blue-600 font-medium">Add New Product</span>
                    </Link>
                    <Link
                        href={paths.PRODUCTS}
                        className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        <FiList className="text-gray-600 mr-3" size={20}/>
                        <span className="text-gray-600 font-medium">View All Products</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
