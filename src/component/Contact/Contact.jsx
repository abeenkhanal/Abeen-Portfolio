import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Contact = () => {
    return (
        <div className='mt-20'>
            <div className='grid grid-cols-3 gap-4 w-11/12 mx-auto'>
            <div className='grid gap-7'>
                <div className='flex gap-4'>
                    <div className='flex items-center '>
                    <IoHome className='text-3xl text-blue-400' / >
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>California, United States</h1>
                        <h5 className=''>Santa monica bullevard</h5>
                    </div>

                </div>
                <div className='flex gap-4 '>
                    <div className='text-2xl flex items-center '>
                    <FaPhoneAlt className='text-3xl text-blue-400 ' />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold' >00 (440) 9865 562</h1>
                        <h5>Mon to Fri 9am to 6 pm</h5>
                    </div>

                </div>
                <div className='flex gap-4'>
                    <div className=' flex items-center '>
                    <IoMail className='text-3xl text-blue-400' />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>support@colorlib.com</h1>
                        <h5>Send us your query anytime!</h5>
                    </div>

                </div>
                
                
            </div>
            <div className='grid h-40 gap-7  '>
                <input type="text" placeholder='Enter Your Name' className='border border-gray-400 py-4 placeholder:px-3'/>
                <input type="text" placeholder='Enter Your Name'  className='border border-gray-400 py-4 placeholder:px-3' />
                <input type="text" placeholder='Enter Your Name'  className='border border-gray-400 py-4 placeholder:px-3'/>
            </div>
            <div className=''>
            <input type="text" placeholder='Enter Message' className='border border-gray-400 h-full w-11/12 placeholder:px-3 text-start'/>
            </div>
            </div>
        </div>
    )
}

export default Contact
