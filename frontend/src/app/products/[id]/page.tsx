"use client";

import React, {useEffect} from "react";
import {GET_PRODUCT} from "@/api/apollo/products-api";
import {Category, GetCategoriesQuery, GetProductQuery, Product} from "@/__generated__/graphql";
import {apolloQuery, filterNull, filterNulls} from "@/api/apollo/api-request";
import PreviousPageButton from "@/components/buttons/PreviousPageButton";
import {createProduct} from "@/api/actions/product-actions";
import {capitalizeFirstLetter} from "@/utils/strings";
import {FiDollarSign, FiEdit2, FiHash} from "react-icons/fi";
import {GET_CATEGORIES} from "@/api/apollo/category-api";
import Button from "@/components/buttons/Button";
import {LiaUndoSolid} from "react-icons/lia";
import {useRouter} from "next/navigation";

type Params = {
    id: string;
};

const Product = (props: {params: Params}) => {
    const { id: productId } = props.params;
    const router = useRouter();
    const [product, setProduct] = React.useState<Product | undefined>(undefined);
    const [categories, setCategories] = React.useState<Category[]>([]);
    const [isEditing, setIsEditing] = React.useState(false);

    useEffect(() => {
        (async () => {
            setProduct(filterNull((await apolloQuery<GetProductQuery>(GET_PRODUCT, {id: productId})).product));
            setCategories(filterNulls((await apolloQuery<GetCategoriesQuery>(GET_CATEGORIES))?.categories));
        })();
    }, [productId]);

    const toggleEditing = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // TODO: need to manage the back behaviour
        if (isEditing) router.refresh();
        setIsEditing(!isEditing);
    }

    if (!product) return <div>Product not found</div>;
    console.log("product.category.id: ", product?.category.id)
    console.log("categories: ", categories)

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto">
                <div className="flex items-center mb-6">
                    <PreviousPageButton home />
                    <h1 className="text-2xl font-bold text-gray-800">Product Details</h1>
                </div>

                <form action={createProduct} className="bg-white rounded-lg shadow-sm p-6 text-blue-950">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={product.name}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                                disabled={!isEditing}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                defaultValue={product.category.id}
                                onChange={(e) => setProduct({ ...product, category: { ...product.category, id: e.target.value } })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                                disabled={!isEditing}
                            >
                                <option value="">Select category</option>
                                {
                                    categories.map((category) => (
                                        <option key={category.id} value={category.id}>{capitalizeFirstLetter(category.name)}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiDollarSign className="text-gray-400"/>
                                    </div>
                                    <input
                                        type="number"
                                        name="price"
                                        defaultValue={product.price}
                                        className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Stock</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiHash className="text-gray-400"/>
                                    </div>
                                    <input
                                        type="number"
                                        name="stock"
                                        defaultValue={product.stock}
                                        className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                defaultValue={product.description || ''}
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-end space-x-3">
                            <Button
                                type={isEditing ? "reset" : "button"}
                                text={isEditing ? 'Cancel' : 'Edit'}
                                className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-700"
                                icon={isEditing ? <LiaUndoSolid size={18} /> : <FiEdit2 size={18} />}
                                onClick={toggleEditing}
                            />

                            <button
                                hidden={!isEditing}
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Product;
