import Link from 'next/link';
import {paths} from "@/constants/path";

// This component is rendered when the requested page does not exist. It provides a link to go back to the home page.
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-700 mb-6">
                Oops! The page you are looking for does not exist.
            </p>
            <Link
                href={paths.HOME}
                className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
                Go Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
