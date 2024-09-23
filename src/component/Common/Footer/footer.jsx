import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-black mt-56 text-white'>
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto py-10 ">
      {/* About Me Section */}
      <div>
        <h1 className="text-lg font-bold mb-4">About Me</h1>
        <div>
          <p className="mb-6 text-gray-400">
            Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the more successful you become.
          </p>
          <p className="text-sm text-gray-500">
            Copyright ©2024 All rights reserved | This site is made with love by Abeen
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='lg:ml-16'>
        <h1 className="text-lg font-bold mb-4">Newsletter</h1>
        <p className="text-gray-400 mb-4">Stay updated with our latest trends</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter email address"
            className="p-2 rounded-l-md focus:outline-none w-full border border-gray-400 text-black"
          />
          <div className="items-center justify-center p-3 bg-gradient-to-r from-[#7670FE] to-[#87F0FE] cursor-pointer">
            <FaArrowRightLong className="text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Follow Me Section */}
      <div className='lg:ml-20 '>
        <h1 className="text-lg font-bold mb-4">Follow Me</h1>
        <p className="text-gray-400 mb-4">Let us be social</p>
        <div className="flex gap-5">
          <a href="#" className="text-gray-500 hover:text-[#7670FE]"><FaFacebookF /></a>
          <a href="#" className="text-gray-500 hover:text-[#7670FE]"><FaInstagram /></a>
          <a href="#" className="text-gray-500 hover:text-[#7670FE]"><FaLinkedinIn /></a>
          <a href="#" className="text-gray-500 hover:text-[#7670FE]"><IoLogoTwitter /></a>
        </div>
      </div>
    </div>
    </footer>
    )
}

export default Footer
