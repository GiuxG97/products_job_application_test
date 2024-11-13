import {NextResponse} from "next/server";
import {apolloQuery, filterNull} from "@/api/apollo/api-request";
import {GetProductQuery, Product} from "@/__generated__/graphql";
import {GET_PRODUCT} from "@/api/apollo/products-api";
import {stripInternalFields} from "@/utils/misc";

type Context = {
    params: {
        id: string
    }
}

export const GET = async (_: Request, context: Context) => {
    const { id } = context.params;
    console.log("GET /api/products/[id]", id);
    const product: Product | undefined = filterNull((await apolloQuery<GetProductQuery>(GET_PRODUCT, {id})).product);
    console.log("GET /api/products/id - product", product);

    if (!product) return NextResponse.json({message: "Product not found"}, {status: 404});
    return NextResponse.json(stripInternalFields(product));
}
