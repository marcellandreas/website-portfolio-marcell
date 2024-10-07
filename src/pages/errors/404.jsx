import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-primary-200">
      <div className="text-center p-6 z-10">
        {" "}
        {/* Tambahkan z-10 di sini */}
        <h1 className="text-6xl font-bold text-primary-100 drop-shadow-md animate-pulse">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-primary-100 text-black py-2 px-4 rounded hover:bg-primary-400 transition duration-300 transform hover:scale-105"
          >
            Go to Home
          </Link>
        </div>
      </div>
      {/* Background circles for decoration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 bg-primary-100 rounded-full opacity-30 animate-bounce" />
        <div className="w-72 h-72 bg-primary-300 rounded-full opacity-20 animate-bounce" />
      </div>
    </div>
  );
};
