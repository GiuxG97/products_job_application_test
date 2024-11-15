import {apolloQuery, filterNulls} from "@/api/apollo/api-request";
import {GET_PRODUCTS} from "@/api/apollo/products-api";
import {GetProductsQuery} from "@/__generated__/graphql";
import {NextResponse} from "next/server";

export const GET = async () => {
    const products = filterNulls((await apolloQuery<GetProductsQuery>(GET_PRODUCTS))?.products);
    return NextResponse.json(products);
}
