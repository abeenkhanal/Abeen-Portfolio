import React from 'react'
import Aboutself from '../UI/Aboutself'
import Myself from '../UI/Myself'
import Testimonials from '../UI/Testimonials';


const About = () => {
  return (
    <div className='flex'>
      <Aboutself/>
      <Myself/>
      <Testimonials/>
    </div>
  )
}

export default About
