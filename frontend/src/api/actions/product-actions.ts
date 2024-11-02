'use server';

import {revalidatePath} from "next/cache";
import {Category, CreateProductInput} from "@/__generated__/graphql";
import {CREATE_PRODUCT} from "@/api/products-api";
import {getClient} from "@/lib/apollo/apollo-client";

export async function createProduct(prevState: any, formData: FormData) {
  console.log("Creating product...");
  const client = getClient();

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

    const { data, errors } = await client.mutate({
        mutation: CREATE_PRODUCT,
        variables: {
            input: productInput,
        },
    });
    if (errors) throw new Error(errors.map(e => e.message).join(', '));

    revalidatePath("/products")
    return {
      ...prevState,
      data: data?.createProduct,
    };
  }
  catch (error) {
    console.error("Failed to create product:", error);
    return {
      ...prevState,
      error: "Failed to create product",
    }
  }

}
