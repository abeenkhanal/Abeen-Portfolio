import React from 'react'
import { BsCalendarDate } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Homepage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-300 ">
    <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row lg:gap-24 md:gap-20">
      {/* image section */}
      <div className=''> 
   <img className='rounded-lg w-[600px] h-[400px] object-cover' src="./profile.jpg" alt="image not found" />
      </div>
      {/* details sections */}
      <div>
        <div>
          <h3 className='uppercase text-gray-500 text-sm'>Hello Everybody, i am</h3>
          <h1 className='text-3xl lg:text-4xl font-bold mt-1'>ABEEN KHANAL</h1>
          <h2 className='text-lg lg:text-xl text-gray-600 font-semibold mt-2'>Junior UI/UX Developer</h2>
          <p className='text-gray-500 mt-4'>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
        </div>
        <div className="mt-6 space-y-4 font-medium">
            <div className="flex items-center text-gray-600 gap-3">
              <BsCalendarDate className="w-5 h-5 cursor-pointer hover:text-blue-500 " />
              <span>19th January, 2002</span>
            </div>

            <div className="flex items-center text-gray-600 gap-3">
              <FaPhoneAlt className="w-5 h-5 cursor-pointer hover:text-blue-500" />
              <span>(+977) 9869672969</span>
            </div>

            <div className="flex items-center text-gray-600 gap-3">
              <MdMailOutline className="w-5 h-5 cursor-pointer hover:text-blue-500" />
              <span>abeenkhanal16@gmail.com</span>
            </div>

            <div className="flex items-center text-gray-600 gap-3">
              <TiHomeOutline className="w-5 h-5 cursor-pointer hover:text-blue-500" />
              <span>Butwal, Rupandehi, Nepal</span>
            </div>
          </div>
          {/* social media link */}
          <div className='flex mt-6 gap-4 text-3xl'>
            <a href="" className='text-gray-600 hover:text-blue-500'><FaSquareFacebook /></a>
            <a href="" className='text-gray-600 hover:text-blue-500'><FaSquareTwitter /></a>
            <a href="" className='text-gray-600 hover:text-blue-500'><FaLinkedin /></a>
          </div>
      </div>
    </div>
  </div>
  )
  
}

export default Homepage
