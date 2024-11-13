import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white h-screen items-center justify-center">
      {/* Left Side: Image */}
      <div className="hidden md:flex md:w-1/2 h-full">
        <img
          src="/building.png" 
          alt="Building"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center p-8 bg-gray-800 h-full justify-center">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo.png" // Adjusted path to access the logo correctly
            alt="Logo"
            className="w-16 h-16 mb-3"
          />
          <h1 className="text-3xl font-bold">CommUnity</h1>
          <p className="text-gray-400">Seamless Community Interaction and Management</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Resident</option>
              <option>Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;