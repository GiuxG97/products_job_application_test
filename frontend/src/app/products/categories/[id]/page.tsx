import {FiInfo} from "react-icons/fi";
import PreviousPageButton from "@/components/buttons/PreviousPageButton";
import React from "react";
import {GetProductsQuery, Product} from "@/__generated__/graphql";
import {apolloQuery, filterNulls} from "@/api/apollo/api-request";
import {GET_PRODUCTS} from "@/api/apollo/products-api";
import Link from "next/link";
import {setParametersPath} from "@/utils/path";
import {paths} from "@/constants/path";
import DeleteProductButton from "@/components/buttons/DeleteProductButton";

type Params = {
    id: string;
};

const CategoryProductsPage = async (props: { params: Params }) => {
    const { id: categoryId } = props.params;
    const totProducts: Product[] = filterNulls((await apolloQuery<GetProductsQuery>(GET_PRODUCTS))?.products)
    console.log("tot products: ", totProducts.filter(p => p.category.id === categoryId).length)
    const products: Product[] = filterNulls((await apolloQuery<GetProductsQuery>(GET_PRODUCTS, {categoryId}))?.products)

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-6">
                    <PreviousPageButton home/>
                    <h1 className="text-2xl font-bold text-gray-800">Products</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-sm p-6 text-gray-600">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                                </div>
                                <div className="flex space-x-2">
                                    <Link
                                        href={setParametersPath(paths.PRODUCT, {id: product.id})}
                                        className="text-blue-600 hover:text-blue-900"
                                    >
                                        <FiInfo size={18}/>
                                    </Link>
                                    <DeleteProductButton product={product} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-gray-600">Price:</span>
                                    <span className="font-medium">${product.price.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-gray-600">Stock:</span>
                                    <span className="font-medium">{product.stock} units</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryProductsPage;
