import {NextResponse} from "next/server";
import {apolloQuery, filterNull, filterNulls} from "@/api/apollo/api-request";
import {GetProductQuery, GetProductsQuery, Product} from "@/__generated__/graphql";
import {GET_PRODUCT, GET_PRODUCTS} from "@/api/apollo/products-api";
import {stripInternalFields} from "@/utils/misc";

type Context = {
    params: {
        id: string
    }
}

export const GET = async (_: Request, context: Context) => {
    const { id } = context.params;
    const product: Product | undefined = filterNull((await apolloQuery<GetProductQuery>(GET_PRODUCT, {id})).product);

    if (!product) return NextResponse.json({message: "Product not found"}, {status: 404});
    return NextResponse.json(product);
}
