"use client";

import {deleteProduct} from "@/api/actions/product-actions";
import {FiTrash2} from "react-icons/fi";
import Button from "@/components/buttons/Button";
import React from "react";
import {Product} from "@/__generated__/graphql";

type Props = {
    product: Product;
}

/**
 * Delete product passed as prop
 * @param props - Product object
 */
const DeleteProductButton = (props: Props) => {
    const { product } = props;

    return (
        <Button
            tooltip={`Delete: ${product.name}`}
            onClick={() => deleteProduct(product.id)}
            className="text-red-600 hover:text-red-900"
            icon={<FiTrash2 size={18}/>}
            confirm
        />
    );
}

export default DeleteProductButton;
