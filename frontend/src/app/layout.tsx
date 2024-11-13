import localFont from "next/font/local";
import "./globals.css";
import {FiGrid, FiList, FiPackage, FiPlusCircle} from "react-icons/fi";
import Link from "next/link";
import React from "react";
import {paths} from "@/constants/path";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Products Manager",
    description: "Manage and monitor your product inventory",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-visible`}
        >
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-screen w-16 bg-white shadow-lg flex flex-col items-center py-4 space-y-8">
            <div className="text-blue-600 p-2">
                <FiPackage size={24}/>
            </div>
            <nav className="flex-1 flex flex-col items-center space-y-4">
                <Link href={paths.HOME} className="p-2 text-gray-600 hover:bg-blue-50 rounded-lg">
                    <FiGrid size={20}/>
                </Link>
                <Link href={paths.NEW_PRODUCT} className="p-2 text-gray-600 hover:bg-blue-50 rounded-lg">
                    <FiPlusCircle size={20}/>
                </Link>
                <Link href={paths.PRODUCTS} className="p-2 text-gray-600 hover:bg-blue-50 rounded-lg">
                    <FiList size={20}/>
                </Link>
            </nav>
        </div>
        {/*<ApolloWrapper>*/}
            <div className="ml-16 min-h-screen bg-gray-50 p-6 md:p-8">{children}</div>
        {/*</ApolloWrapper>*/}
        </body>
        </html>
    );
}
