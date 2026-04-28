import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-gray-900">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>

        {/* subtle helper */}
        <p className="mt-6 text-sm text-gray-400">
          If you think this is a mistake, check the URL again.
        </p>
      </div>
    </div>
  );
};

export default NotFound;