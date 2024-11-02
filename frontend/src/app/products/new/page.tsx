"use client";

import React from "react";
import {useFormState} from "react-dom"
import {FiDollarSign, FiHash} from "react-icons/fi";
import {createProduct} from "@/api/actions/product-actions";
import PreviousPageButton from "@/app/components/PreviousPageButton";
import {Category, GetCategoriesQuery} from "@/__generated__/graphql";
import {apolloQuery} from "@/api/apollo/api-request";
import {GET_CATEGORIES} from "@/api/apollo/category-api";
import {capitalizeFirstLetter} from "@/utils/strings";

const initialState = {
    data: null
}

const NewProductPage = async () => {
    const [_, formAction] = useFormState(createProduct, initialState);
    // not really necessary this query, can be done directly by taking the category's values from the Category enum taken from the generated types
    const categories: Category[] = (await apolloQuery<GetCategoriesQuery>(GET_CATEGORIES))?.categories?.filter((category): category is NonNullable<typeof category> => category !== null) || [];

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto">
                <div className="flex items-center mb-6">
                    <PreviousPageButton/>
                    <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
                </div>

                <form action={formAction} className="bg-white rounded-lg shadow-sm p-6 text-blue-950">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                // value={formData.name}
                                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                // value={formData.category}
                                // onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select category</option>
                                {
                                    categories.map((category) => (
                                        <option key={category} value={category}>{capitalizeFirstLetter(category)}</option>
                                    ))
                                }
                                {/*<option value="">Select category</option>*/}
                                {/*<option value="SMARTPHONE">Smartphone</option>*/}
                                {/*<option value="TV">TV</option>*/}
                                {/*<option value="LAPTOP">Laptop</option>*/}
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
                                        // value={formData.price}
                                        // onChange={(e) => setFormData({ ...formData, price: e.target.value })}
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
                                        // value={formData.stock}
                                        // onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
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
                                // value={formData.description}
                                // onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                // onClick={() => router.back()}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
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
