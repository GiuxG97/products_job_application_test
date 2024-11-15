"use client";

import React from 'react';
import Modal from "@/components/modal/Modal";

type Props = {
    confirm?: boolean;  // If true, a modal will be displayed to confirm the operation
    text?: string;
    className?: string;
    tooltip?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Custom button component
 * @param props - Custom button props with HTML button attributes
 */
const Button = (props: Props) => {
    const { confirm = false, text, className, tooltip, disabled, icon, ...buttonProps } = props;
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (confirm)
            setIsModalOpen(true);
        else
            if (buttonProps.onClick) buttonProps.onClick(event);
    }

    const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonProps.onClick) buttonProps.onClick(event);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative inline-block group">
            {tooltip && (
                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {tooltip}
                </div>
            )}

            <button
                data-tooltip-target="tooltip-dark"
                onClick={handleClick}
                disabled={disabled}
                className={`flex items-center justify-center rounded-lg font-semibold transition-all duration-300 
                    ${disabled ? 'bg-gray-300 cursor-not-allowed' : ''}
                    ${className} 
                `}
            >
                {icon && <span className="mr-2">{icon}</span>}
                {text}
            </button>

            <Modal
                isOpen={isModalOpen}
                title="Confirm Operation"
                description="Are you sure you want to proceed with this operation?"
                onClose={handleCancel}
                onConfirm={handleConfirm}
                submit={buttonProps.type === 'submit'}
                confirmText="Yes, Confirm"
                cancelText="No, Cancel"
            />
        </div>
    );
};

export default Button;
