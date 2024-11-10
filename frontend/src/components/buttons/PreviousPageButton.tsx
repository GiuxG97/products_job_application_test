"use client";

import {FiArrowLeft} from "react-icons/fi";
import React from "react";
import {paths} from "@/constants/path";
import {useRouter} from "next/navigation";

type Props = {
    home?: boolean
}

const PreviousPageButton = (props: Props) => {
    const { home } = props;
    const router = useRouter();

    return (
        <button className="text-gray-600 hover:text-gray-900 mr-4" onClick={() => home ? router.replace(paths.HOME) : window.history.back()}>
            <FiArrowLeft size={20} />
        </button>
    );
}

export default PreviousPageButton;
