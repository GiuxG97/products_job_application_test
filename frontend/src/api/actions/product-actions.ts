'use server';

import {revalidatePath} from "next/cache";
import {CreateCategoryInput, CreateProductInput} from "@/__generated__/graphql";
import {CREATE_PRODUCT, DELETE_PRODUCT} from "@/api/apollo/products-api";
import {apolloMutation} from "@/api/apollo/api-request";
import {paths} from "@/constants/path";
import {redirect} from "next/navigation";
import {setParametersPath} from "@/utils/path";

export const createProduct = async (formData: FormData) => {
    try {
        // TODO: validare il contenuto del form
        const productInput: CreateProductInput = {
            name: <string>formData.get("name"),
            category: <CreateCategoryInput>{
                id: formData.get("category")
            },
            price: parseFloat(<string>formData.get("price")),
            stock: parseInt(<string>formData.get("stock")),
            description: <string>formData.get("description"),
        };
        console.log("productInput:", productInput);
        await apolloMutation(CREATE_PRODUCT, {input: productInput});

        // revalidatePath(paths.HOME);
        revalidatePath(paths.PRODUCTS);
    } catch (error) {
        console.error("Failed to create product:", error);
    }
    redirect(paths.PRODUCTS);
}

export const deleteProduct = async (id: string) => {
    try {
        await apolloMutation(DELETE_PRODUCT, {id});

        revalidatePath(paths.PRODUCTS);
        revalidatePath(paths.PRODUCTS_BY_CATEGORY, 'page');
    }
    catch (error) {
        console.error("Failed to delete product:", error);
    }
    redirect(paths.PRODUCTS);
}
