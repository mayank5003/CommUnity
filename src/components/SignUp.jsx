// src/SignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left Image Section */}
      <div className="hidden w-1/2 h-[100%] md:flex md:w-1/2 md:h-full">
        <img
          src="/building.png" 
          alt="Building"
          className="object-cover w-full h-full"
        />
      </div>


      {/* Right Form Section */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
          {/* Logo and Title */}
          <div className="flex flex-col items-center mb-6">
            <img src="/logo.png" alt="Logo" className="h-16 mb-2" />
            <h1 className="text-2xl font-bold text-gray-800">CommUnity</h1>
          </div>

          {/* Sign Up Form */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Phone No</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Society Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Flat No</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Postal</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
            <p className='text-center mt-[3%]'>Already have an account? 
              <Link to="/login" className='ml-1 text-red-600 hover:text-blue-800'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
