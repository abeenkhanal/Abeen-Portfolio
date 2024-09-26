import React from 'react'

import Aboutself from '../UI/Aboutself';
import Myself from '../UI/Myself';


const Homepage = () => {
  return (
    <div className="flex justify-center relative items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-300 ">
 <div className='absolute max-w-5xl -bottom-44'>
  <Aboutself />
  
 </div>
 
  </div>
  
  )
  
}

export default Homepage
