// Modal.tsx
"use client";

import React, {MouseEventHandler} from "react";

type Props = {
    isOpen: boolean;
    title: string;
    submit?: boolean;
    description?: string;
    onClose: () => void;
    onConfirm: MouseEventHandler<HTMLButtonElement>
    confirmText?: string;
    cancelText?: string;
}

const Modal = (props: Props) => {
    const { isOpen, title, submit = false, description, onClose, onConfirm, confirmText = 'Confirm', cancelText = 'Cancel' } = props;
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md">
                <div className="p-4 border-b text-left text-blue-950">
                    <h2 className="text-lg font-semibold">{title}</h2>
                </div>
                {description && (
                    <div className="p-4">
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                )}
                <div className="p-4 flex justify-end space-x-2">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >
                        {cancelText}
                    </button>
                    <button
                        type={submit ? 'submit' : 'button'}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
