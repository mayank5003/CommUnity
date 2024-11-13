// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-[#111827] p-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-12" />
          <h1 className="text-white font-bold text-2xl">CommUnity</h1>
        </div>
        <nav className="space-x-6 text-white text-xl">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </nav>
      </header>

      {/* Main Section */}
      <main
        className="flex-grow bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/building-image.png")' }}
      >
        <div className="bg-[#004b78] bg-opacity-80 px-12 py-6 rounded-md text-center text-white max-w-2xl">
          <h2 className="text-4xl font-medium mb-6">Welcome to CommUnity</h2>
          <p className="text-lg font-medium mb-8 leading-relaxed">
            The ultimate platform designed to streamline housing society management and foster community connections. Whether you're a resident, administrator, or non-resident, CommUnity brings convenience to your fingertips with a comprehensive set of features tailored for everyone.
          </p>
          <Link to="/signup">
            <button
              className="text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition duration-200"
              style={{ backgroundColor: '#007bff' }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;