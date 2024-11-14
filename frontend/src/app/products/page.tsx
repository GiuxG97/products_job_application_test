import {FiInfo} from "react-icons/fi";
import {GET_PRODUCTS} from "@/api/apollo/products-api";
import {GetProductsQuery, Product} from "@/__generated__/graphql";
import {apolloQuery, filterNulls} from "@/api/apollo/api-request";
import React from "react";
import PreviousPageButton from "@/components/buttons/PreviousPageButton";
import DeleteProductButton from "@/components/buttons/DeleteProductButton";
import {setParametersPath} from "@/utils/path";
import {paths} from "@/constants/path";
import Link from "next/link";

const ProductsListPage = async () => {
    try {
        // By using "useSuspenseQuery()", provided by the ApolloProvider from "ApolloWrapper.tsx", we can use the hook to fetch data from the server,
        // but in this way the component will be a client-side rendered component. Context is not allowed in server components
        // const { data, error } = await useSuspenseQuery(GET_PRODUCTS);

        const products: Product[] = filterNulls((await apolloQuery<GetProductsQuery>(GET_PRODUCTS))?.products);

        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="mx-auto">
                    <div className="flex items-center mb-6">
                        <PreviousPageButton home />
                        <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((product: Product) => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-medium text-blue-950">{product.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="capitalize text-blue-950">{product.category.name}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-blue-950">
                                        ${product.price.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-blue-950">
                                        {product.stock}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right flex justify-end space-x-2">
                                        <Link
                                            href={setParametersPath(paths.PRODUCT, {id: product.id})}
                                            className="text-blue-600 hover:text-blue-900"
                                        >
                                            <FiInfo size={18}/>
                                        </Link>
                                        <DeleteProductButton product={product} />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-8 text-red-600 text-xl text-center">
                        Failed to fetch products
                    </div>
                </div>
            </div>
        );
    }

};

export default ProductsListPage;
