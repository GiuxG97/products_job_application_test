"use client";

import {FiEdit2, FiTrash2} from "react-icons/fi";
import {useSuspenseQuery} from "@apollo/client";
import {GET_PRODUCTS} from "@/api/products-api";
import {Product} from "@/__generated__/graphql";

const ProductsListPage = () => {
    const { data, error } = useSuspenseQuery(GET_PRODUCTS);
    // const products: Product[] = data?.products || [];
    const products: Product[] = data?.products?.filter((product): product is NonNullable<typeof product> => product !== null) || [];


    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">

                <div className="bg-white rounded-lg shadow-sm">
                    <div className="overflow-x-auto">
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
                                        <span className="capitalize text-blue-950">{product.category}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-blue-950">
                                        ${product.price.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-blue-950">
                                        {product.stock}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button
                                            // onClick={() => router.push(`/products/manage?id=${product.id}`)}
                                            className="text-blue-600 hover:text-blue-900 mr-3"
                                        >
                                            <FiEdit2 size={18} />
                                        </button>
                                        <button
                                            // onClick={() => console.log('Delete product:', product.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsListPage;
