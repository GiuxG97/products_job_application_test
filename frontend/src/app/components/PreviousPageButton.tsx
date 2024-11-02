"use client";

import {FiArrowLeft} from "react-icons/fi";
import React from "react";

const PreviousPageButton = () => {

    return (
        <button className="text-gray-600 hover:text-gray-900 mr-4" onClick={() => window.history.back()}>
            <FiArrowLeft size={20} />
        </button>
    );
}

export default PreviousPageButton;
