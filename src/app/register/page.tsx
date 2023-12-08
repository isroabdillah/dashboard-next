import React from "react";
import Link from 'next/link'
import Image from "next/image";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-3/12 relative">
        <img
          src="/ornamen1.png"
          className="absolute -top-16 -right-16" 
          style={{zIndex: "-9999"}}
        />
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <img src="/logoarkatama.png" alt="Logo" className=" " />
          </div>
          <h1 className="text-lg font-semibold text-gray-500 mt-8 mb-3">
          Adventure starts here 🚀
          </h1>
          <p className="text-base text-gray-500 mt-0 mb-6">
          Make your wa massage ezy
          </p>
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-600"
              >
                EMAIL OR USERNAME
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="flex justify-between font-semibold items-center mb-2 text-sm text-gray-600"
              >
                PASSWORD{" "}
                <span>
                  {" "}
                  <a
                    href="#"
                    className="block text-right text-small text-red-600 mt-2"
                  >
                    forgot pasword?
                  </a>
                </span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              New our Platform?{" "}
              <Link href="/login" className="text-red-600">
                Login
              </Link>
            </p>
          </div>
          <p className="text-xs text-gray-600 text-center mt-10">
            &copy; 2023 Arkatama
          </p>
        </div>
        <img
          src="/ornamen2.png"
          className="absolute -bottom-14 -left-20" 
          style={{zIndex: "-9999"}}
        />
      </div>
    </div>
  );
}

export default App;
