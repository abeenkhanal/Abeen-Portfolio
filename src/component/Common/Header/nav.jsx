import React from 'react'

const Nav = () => {
    return (
        <nav className='fixed top-0 left-0 w-screen z-50  '>
            <div className='flex  w-11/12 mx-auto justify-between py-5 text-white cursor-pointer'>
                <div>
                    <h1 className='text-2xl font-bold'>MEETME</h1>
                </div>
                <div className='flex'>
                    <ul className='flex gap-10 '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
