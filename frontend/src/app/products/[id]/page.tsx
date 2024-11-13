"use client";

import React, {useEffect} from "react";
import {Category, GetCategoriesQuery, GetProductQuery, GetProductsQuery, Product} from "@/__generated__/graphql";
import {apolloQuery, filterNull, filterNulls} from "@/api/apollo/api-request";
import PreviousPageButton from "@/components/buttons/PreviousPageButton";
import {updateProduct} from "@/api/actions/product-actions";
import {capitalizeFirstLetter} from "@/utils/strings";
import {FiDollarSign, FiEdit2, FiHash} from "react-icons/fi";
import {GET_CATEGORIES} from "@/api/apollo/category-api";
import Button from "@/components/buttons/Button";
import {LiaUndoSolid} from "react-icons/lia";
import {paths} from "@/constants/path";
import {useRouter} from "next/navigation";
import {request} from "@/api/request";
import {api} from "@/constants/api";
import {setParametersPath} from "@/utils/path";
import {Loader} from "@/components/loader/Loader";
import {GET_PRODUCT, GET_PRODUCTS} from "@/api/apollo/products-api";

type Params = {
    id: string;
};

const ProductDetail = (props: {params: Params}) => {
    const { id: productId } = props.params;
    const router = useRouter();
    const [product, setProduct] = React.useState<Product | undefined>(undefined);
    const [categories, setCategories] = React.useState<Category[]>([]);
    const [isEditing, setIsEditing] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        (async () => {
            try {
                const products: Product[] = filterNulls((await apolloQuery<GetProductsQuery>(GET_PRODUCTS))?.products);
                console.log("products", products);
                console.log("productId", productId);
                console.log("wrong product: ", await request(setParametersPath(api.PRODUCT, {id: productId}), {revalidate: true}))
                console.log("wrong product 2: ", filterNull((await apolloQuery<GetProductQuery>(GET_PRODUCT, {id: productId})).product));
                setProduct(products.find((product) => product.id === productId));
                // setProduct(await request(setParametersPath(api.PRODUCT, {id: productId}), {revalidate: true}));
                setCategories(await request(api.CATEGORIES));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        })();
    }, [productId]);

    const toggleEditing = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // This is a workaround in order to cancel the edited changes if the user press "cancel" button
        // This achieves the goal of clear the values inside the form with the old values, but a better solution would be to use a form library like React Hook Form
        if (isEditing) window.location.reload();
        setIsEditing(!isEditing);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await updateProduct(productId, formData);
        router.replace(paths.PRODUCTS, {scroll: false});
    }

    if (isLoading) return <Loader />;
    if (!product) return <div className="text-red-700 text-xl">Product not found</div>;

    return (
        <div className="min-h-screen bg-gray-50 md:p-8 sm:p-6">
            <div className="mx-auto">
                <div className="flex items-center mb-6">
                    <PreviousPageButton />
                    <h1 className="text-2xl font-bold text-gray-800">Product Details</h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 text-blue-950">
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
                                value={product.category.id}
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
                            <Button
                                text="Confirm"
                                type="submit"
                                className={`${!isEditing ? "hidden" : ""} px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700`}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductDetail;
