import React from "react";
import {FiDollarSign, FiHash} from "react-icons/fi";
import {createProduct} from "@/api/actions/product-actions";
import PreviousPageButton from "@/components/buttons/PreviousPageButton";
import {Category, GetCategoriesQuery} from "@/__generated__/graphql";
import {apolloQuery, filterNulls} from "@/api/apollo/api-request";
import {GET_CATEGORIES} from "@/api/apollo/category-api";
import {capitalizeFirstLetter} from "@/utils/strings";
import {redirect} from "next/navigation";
import {paths} from "@/constants/path";

const NewProductPage = async () => {
    const categories: Category[] = filterNulls((await apolloQuery<GetCategoriesQuery>(GET_CATEGORIES))?.categories);

    return (
        <div className="min-h-screen bg-gray-50 md:p-8 sm:p-6">
            <div className="mx-auto">
                <div className="flex items-center mb-6">
                    <PreviousPageButton home />
                    <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
                </div>

                <form action={async (formData) => {
                    "use server";
                    await createProduct(formData);
                    redirect(paths.PRODUCTS);
                }} className="bg-white rounded-lg shadow-sm p-6 text-blue-950">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
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
                                        className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
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
                                        className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewProductPage;
