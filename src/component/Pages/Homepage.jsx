import React from 'react'

import Aboutself from '../UI/Aboutself';
import Myself from '../UI/Myself';



const Homepage = () => {
  return (
    <div className="flex justify-center relative items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-300 ">
 <div className='absolute max-w-5xl mt-44'>
  <Aboutself />
  <Myself/>
  
 </div>
 
  </div>
  
  )
  
}

export default Homepage
