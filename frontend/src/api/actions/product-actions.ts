'use server';

import {revalidatePath} from "next/cache";
import {Category, CreateProductInput} from "@/__generated__/graphql";
import {CREATE_PRODUCT} from "@/api/apollo/products-api";
import {apolloMutation} from "@/api/apollo/api-request";
import {paths} from "@/constants/path";
import {redirect} from "next/navigation";

export async function createProduct(prevState: any, formData: FormData) {
    console.log("Creating product...");

    try {
        // TODO: validare il contenuto del form
        const productInput: CreateProductInput = {
            name: <string>formData.get("name"),
            category: <Category>formData.get("category"),
            price: parseFloat(<string>formData.get("price")),
            stock: parseInt(<string>formData.get("stock")),
            description: <string>formData.get("description"),
        };
        console.log("Product productInput:", productInput);
        await apolloMutation(CREATE_PRODUCT, {input: productInput});

        revalidatePath(paths.PRODUCTS);
    } catch (error) {
        console.error("Failed to create product:", error);
        return {
            ...prevState,
            error: "Failed to create product",
        }
    }
    redirect(paths.PRODUCTS);


}
