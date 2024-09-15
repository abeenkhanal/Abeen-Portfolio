import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Homepage = () => {
  return (
    // <div className='h-screen w-full bg-gradient-to-r from-[#7670FE] to-[#87F0FE]  '>
      
    // </div>
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      {/* Background container */}
      <div className="relative w-full h-full bg-white">
        {/* Blue gradient half */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-blue-500 to-teal-300"></div>

        {/* Content container */}
        <div className="relative z-10 grid lg:grid-cols-2 items-center bg-white w-11/12 mx-auto max-w-6xl rounded-lg shadow-lg overflow-hidden">
          {/* Left: Image section */}
          <div className="flex justify-center items-center lg:p-10 p-5">
            <img
              className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm"
              src="https://via.placeholder.com/300" // Replace with your actual image URL
              alt="Profile"
            />
          </div>

          {/* Right: Content section */}
          <div className="p-10 flex flex-col justify-center">
            <h5 className="uppercase text-gray-500 text-sm">Hello Everybody, I am</h5>
            <h1 className="text-3xl lg:text-4xl font-bold mt-1">Donald McKinney</h1>
            <h2 className="text-lg lg:text-xl text-gray-600 font-semibold mt-2">
              Junior UI/UX Developer
            </h2>
            <p className="text-gray-500 mt-4">
              You will begin to realize why this exercise is called the Dickens
              Pattern (with reference to the ghost showing Scrooge some different
              futures)
            </p>

            {/* Profile Details */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 011-1h6a1 1 0 011 1v2h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h2V2zm5 5a3 3 0 100 6 3 3 0 000-6z"
                    clipRule="evenodd"
                  />
                </svg>
                31st December, 1992
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm8 3a2 2 0 100 4 2 2 0 000-4z"
                    clipRule="evenodd"
                  />
                </svg>
                +44 (012) 6954 783
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.94 3.94a1 1 0 000 1.41L9.34 12l-6.4 6.4a1 1 0 101.42 1.41l6.4-6.4 6.4 6.4a1 1 0 001.42-1.41l-6.4-6.4 6.4-6.4a1 1 0 10-1.42-1.41L10 10.66 3.53 4.36a1 1 0 00-1.42 0z" />
                </svg>
                businessplan@donald
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Santa Monica Boulevard
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
