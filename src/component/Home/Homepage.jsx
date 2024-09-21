import React from 'react'
import { BsCalendarDate } from "react-icons/bs";


const Homepage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-300">
    <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
      {/* image section */}
      <div className=''> 
   <img className='rounded-lg w-full max-w-sm' src="./profile.jpg" alt="image not found" />
      </div>
      {/* details sections */}
      <div>
        <div>
          <h3 className='uppercase text-gray-500 text-sm'>Hello Everybody, i am</h3>
          <h1 className='text-3xl lg:text-4xl font-bold mt-1'>ABEEN KHANAL</h1>
          <h2 className='text-lg lg:text-xl text-gray-600 font-semibold mt-2'>Junior UI/UX Developer</h2>
          <p className='text-gray-500 mt-4'>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
        </div>
        <div className='mt-6 '>
          <div className='flex items-center text-gray-600 gap-3'>
          <BsCalendarDate />31st December, 1992
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
  )
  
}

export default Homepage
