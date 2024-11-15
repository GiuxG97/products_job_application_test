import {apolloQuery, filterNulls} from "@/api/apollo/api-request";
import {GetCategoriesQuery} from "@/__generated__/graphql";
import {NextResponse} from "next/server";
import {cleanInternalFields} from "@/utils/misc";
import {GET_CATEGORIES} from "@/api/apollo/category-api";

export const GET = async () => {
    const products = filterNulls((await apolloQuery<GetCategoriesQuery>(GET_CATEGORIES))?.categories);
    return NextResponse.json(cleanInternalFields(products));
}
