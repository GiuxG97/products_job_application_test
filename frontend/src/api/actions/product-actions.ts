'use server';

import {revalidatePath} from "next/cache";
import {CreateCategoryInput, CreateProductInput} from "@/__generated__/graphql";
import {CREATE_PRODUCT} from "@/api/apollo/products-api";
import {apolloMutation} from "@/api/apollo/api-request";
import {paths} from "@/constants/path";
import {redirect} from "next/navigation";

export async function createProduct(formData: FormData) {
    console.log("Creating product...");

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
        await apolloMutation(CREATE_PRODUCT, {input: productInput});

        revalidatePath(paths.HOME);
    } catch (error) {
        console.error("Failed to create product:", error);
    }
    redirect(paths.PRODUCTS);
}
