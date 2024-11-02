import React from 'react';
import {
  FiSmartphone,
  FiMonitor,
  FiPrinter,
  FiPlusCircle,
  FiSearch,
  FiGrid,
} from 'react-icons/fi';
import {
  BsLaptop,
  BsWater
} from 'react-icons/bs';
import Link from 'next/link';

const DashboardPage = () => {
  // Example data - in a real app, this would come from your API/database
  const categoryStats = [
    { name: 'Smartphone', icon: FiSmartphone, count: 24, color: 'bg-blue-500' },
    { name: 'TV', icon: FiMonitor, count: 15, color: 'bg-green-500' },
    { name: 'Laptop', icon: BsLaptop, count: 18, color: 'bg-purple-500' },
    { name: 'Washer', icon: BsWater, count: 12, color: 'bg-yellow-500' },
    { name: 'Printer', icon: FiPrinter, count: 8, color: 'bg-red-500' }
  ];

  const totalProducts = categoryStats.reduce((sum, category) => sum + category.count, 0);

  return (
      <div className="min-h-screen bg-gray-50">
        <div className="ml-16 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Product Dashboard</h1>
            <p className="text-gray-600">Manage and monitor your product inventory</p>
          </div>

          {/* Overview Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Products</h2>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-blue-600">{totalProducts}</span>
                  <span className="ml-2 text-gray-500">items</span>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Categories</h2>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-blue-600">{categoryStats.length}</span>
                  <span className="ml-2 text-gray-500">total</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryStats.map((category, index) => (
                <Link
                    href={`/products/category/${category.name.toLowerCase()}`}
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${category.color} p-3 rounded-lg text-white`}>
                      <category.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-gray-800">{category.count}</span>
                        <span className="ml-2 text-sm text-gray-500">products</span>
                      </div>
                    </div>
                  </div>
                </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                  href="/products/new"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <FiPlusCircle className="text-blue-600 mr-3" size={20} />
                <span className="text-blue-600 font-medium">Add New Product</span>
              </Link>
              <Link
                  href="/products/search"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <FiSearch className="text-gray-600 mr-3" size={20} />
                <span className="text-gray-600 font-medium">Search Products</span>
              </Link>
              <Link
                  href="/products"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <FiGrid className="text-gray-600 mr-3" size={20} />
                <span className="text-gray-600 font-medium">View All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DashboardPage;
