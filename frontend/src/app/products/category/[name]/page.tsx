import {FiArrowLeft, FiEdit2, FiTrash2} from "react-icons/fi";
import {useRouter} from "next/router";
import {useState} from "react";

export const CategoryProductsPage = () => {
    const router = useRouter();
    const { category_name } = router.query;
    const [products, setProducts] = useState([
        // Example data - replace with actual API call
        { id: 1, name: 'iPhone 13', price: 999.99, stock: 50, sku: 'IPH-13-128' },
        { id: 2, name: 'iPhone 14', price: 1099.99, stock: 35, sku: 'IPH-14-128' },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-6">
                    <button
                        onClick={() => router.back()}
                        className="text-gray-600 hover:text-gray-900 mr-4"
                    >
                        <FiArrowLeft size={20} />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-800 capitalize">
                        {category_name} Products
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                                    <p className="text-sm text-gray-500">SKU: {product.sku}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => router.push(`/products/manage?id=${product.id}`)}
                                        className="text-blue-600 hover:text-blue-900"
                                    >
                                        <FiEdit2 size={18} />
                                    </button>
                                    <button
                                        onClick={() => console.log('Delete product:', product.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <FiTrash2 size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-gray-600">Price:</span>
                                    <span className="font-medium">${product.price.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-gray-600">Stock:</span>
                                    <span className="font-medium">{product.stock} units</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
